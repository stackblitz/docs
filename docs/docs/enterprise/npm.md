---
title: Connect NPM registry
---

StackBlitz is excited to offer custom npm registry support to organizations using StackBlitz Enterprise Edition (EE). To enable this you need to be logged in as an admin. If your npm registry requires authentication, you may need to coordinate with whoever manages your npm administration before proceeding.

By default, StackBlitz EE points at the public npm registry. You can configure StackBlitz EE to point at your own internal registry, even if authentication is required. Additionally, StackBlitz's npm integration is designed to work with 3rd party registries like Artifactory.

## Linking your registry

In the StackBlitz Admin panel header, hover over "Settings" and click on "npm". This will take you to the "NPM Settings" page:

![NPM Config](/doc_images/npm-config.png)

To start, check the "enabled" box. Then, fill in the URL of your npm registry.

If your registry requires an authorization token for access, you'll need to generate a token and provide it in the "Auth Token" field.

When completed, click "Save NPM Settings".