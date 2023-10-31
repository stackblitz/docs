---
title: &title Configuring DNS & TLS
description: &description Based off the root DNS zone set in EE Site Configuration (for instance, `stackblitz.example.com`), set the following DNS `A` records to point at your instance's IP.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/enterprise-configuring-dns-tls.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

Based off the root DNS zone set in EE Site Configuration (for instance, `stackblitz.example.com`), set the following DNS `A` records to point at your instance's IP (`172.16.4.20` in this example):

```
A stackblitz.example.com 172.16.4.20
A *.stackblitz.example.com 172.16.4.20
A *.preview.stackblitz.example.com 172.16.4.20
```

## TLS

For TLS, your certificate should have `stackblitz.example.com` as the Common Name (CN), and the following Subject Alternative Name (SAN's):

- `stackblitz.example.com`
- `*.stackblitz.example.com`
- `*.preview.stackblitz.example.com`

### TLS Certificate Renewal

Having trouble updating your TLS cert in StackBlitz? Follow these instructions:

1. SSH into your StackBlitz host VM

2. Retrieve the existing StackBlitz application certificate and key via `​kubectl get secret -o jsonpath={.data} stackblitz-tls-secret`

3. Create a new yaml file on the host VM called `new-kotsadm-tls.yaml` based on the template below:
    ```yaml
    apiVersion: v1
    kind: Secret
    type: kubernetes.io/tls
    metadata:
      annotations:
        kots.io/app-slug: stackblitz
        kots.io/when: "true"
      labels:
        kots.io/app-slug: stackblitz
        kots.io/backup: velero
      name: kotsadm-tls
      namespace: default
    stringData:
      hostname: <your hosted zone>
    data:
      tls.crt: <tls.crt value from step 2>
      tls.key: <tls.key value from step 2>
    ```

4. Replace the `stringData.hostname` field with your existing stackblitz hosted zone (ex: `stackblitz.[COMPANY].com`). This DNS name should already be configured properly for your instance.

5. Replace the `data.tls.crt` and `data.tls.key` with the values you retrieved in step 2. Be sure to copy these values exactly as single lines without adding additional whitespace.

6. Save `new-kotsadm-tls.yaml`

7. Back up the existing self-signed cert via `kubectl get secret -o yaml kotsadm-tls > old-kotsadm-tls.yaml`.

8. Delete the old self-signed certificate via `kubectl delete secret kotsadm-tls`.

9. Apply the new cert via `kubectl apply -f new-kotsadm-tls.yaml`.

10. Visit the dashboard by navigating to the hostname you entered in step 4 on port 8800 (ex: `https://stackblitz.COMPANY.com:8800`).
