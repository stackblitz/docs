# StackBlitz Docs

Welcome to the home of the [StackBlitz documentation site](https://developer.stackblitz.com)!

Our docs site was built with [VitePress](https://vitepress.vuejs.org/) 💙

## What is StackBlitz?
StackBlitz is an **instant fullstack web IDE for the JavaScript ecosystem**. It is powered by [WebContainers](https://blog.stackblitz.com/posts/introducing-webcontainers/), the first WebAssembly-based operating system which **boots Node.js environment in milliseconds**, securely within your browser tab.

Now you can use the web to build the web.

In fact, why not edit this docs in Codeflow IDE?

<a href="https://stackblitz.com/~/github.com/stackblitz/docs"><img style="display:inline" src="https://developer.stackblitz.com/img/open_in_codeflow.svg" alt="Open in Codeflow"></a>

---

## Let's make the docs better!

Thank you for visiting this repository. We love our community and we appreciate your time.

There are numerous ways to contribute to docs:
- **Share feedback**
  - Each docs page features a feedback tool at the bottom - you can use it to let us know what you think!
  - If you see something broken or think any section could be better or less confusing please [check if there's an issue for that already](https://github.com/stackblitz/docs/issues) and if not, feel free to [create one](https://github.com/stackblitz/docs/issues/new).
- **Share ideas**
  - We want our docs to be delightful. If you have an idea on an improvement, reach out to us on [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Fix typos**
  - Use [Web Publisher](#content-updates-with-web-publisher) for a quick typo fix!
- **Create demos**
  - We'd like to help our users see our SDK methods in action. Would you like to create a Vanilla JS or TS demo? Before you do, please read our [contributing guide](CONTRIBUTING.md) and reach out to us on [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Fix an issue**
  - You see an issue you'd like to worn on? Ask to be assigned to fix it. Before you start your work, please read our [contributing guide](CONTRIBUTING.md).
- **Reviews**
  - Please feel free to check existing PRs and issues. Share your loving feedback, help the other contributor approach the task in a better way, spot lurking bugs, errors, and mistakes. You can use pr.new to that end - in the URL of the issue or PR, swap "github.com" with "pr.new" to spin up the environment and the preview.

Thank you for making our docs better!

### What makes a good issue

When creating an issue, please include:
- a descriptive title,
- a link to what this issue refers to (a page, an example, a section),
- if applicable, a screenshot or screen recording,
- explanation of why you think it is an issue,
- if you have an idea, a possible solution,
- ideally, external links that explain any advanced or lesser-known topics so others can learn from your issue.

Please raise issues in situations like the following:
- confusing, overwhelming, or incorrect explanation,
- outdated examples,
- vague or missing content,
- demo or page request,
- compromised accessibility,
- anything broken: demo, page, url, image,

If what you want to say doesn't really fall into actionable "problem" or "improvement", you can **start a new Discussion topic**. For example, feel free to ask:
- Could we split this page into multiple smaller steps?
- This navigation item doesn't fit where it is - could we move it somewhere else?
- How could we make the docs site more (adjective)?

---

## Development

There are three ways to interact with this repository:
- For **a small content update**, you can use [Web Publisher](#content-updates-with-web-publisher). 
- If you want **to explore and develop** this site, use [StackBlitz Codeflow](#developing-with-stackblitz-codeflow). 
- Alternatively, you can [run the docs locally](#developing-locally).

### Content updates with Web Publisher

Use Web Publisher for small content updates for a pleasant editing experience:

1. Open the page on our [docs site](https://developer.stackblitz.com), scroll down, and click "edit this page".
2. Update the document in the editor on the left and see the rendered change in the preview window on the right.
3. Once you're done, in the top right corner click on the green button that says "Propose changes".
4. You will be redirected to a GitHub PR template page prepared for you to submit a PR.


### Developing with StackBlitz Codeflow
Use StackBlitz Codeflow for bigger content updates. Codeflow will spin up the entire dev environment with a running dev server. When using Codeflow, please remember to commit and push your changes frequently.

To access it, [click this button](https://stackblitz.com/~/github.com/stackblitz/docs).

Alternatively, add “pr.new” to the beginning of this GitHub repository URL.

### Developing locally
You can also explore and develop this site locally.

After cloning the repository, run the docs site in development mode with:

```sh
npm install
npm start
```

### Editor setup

We have already equipped this repository with the suggested extension ([Vue Language Features extension (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)). Additionally, you can use [Volar’s Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471) (aka disabling the built-in TypeScript and JavaScript Language Features extension for the current workspace).

### Enable Algolia and Google Tag Manager

For production, the docs expect the following environment variables to be defined:

- `VITE_ALGOLIA_ID`: Algolia `appId`.
- `VITE_ALGOLIA_KEY`: Algolia `apiKey`.
- `VITE_GTM_ID`: Google Tag Manager id.

They can be defined in CI configuration, or in a `.env` file:

```sh
# .env
VITE_ALGOLIA_ID='******'
VITE_ALGOLIA_KEY='******'
VITE_GTM_ID='******'
```

---

## Join our community

- [Participate in a discussion](https://github.com/stackblitz/docs/discussions)
- [Join our Discord](https://discord.gg/EQ7uJQxC)
- Read our [blog](https://blog.stackblitz.com/) and see what we have been up to in our [monthly update posts](https://blog.stackblitz.com/categories/monthly-updates/)!
- Share your StackBlitz projects on [Twitter](https://twitter.com/stackblitz)!
- Reach out to our DevRel team via [email](mailto:devrel@stackblitz.com) with your StackBlitz ideas, dreams, and wishes!

