
# Contributor Manual

We welcome contributions from folks from all skill levels and expertise. We are especially welcoming to new programmers and to those withdchange a keen interest in growing as technical writers or DocOps engineers.

---

## Before you begin

We expect contributors to abide by our underlying [Code of Conduct](CODE_OF_CONDUCT.md). All discussions connected to our docs must be kind, respectful, and harassment-free. We will not dignify PRs or other contributions created in the spirit of disregard for the Code of Conduct.

We believe that communication is the lifeblood of any Open Source project. Please use beginner-friendly language. It's very easy to misunderstand one another in asynchronous, text-based conversations. When in doubt, assume everyone has the best intentions but consider helping them do better with clarifying questions and kind feedback. Remember that for many people English is not their first language and in such communication, native English speakers are also expected to flex their "foreigner muscle".

---

## Types of Contributions

There are numerous ways to contribute to docs:
- **Share feedback**
  - Each docs page features a feedback tool at the bottom - you can use it to let us know what you think!
  - If you see something broken or think any section could be better or less confusing please [check if there's an issue for that already](https://github.com/stackblitz/docs/issues) and if not, feel free to [create one](https://github.com/stackblitz/docs/issues/new).
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

**If you see that something is wrong**, you can [check to see if the issue already exists](https://github.com/stackblitz/docs/issues), and if it does, leave a comment saying you'd like to work on it and when you have time to do that - and our team member will assign you. In case the issue doesn't yet exist, feel free to [create one](https://github.com/stackblitz/docs/issues/new). Before doing that, please see [what makes a good issue](#what-makes-a-good-issue). A docs team member will triage incoming issues and assign labels.

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