---
title: Migrating StackBlitz Data
sidebar_label: Data Migration
---

By default, StackBlitz Enterprise Edition (EE) will deploy a basic PostgreSQL container instance for persisting user and project data. This provides trial users with the fastest possible deployment experience but is not well-suited for production use.

For production deployments, we suggest an external PostgreSQL solution with managed backups and security enhancements (e.g. PostgreSQL for Amazon RDS, or Azure Database for PostgreSQL). Once an external database is available, migrating your data away from the embedded database is simple.

## Prerequisites

* `kubectl` access to the Kubernetes cluster where StackBlitz is installed. On [embedded installs](https://developer.stackblitz.com/enterprise/installation/quickstart/), `kubectl` is fully configured already, so a login shell on the host (usually via SSH or console) is sufficient.
* Network reachability from your cluster node(s) to the target instance of PostgreSQL, which by default listens on TCP port 5432.

:::warning

Most of the commands in this guide require you to provide the Kubernetes [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) where StackBlitz is installed. If you followed the [embedded installation procedure](https://developer.stackblitz.com/enterprise/Installation/quickstart), your namespace is `default`. If you installed into an existing Kubernetes cluster your namespace is `stackblitz`, unless a custom value was provided during installation.

:::

## Database Export

Execute the following on any host with `kubectl` access to the cluster:

```
K8S_NAMESPACE=<your stackblitz namespace> \
PG_POD=$(kubectl get pods -o name -n $K8S_NAMESPACE| grep 'postgres' | grep -v 'kots') && \
kubectl exec -n $K8S_NAMESPACE -it $PG_POD -- sh -c \
'pg_dump --if-exists -xcCO \
-U $POSTGRES_USER \
-d stackblitz_production' | \
gzip > stackblitz_dump.sql.gz
```

This will leave a compressed file called `stackblitz_dump.sql.gz` in the working directory which contains all SQL code necessary to recreate the `stackblitz_production` database, its schema, and all table data on another instance of PostgreSQL.

## Database Import / Restore

From the same directory (wherever `stackblitz_dump.sql.gz` is stored), execute the following:

```
K8S_NAMESPACE=<your stackbltiz namespace> \
PG_POD=$(kubectl get pods -o name -n $K8S_NAMESPACE | grep 'postgres' | grep -v 'kots' | cut -d'/' -f2) && \
kubectl cp stackblitz_dump.sql.gz $K8S_NAMESPACE/$PG_POD:/var/lib/postgresql/data/stackblitz_dump.sql.gz && \
kubectl exec -n $K8S_NAMESPACE -it $PG_POD -- sh -c \
'zcat /var/lib/postgresql/data/stackblitz_dump.sql.gz | \
psql \
-h <managed DB hostname> \
-U <managed DB username>
-p <managed DB port (optional, 5432 by default)> \
-d postgres'
```

:::warning

The restore will create the `stackblitz_production` database and connect to it before restoring. If the DB already exists, it will drop it and create it again before restoring. In case it doesn't exist, we connect to the default `postgres` DB first. You **must** provide a username which is allowed to create, read, and write databases, tables, and indexes on the target PostgreSQL instance.

:::

## Encryption Key

Generally, this guide assumes the sole goal of migrating from the embedded PostgreSQL instance to an externally managed one. For users wanting to reinstall StackBlitz itself while retaining or migrating existing user & project data, the procedure mostly remains the same, except that StackBlitz's encryption key **must** be carried forward as well.

You can get the encryption key value from your existing StackBlitz deployment via the KOTS CLI:

```
kubectl kots get config -n <your stackblitz namespace> --sequence <current release sequence number> --appslug stackblitz | grep -A1 'stackblitz_enc'
```

:::tip

You can get the current release sequence value by checking the release history panel in the KOTS admin dashboard, or with the following KOTS CLI command: `kubectl kots get versions stackblitz -n <your StackBlitz namespace>`. The top sequence number shown should be current.

:::

This command will output values for `stackblitz_enc_key_settings`, `stackblitz_enc_key`, and if set, `stackblitz_enc_custom_key`. If the value of `stackblitz_enc_key_settings` is `stackblitz_default_generated`, your encryption key is the value of `stackblitz_enc_key`, otherwise it's the value of `stackblitz_enc_custom_key`.

Once you have the old encryption key, go to the KOTS admin dashboard, and select "Custom Key" in the "Key Settings" field. Paste the old encryption key into the "Custom Encryption Key" field that appears, then save and deploy the new configuration.

