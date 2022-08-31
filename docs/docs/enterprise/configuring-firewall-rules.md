---
title: Configuring Firewall Rules
---
Depending on the network configuration, some installs need to have a complete list of expected outbound network traffic in order to
open ports in firewalls and allowed hosts and IP addresses for outbound connectivity.

When StackBlitz is installed with Replicated, it can be downloaded from the Internet or packaged up and delivered in an airgap pacakge. For IP based firewalls rules you can get the needed IPs from [this list of Services and IPs](https://raw.githubusercontent.com/replicatedhq/ips/master/ip_addresses.json).

No outbound internet access is required for airgapped installations, and no installations of StackBlitz ever require inbound access.

| Host | Existing Cluster Installation | Embedded Cluster Installation |Description |
|---|---|---|---|
| proxy.replicated.com | Required | Required | Upstream Docker images are proxied via proxy.replicated.com. The on-prem docker client uses a license ID to authenticate to proxy.replicated.com. This domain is owned by Replicated, Inc which is headquartered in Los Angeles, CA |
| replicated.app | Required | Required | Upstream application YAML and metadata is pulled from replicated.app. The current running version of the application (if any) will be sent, in addition to a license ID and an application IDs are sent to replicated.app to authenticate and receive these YAML files. This domain is owned by Replicated, Inc which is headquartered in Los Angeles, CA |
| Docker Hub | Required | Required | Some dependencies of Replicated are hosted as public images in Docker Hub.|
| k8s.kurl.sh | Not Required | Required | Kubernetes cluster installation scripts and artifacts are served from [kurl.sh](http://kurl.sh). An application identifier is sent in a URL path, and bash scripts and binary executables are served from kurl.sh. This domain is owned by Replicated, Inc which is headquartered in Los Angeles, CA |
| [amazonaws.com](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html#aws-ip-download) | Not Required | <i/>Required | tar.gz packages are downloaded from Amazon S3 during embedded cluster installations. The IP ranges to whitelist for accessing these can be scraped dynamically from the [AWS IP Address Ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html#aws-ip-download) documentation.
