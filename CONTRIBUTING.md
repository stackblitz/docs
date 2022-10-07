
# Contributor Manual

We welcome contributions from folks from all skill levels and expertise. We are especially welcoming to new programmers and to those with a keen interest in growing as technical writers or DocOps engineers.

---

## Before you begin

We expect contributors to abide by our underlying [Code of Conduct](CODE_OF_CONDUCT.md). All discussions connected to our docs must be kind, respectful, and harassment-free. We will not dignify PRs or other contributions created in the spirit of disregard for the Code of Conduct.

We believe that communication is the lifeblood of any Open Source project. Please use beginner-friendly language. It's very easy to misunderstand one another in asynchronous, text-based conversations. When in doubt, assume everyone has the best intentions but consider helping them do better with clarifying questions and kind feedback. Remember that for many people English is not their first language and in such communication, native English speakers are also expected to flex their "foreigner muscle".

---

## Types of Contributions

There are numerous ways to contribute to docs:
- **Share feedback**
  - Each docs page features a feedback tool at the bottom - you can use it to let us know what you think!
  - If you see something broken or think any section could be better or less confusing please [check if there's an issue for that already](https://github.com/stackblitz/docs/issues) and if not, feel free to [create one](https://github.com/withastro/docs/issues/new).
- **Share ideas**
  - We want our docs to be delightful. If you have an idea on an improvement, reach out to us on [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Fix typos**
  - Use [Web Publisher](#content-updates-with-web-publisher) for a quick typo fix!
- **Create demos**
  - We'd like to help our users see our SDK methods in action. Would you like to create a Vanilla JS or TS demo? Before you do, please read this contributing guide through and reach out to us on [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Fix an issue**
  - You see an issue you'd like to worn on? Ask to be assigned to fix it. Before you start your work, please read this contributing guide entirely.
- **Reviews**
  - Please feel free to check existing PRs and issues. Share your loving feedback, help the other contributor approach the task in a better way, spot lurking bugs, errors, and mistakes. You can use pr.new to that end - in the URL of the issue or PR, swap "github.com" with "pr.new" to spin up the environment and the preview.

Thank you for making our docs better!

### What makes good issue

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
- demo, page, tutorial request,
- compromised accessibility,
- anything broken: demo, page, url, image,

If what you want to say doesn't really fall into actionable "problem" or "improvement", you can **start a new [GitHub discussions](https://github.com/stackblitz/docs/discussions) topic**. For example, feel free to ask:
- Could we split this page into multiple smaller steps?
- This navigation item doesn't fit where it is - could we move it somewhere else?
- How could we make the docs site more (adjective)?
- What would be the best way to explain (noun)?

---

## Contribution guidelines

### 1. **Issues: creating or choosing an issue**

Except for small typo fixes and content updaets, the starting point for contributing is always an issue. 

**If you see that something is wrong**, you can [check to see if the issue already exists](https://github.com/stackblitz/docs/issues), and if it does, leave a comment saying you'd like to work on it and when you have time to do that - and our team member will assign you. In case the issue doesn't yet exist, feel free to [create one](https://github.com/withastro/docs/issues/new). Before doing that, please see [what makes a good issue](#what-makes-a-good-issue). A docs team member will triage incoming issues and assign labels.

**If you don't have any specific issue you'd like to work on**, you can browse available ones. Please note that we use [issue labels](#issue-labels-we-use) so you can modify your search. After you've found an issue you'd like to work on, leave a comment and tell us when you have time to do that. A docs team member will assign you.

### 2. **Work on the issue**
Once assigned to an issue, choose [the right tool for the job](README.md#development) - you may want to use Web Publisher, Codeflow, or develop locally. We have no preference.

Whenever in doubt or whenever you feel stuck, please ask clarifying questions in the issue thread or on our [Discord](https://discord.gg/EQ7uJQxC). We are here to support you!

In most cases, an assigned issue should be fixed relatively soon (depending on the issue scope). If we don't hear from you, we will ping you. If we still don't hear from you, we may reassign the issue to someone else.

### 3. **Use inclusive language and adhere to accessibility requirements**
Inclusion and respect are core tenets of our [Code of Conduct](https://github.com/stackblitz/docs/CODE_OF_CONDUCT.md). We expect thoughtful language and decisions all the way down to the code. For example, some technical metaphors are alienating or triggering. We ask that contributors go the extra mile to submit code and content which is inclusive in nature.

If you unintentionally use language deemed harmful or choose an inaccessible solution, there is no shame. We will work together to find a better alternative.

### 4. **Create a pull request**
- Try to keep the pull requests [small and well-scoped](https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/). A pull request should address only a single concern.
- For work-in-progress pull requests (for example, to ask for opinion or verify your idea), please use the Draft PR feature.
- In the PR body, document your reasoning behind the changes. Explain why you wrote the code in the way you did or why you structured the content this way.
- Please fill out the PR Template when making a PR.
- All commits in a pull request will be squashed when merged.
_Please note_: a docs team member may close your PR if it has gone stale or if we don't plan to merge the code.

### 5. **Pull request reviews**
- All community pull requests are reviewed by our docs team.
- We require an approval from docs team members for each PR.
- Requested Changes must be resolved (with code or discussion) before merging.
- If you make changes to a PR, be sure to re-request a review.
- Style discussions are generally discouraged in PR reviews.
- Your code will be deployed shortly after it is merged.

---

## Issue labes we use
Our issues are divided by difficulty, domain, and type. 

**DIFFICULTY**:
- [good first issue](https://github.com/stackblitz/docs/labels/good%20first%20issue): issues are meant for newer developers, new writers, and new editors - or folks just starting out in open source.
- [difficulty: easy](https://github.com/stackblitz/docs/labels/Difficulty%3A%20easy): issues are usually confined to isolated areas of existing code.
- [difficulty: medium](https://github.com/stackblitz/docs/labels/difficulty%3A%20medium): issues sometimes entail new features and might affect a significant area of the codebase, but aren't overly complex.
- [difficulty: hard](https://github.com/stackblitz/docs/labels/difficulty%3A%20hard): issues are typically far-reaching, and might need architecture decisions during implementation. This label might also denote highly complex issues.

**DOMAIN**:
- [writing](https://github.com/stackblitz/docs/labels/writing): a writing assignment.
- [editing](https://github.com/stackblitz/docs/labels/editing): checking for typos, correcting typos, improving style, and so on.
- [coding](https://github.com/stackblitz/docs/labels/coding): anything that requires coding skills - from improving the quality of our codebase to making demos.

**TYPE**:
- [quick fix](https://github.com/stackblitz/docs/labels/quick-fix): this should not take longer than 30 minutes.
- [no-code](https://github.com/stackblitz/docs/labels/no-code): you don't need to *code* on this one.
- [priority](https://github.com/stackblitz/docs/labels/priority): please choose this one if you can't make a decision.
- [triage](https://github.com/stackblitz/docs/labels/triage): this issue hasn't been yet triaged by the StackBlitz team so it's not for grabs.

PRs without an associated issue may still be merged, but our docs team will focus on changes that solve existing issues. We strongly encourage creating an issue before working on a PR, unless it's a typo correction.

When in doubt, ask a docs team member by mentioning us on the issue.

---
## Attribution
This Contributing guide is adapted from the fantastic guide by [Dev.to](https://docs.forem.com/contributing/forem/).












> **Tip for new contributors:**
> Take a look at [GitHub's Docs](https://docs.github.com/en/get-started/quickstart/hello-world) for helpful information on working with GitHub.

**See also**:

- [Astro Maintainers](MAINTAINERS.md) manual
- [Support Squad members](SUPPORTSQUAD.md) manual


This document is an active work in progress! But, we hope you'll find some useful information here to get started.






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