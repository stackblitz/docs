---
title: Aggregating Logs
sidebar_label: Aggregating Logs
head:
  - - meta
    - name: og:image
      content: https://developer.stackblitz.com/img/og/enterprise-aggregating-logs.png
---

# {{ $frontmatter.title }}

StackBlitz EE is built on Kubernetes and PostgreSQL, which makes shipping your StackBlitz EE logs to your existing logging infrastructure relatively simple.

## Splunk

Splunk offers 2 official plugins that are compatible with your embedded StackBlitz EE installtion:

### Splunk DB Connect (DBX)

StackBlitz EE provides logs of Events and Visits. These logs are stored permanently within the application's PostgreSQL database.

We recommend using [Splunk DB Connect](https://splunkbase.splunk.com/app/2686/) to harvest these records from the StackBlitz PG DB and deliver them to Splunk. This is only recommended if you are using an external PostgreSQL database which is able to handle the additional query load.

Follow the [DBX documentation provided by Splunk](https://docs.splunk.com/Documentation/DBX/3.7.0/DeployDBX/AboutSplunkDBConnect) to configure it to read from the `ahoy_events` and `ahoy_visits` table. Your StackBlitz account manager can provide additional details about the table structure if needed.

### Splunk Connect for Kubernetes

The StackBlitz EE application is installed within a Kubernetes cluster which is managed and configured by our installation tools (see: [Replicated Kurl](https://kurl.sh/docs/introduction/)). As such, we recommend using [Splunk Connect for Kubernetes](https://splunkbase.splunk.com/app/4497/) for ingesting these logs into Splunk. You can use this tool to ship logs to Splunk directly from your StackBlitz EE containers running within Kubernetes.

For installation and configuration instructions, see the [Splunk Connect for Kubernetes documentation on GitHub](https://github.com/splunk/splunk-connect-for-kubernetes). Let your StackBlitz account manager know if you need any additional details regarding the StackBlitz Kubernetes platofrm.
