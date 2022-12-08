---
title: Setting up SSO with Okta
head:
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/enterprise-setting-up-sso-with-okta.png'}]
---

# {{ $frontmatter.title }}

StackBlitz is excited to offer SAML-based Single Sign-on (SSO) to organizations using StackBlitz Enterprise Edition (EE). To enable this feature, you need to be logged in as an admin within StackBlitz. If you are also a company admin for Okta and have the ability to create App Integrations, we can get started! If not, you will need to coordinate with the manager of your organization on Okta.

StackBlitz SAML integration relies on a user-level token. To ensure consistent delivery of SAML services, we recommend using an admin service account email for the admin account such as `IT@yourcompany.com` to avoid email collisions with other users.

:::info
- After SAML is enabled, all non-admin members in StackBlitz must log in with SAML. Admins can still log in with a password as needed.
- Only StackBlitz admins have the superpowers to enable SAML for the organization.
- StackBlitz offers just-in-time provisioning. This means that if a user logs into StackBlitz for the first time using SSO, an account will automatically be created.
:::

### Navigate to Auth Settings Page Within the Admin Panel

Begin by logging into your StackBlitz admin account and then click on "Setup Authentication". This will take you to the "Auth Settings" page:

![SAML Config](./assets/saml-config.png)

This page can also be accessed directly at `https://editor.<Your StackBlitz Domain>/admin/auth_settings`.

### Creating an App Integration in Okta

Once you have the StackBlitz Auth Settings page open, you'll need to log in to Okta and access the Admin dashboard to create an application. Using the sidebar on the admin dashboard, navigate to `Applications` > `Applications` and select the `Create App Integration` button. Choose `SAML 2.0` as the type of application.

![Create a SAML App]./assets/okta-sso/okta-integration.png)

Next, fill out the `App name` for the SAML integration. This is what the App will be called within Okta. We recommend using the value `StackBlitz`. You can optionally upload a logo for the app as well.

![Create an App Integration in Okta](./assets/okta-sso/okta-integration-2.png)

On the next page, you'll need to fill out a few options using values from the Auth Settings page in the StackBlitz admin dashboard.

- For the `Single sign on URL`, use the `Assertion Customer Service URL` from the StackBlitz Auth Settings page.
- For `Audience URI (SP Entity ID)`, choose an identifier for the SAML application. We recommend using `stackblitz`. Use the same value in your StackBlitz SAML settings for `Issuer (Service Provider Entity ID)`.
- In the `Attribute Statements (optional)` section, you must configure the `email` and `name` attributes for your users. We recommend using `user.email` for the `email` attribute, and `user.firstName + " " + user.lastName` for the `name` attribute.

![Configure SAML Integration in Okta](./assets/okta-sso/okta-integration-3.png)

Proceed to create the SAML integration. YOu'll be prompted with the screen below. You'll need to use the values from this screen to configure the SAML integration within StackBlitz.

![Okta SAML config for StackBlitz](./assets/okta-sso/okta-integration-4.png)

### Configuring StackBlitz SAML Settings for Okta

In your StackBlitz SAML Settings, configure the following values:

- For `IDP SSO Target URL` in StackBlitz, use the `Identity Provider Single Sign-On URL` value from the first section in the screen above.
- For `IDP Certificate`, copy and paste the `X.509 Certificate` value from the third section in the screen above.
- For `Issuer (Service Provider Entity ID)`, make sure to use the same value that was specified for `Audience URI (SP Entity ID)` when creating the SAML app in Okta.
- Optionally, you can specify a custom `Integration Name` (for instance, "Okta") to change the text on the login pages of StackBlitz to say `Sign In With <Integration Name>`.

![Okta SAML config in StackBlitz Admin Panel](./assets/okta-sso/okta-integration-5.png)

Finally, ensure the `Enabled` checkbox for SAML Settings is checked and hit the `Save Auth Settings` button. StackBlitz should now be configured to log in with Okta. Once users or groups have been assigned to the StackBlitz SAML app within Okta, you should be able to log out of the admin panel and log in via Okta!

### Adding Assingments to the StackBlitz SAML app

In order to provide the best user experience for your developers, we recommend providing access to StackBlitz by utilizing Okta groups. While you can provide access to individual users on a case-by-case basis, this can prevent users from accessing the application in a self-service manner.

To provide a group of users access to StackBlitz, navigate to the StackBlitz App page within the Okta admin panel and select assignments tab. Then click on the `Assign` dropdown and select `Assign to Groups`.

![Okta SAML config in StackBlitz Admin Panel](./assets/okta-sso/okta-integration-6.png)

Select a group that encompasses all potential users of the application. If there are no specific groups representing your user base, we recomend using the default Okta group `Everyone`. Click `Assign` next to the group you'd like to assign the application to.

![Okta SAML config in StackBlitz Admin Panel](./assets/okta-sso/okta-integration-7.png)

Once completed, you should be able see the group in the `Assignments` section of the SAML app.

![Created App Assignment in Okta](./assets/okta-sso/okta-integration-8.png)

If you need a more customized assignment for your installation, reach out to your Okta administrator for assistance.

### Troubleshooting

Unable to log in after following these steps? Verify the following information:

- Check to see if `Audience URI (SP Entity ID)` in the SAML app within Okta and `Issuer (Service Provider Entity ID)` in your StackBlitz SAML Settings are configured to the same value.
- Make sure the email address for the `admin` account doesn't collide with another user's email.
- Make sure the user you're trying to log in with has an assignment for the SAML app within Okta.

If you're still unable to login after verifying these things, please reach out to [enterprise@stackblitz.com](mailto:enterprise@stackblitz.com) for support.
