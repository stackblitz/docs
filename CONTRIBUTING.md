
# Contributor Manual

We welcome contributions of any size and contributors of any skill level. As an open source project, we believe in giving back to our contributors. We are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

> **Tip for new contributors:**
> Take a look at [GitHub's Docs](https://docs.github.com/en/get-started/quickstart/hello-world) for helpful information on working with GitHub.

**See also**:

- [Astro Maintainers](MAINTAINERS.md) manual
- [Support Squad members](SUPPORTSQUAD.md) manual


This document is an active work in progress! But, we hope you'll find some useful information here to get started.

## Types of Contributions

We encourage you to:

- **File an Issue** to let us know of outdated, confusing, or incorrect documentation. You can also let us know of any problems you encounter on the site itself.

- **Start a Discussion** if you're not sure that your "issue" rises to the level of incorrect documentation requiring a "fix," but you still want to share ideas and opinions.

- **Make a PR directly** for very obvious documentation fixes like typos or broken links. 

We provide new content and rework existing content _in response to GitHub Issues and Discussions_. 

Submitting an Issue is usually the first step to making a change. After an Issue has been considered by the community, we often reach out to community members to encourage them to submit PRs based on existing Issues.

Larger contributions to the docs are encouraged after participating in Issues and Discussions, as unsolicited material may not fit into our existing plans. 

> Tip: Existing PRs and Issues need reviewing, triaging, and feedback, too! You can make valuable contributions by commenting, suggesting, testing, researching, brainstorming and generally helping in all areas on GitHub!


<!-- ### Examples of Helpful PR Contributions
- typo fixes (to any language)
- correcting broken links (in any language)
- rewriting broken code samples (typos, or incorrect/incomplete code)
- additions or corrections to a short section on a page
    - adding a new or undocumented item in a list with a short description
    - noting or removing a deprecated feature -->

### Examples of Helpful GitHub New Issues

- a particular explanation is confusing (with explanation)
- a code example is wrong (with or without a proposed fix)
- accessibility (a11y) issues discovered
- missing content
- a request for an example of how to implement a specific feature (e.g. responsive nav bar)

### Examples of Helpful GitHub PRs
 - PRs addressing an existing Issue
 - unsolicited PRs to address typos, broken links, and other minor problems
<!--TODO: Link to past successful PRs, and explain why they were successful (maybe best for a later section) -->

### Examples of Helpful GitHub Discussions
- is this page in the right section of the docs?
- is anything missing from our docs landing page?
- is this theme color too bold?
- is site navigation clear and helpful?
- is our "Astro vs X" page providing helpful comparisons between Astro and other website builders?

<!-- ## Who Are We? -->

## Making a New Issue

If you're unsure which type of contribution best represents your concern, please [make a new issue](https://github.com/withastro/docs/issues/new)! 

### Writing an Issue

Helpful issues usually include: 
- Clear descriptive titles
- Links to relevant pages/files
- Explanations as to why (or _for whom_) this is a problem
- Optional: proposed solutions

## Making PRs (pull requests)

> Need help making a PR? [Join us on Discord](https://astro.build/chat), we'll be more than glad to help you out!

Contributions to the documentation site are made by editing the docs repository. You can do this directly on GitHub.com or by creating a copy of the repository locally, making your changes there, and contributing back to our repository.

> **Note**
> By default, your merged PR to an English page will trigger our Translation Status Tracker. If your change should **NOT** be applied to every language (e.g. a typo fix to an English word), please include the keyword "en-only" in your PR title.  See the next section for more details.

**Internationalization (i18n)**

Please only add new text content to the docs **in English**, by modifying only **`.md` files located within `src/pages/en/`**. 

We have automated systems in place for notifying our community translators that there is new material to be translated, so there is no need to make changes to additional languages yourself. 

Our Docs are translated into several languages and we rely on automation to notify our translators that English pages have changed. By default, when a PR to an English page is merged, our Translation Status Tracker is updated.  

**When choosing a PR title, please consider whether your PR should or should NOT trigger a rewrite to pages in other languages**: some tiny fixes are English only (e.g. spelling of English words) but some *will* require updating all language pages (e.g. a small error in a code sample).  Please use the keyword "en-only" in your PR title to override this default behavior and indicate that your PR does **NOT** require translating.

**Pages generated from outside sources**

Some of our English-language pages are generated from outside sources and maintained in another repo. Currently, these files are `configuration-reference.md` and all those under the `integrations-guides/` directory.

The page's **Edit this page** button should redirect you to the file that should be changed. Alternatively, you can get the correct URL from the file's `githubURL` frontmatter property.

> **Note**
> All of the generated pages will have a dev-only warning at the top and the `githubURL`frontmatter property.

When you make a PR with docs changes in another repo, please ping **@withastro/maintainers-docs** so we are aware of the changes made and can properly review your contribution.

### Edit this Page via GitHub

Every page on [docs.astro.build](https://docs.astro.build/) has an **Edit this page** button in the sidebar. You can click that button to edit the source code for that page in **GitHub**.

After you make your changes, click **Commit changes**.
This will automatically create a [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) of the docs in your GitHub account with the changes.

Once you have committed your edits to your fork, follow the prompts to **create a pull request** and submit your changes for review.

Every pull request needs to be reviewed by our contributors and approved by a maintainer.

You can also read an annotated blog post with screenshots [demonstrating the process of editing the docs this way](https://www.rainsberger.ca/posts/contribute-open-source-docs-edit-page-on-github/).

### Contribute PRs using an online code editor (e.g. StackBlitz, CodeSandbox, Gitpod)

Editing a local fork on GitHub.com is convenient for small text changes, but does not allow you to see a live preview of the site.

You can instead open your fork in an online IDE (integrated development environment) for a code editor and live preview without needing to set up any local development environment. Each online IDE has its own shortcut URL for opening an existing repository, and will allow you to create pull requests after you have made changes.

See specific instructions for opening an existing repository in [CodeSandbox](https://codesandbox.io/docs/importing#import-from-github), [StackBlitz](https://developer.stackblitz.com/docs/platform/importing-projects/#import-from-github) and [Gitpod](https://www.gitpod.io/docs/getting-started#start-your-first-workspace) on their respective websites.

Note that CodeSandbox and StackBlitz provide Astro syntax highlighting in their custom code editors, while Gitpod supports the full [Astro VSCode extension](https://docs.astro.build/en/editor-setup/#vs-code).

### Contribute PRs by Developing Locally

To begin developing locally, checkout this project from your machine.

```shell
git clone git@github.com:withastro/docs.git
```

You can install and run the project locally using [pnpm](https://pnpm.io/). Head to [the pnpm installation guide](https://pnpm.io/installation) to get that set up. Then, run the following from your terminal:

```shell
pnpm install

pnpm start
```

If you’re copying these instructions, remember to [configure this project as a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork).

```shell
git remote add upstream git@github.com:withastro/docs.git
```

At any point, create a branch for your contribution.
We are not strict about branch names.

```shell
git checkout -b add/partial-hydration-typo-fix
```
### Opening a PR

One you have made your changes using any of the above methods, you’re ready to create a “Pull Request!” 

This will let the Astro docs team know you have some changes to propose. At this point we can give you feedback and might request changes. For translations, we like to have at least one other person who knows the language you are translating into review the PR.

[Read more about making a pull request in GitHub’s docs](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request)

Please include a clear title. The description will be pre-filled with questions that you can answer by editing right in the text field.

Every pull request generates a preview of the docs site, including your proposed changes, using **Netlify** for anyone to see.

Use the **Deploy Preview** link in your pull request to review and share your changes.

The docs site will be automatically updated whenever pull requests are merged.


### Helpful information about Forks

On GitHub you’ll need a “fork” of this repository to work on. This is your own copy where you can make changes. [Read more about forks in GitHub’s docs](https://guides.github.com/activities/forking/).

Not sure how to get started with GitHub, forks, pull requests, or want a quick refresher? You might want to check out this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

#### Creating a fork
To create your copy, click the <kbd>Fork</kbd> button at the top right of any page in this repository.

#### Maintaining a fork
When you first create your fork, it will be an exact copy of this repository. Over time, `withastro/docs` will change as the docs are updated, but your fork won’t automatically stay up-to-date. Here are some ways to keep your fork in sync with this repo.

##### Manually via the GitHub UI
1. Navigate to your fork on GitHub
2. Click <kbd>Fetch upstream</kbd> and then <kbd>Fetch and merge</kbd>

##### Manually from the command line
In the terminal on your computer:
1. Make sure you’re on the main branch: `git checkout main`
2. Fetch and merge updates: `git pull upstream main`
3. Push the updates back to your fork on GitHub: `git push origin main`

##### Automatically with a GitHub app
1. Go to [the “Pull” Github app page](https://github.com/apps/pull)
2. Click <kbd>Install</kbd>
3. Follow the instructions to select your fork

## Next Steps

- [Read the docs](https://docs.astro.build/)
- [Fork the docs](https://github.com/withastro/docs/fork)
- [Raise an issue](https://github.com/withastro/docs/issues/new)
- [Discuss the docs](https://discord.gg/cZDZU3hJHc)