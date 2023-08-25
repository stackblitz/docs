---
title: &title Environment Variables
description: &description 'How to work with sensitive data using Codeflow'
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

One way to handle reusable configuration data, such as sensitive data, is to use environment variables. These are encrypted values that can be set for each project and each user. This way, you can customize your configuration data without exposing it to others.