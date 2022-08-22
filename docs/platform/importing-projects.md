---
title: Importing projects
---

# Importing projects

## Upload from your computer

With your desired StackBlitz project open, drag and drop any files and folder you want to import:

<img
  alt="Animation of dragging files from a local folder onto the StackBlitz editor sidebar"
  src="https://i.imgur.com/7F9r1xw.gif"
/>

## Import from GitHub

You can run any public repo on GitHub by providing the username and repo name in the URL like so:

`stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}`

![Public GitHub Repo](/doc_images/github-public-repo.png)

![Public Repo Import from GitHub](/doc_images/import-from-github.png)

And you can also optionally specify a branch, tag, or commit:

`.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}`

Whenever you push commits to GitHub, the corresponding StackBlitz project automatically updates with the latest changes — ensuring your GitHub repo remains the code’s source of truth.

The GitHub importer imports any projects with a `package.json`, but note that unsupported technologies will not run. This includes backend languages not supported by Node.js (like PHP, Python or Java), databases like MySQL and PostgreSQL that require a binary server process, and some specific npm packages which are not fully compatible with WebContainers yet.

### Defining a launch command

Oftentimes, the first thing you do when opening a project is to launch a command, for instance, to run a development server.

Usually, these kinds of commands exist in the `scripts` section of your project's `package.json` file and you would manually type `npm run dev` to execute them.

You can provide an [npm script](https://docs.npmjs.com/cli/v8/using-npm/scripts) to run automatically when the editor opens with the `terminal` query parameter:

`stackblitz.com/fork/github/{GH_USERNAME}/{REPO_NAME}?terminal={NPM_SCRIPT_NAME}`

:::tip Example
The following URL will open the `vitesse` repository of the `antfu` user, install the NPM dependencies, and run `npm run dev` command in the terminal:

`stackblitz.com/github/antfu/vitesse?terminal=dev`
:::

### Setting up the imported project’s title

By default, the GitHub importer will set the project's title based on the GitHub project owner's name and repository name.

To customize the title of the imported project, add the `title` query parameter to the import URL like so:

`stackblitz.com/fork/github/{GH_USERNAME}/{REPO_NAME}?title={CUSTOM_TITLE}`

## Importing private projects

:::info Note
Importing private GitHub repos is a feature available with our memberships. If you're interested in being a member, check details on our [StackBlitz Cloud](https://stackblitz.com/membership) page.
:::

**1.** Go to your dashboard and open a new JavaScript blank project
![Dashboard for JavaScript Blank Project](/doc_images/private-repo-starter.png)

**2.** Click on 'Connect repository' on the top left
**3.** Click on the 'importing from an existing repository' link
![Connect and import GitHub repo](/doc_images/connect-to-existing-repo.png)

**4.** Paste your full GitHub repo URL
![Paste GitHub repo URL to import](/doc_images/import-existing-repo.png)

The video below outlines a workaround to edit collaboratively in a private repo:

<iframe src="https://www.loom.com/embed/54c9f65e05494b00b6aa1bb9e0bbe7ab" width="100%" height="400px" />

## StackBlitz API

You can create new StackBlitz projects programmatically from any data source using our [POST API](/docs/platform/post-api) or the [openProject](/docs/platform/javascript-sdk#sdkopenprojectproject-opts) & [embedProject](/docs/platform/javascript-sdk#sdkembedprojectelementorid-project-embedopts) methods in our [JavaScript SDK](/docs/platform/javascript-sdk).
