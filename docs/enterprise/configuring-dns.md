---
title: Configuring DNS & TLS
---

# {{ $frontmatter.title }}

Based off the root DNS zone set in EE Site Configuration (for instance, `stackblitz.example.com`), set the following DNS `A` records to point at your instance's IP (`172.16.4.20` in this example):

```bash

A stackblitz.example.com 172.16.4.20
A *.stackblitz.example.com 172.16.4.20
A *.preview.stackblitz.example.com 172.16.4.20
```

## TLS

For TLS, your certificate should have `stackblitz.example.com` as the Common Name (CN), and the following Subject Alternative Name (SAN's):

- `stackblitz.example.com`
- `*.stackblitz.example.com`
- `*.preview.stackblitz.example.com`
