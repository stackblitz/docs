---
title: Setting up SSO
description: StackBlitz is excited to offer SAML-based Single Sign-on (SSO) to organizations using StackBlitz Enterprise Edition (EE).
og_image: enterprise-setting-up-sso.png
---

# {{ $frontmatter.title }}

StackBlitz is excited to offer SAML-based Single Sign-on (SSO) to organizations using StackBlitz Enterprise Edition (EE). To enable this feature, you need to be logged in as an admin. If you are also a company IdP admin, we can get started! If not, you will need to coordinate with whoever manages your identity provider (IdP).

StackBlitz SAML integration relies on a user-level token. To ensure consistent delivery of SAML services, we recommend using an admin service account email for the admin account such as `IT@yourcompany.com` to avoid email collisions with other users.

:::info Please note that:

- After SAML is enabled, all non-admin members in StackBlitz must log in with SAML. Admins can still log in with a password as needed.
- Only StackBlitz admins have the superpowers to enable SAML for the organization.
- StackBlitz offers just-in-time provisioning. This means that if a user logs into StackBlitz for the first time using SSO, an account will automatically be created.
:::



### Configure your IdP

:::warning IMPORTANT: 
Each user account (including the Admin User) must have a unique email address. Use a service account email address (like IT@yourcompany.com) to ensure that the admin account doesn't cause email collisions for SSO users. If your admin email address matches an SSO user's email address, said SSO user will receive an "invalid login or password" error when signing in.  
\
&nbsp;
Should this happen, we recommend the following steps:
  - Log in as admin
  - Navigate to `https://editor.stackblitz.[COMPANY.COM]/users/edit` to change your email address to a different one. It will show the same screen as the changing email/password when first logging in as an admin, but you only need to change your email.
:::

Begin by logging into your StackBlitz admin account and then click on "Setup Authentication". This will take you to the "Auth Settings" page:

![SAML Config](./assets/saml-config.png)

To start, check the "enabled" box on the SAML settings form.

Next, you will find one piece of information that is unique to your organization. Look for the the Assertion Customer Service (ACS) URL and paste it into the corresponding field in your IdP. Additionally, define the "Service Provider Entity ID" (Issuer) and add it into your IdP.

Last, you need to either:

- provide the "App Federation Metadata URL" - usually a URL to an XML file from IdP;

Or:

- fill in the "IDP SSO Target URL" and "Certificate Fingerprint", which should be available from your IdP.

### Fill out the remaining fields in your IdP

Admins can choose to map attributes that will send user information to StackBlitz. This allows StackBlitz to get user information for provisioning users. Best practices recommend that these attributes are mapped in addition to Name ID (Email Address):

| Field        | SAML Attribute | Description                                            |
| ------------ | -------------- | ------------------------------------------------------ |
| Display name | `name`         | The display name of the user (first and last or other) |
| Email        | `email`        | The email of the user                                  |

:::warning Please note: These attributes are case-sensitive and must be entered exactly as you see here.
:::

Please ensure that the email addresses in the IdP are what your users will be using to log into StackBlitz.

### Troubleshooting

If you're unable to login after verifying these things, please reach out to [enterprise@stackblitz.com](mailto:enterprise@stackblitz.com) for support.
