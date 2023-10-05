---
title: &title Collaboration and Access Control
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {name: 'twitter:title', content: *title}]
---

# {{ $frontmatter.title }}

### Github Repositories
StackBlitz Teams seamlessly ingest all repository access controls directly from your Github Organization: if a user has access to a repository in Github, they will have the same access with their paid StackBlitz Teams account. You can read more on controlling access to Github Organization on this [GitHub documentation page](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations).

### StackBlitz Projects
By default, all StackBlitz projects created within a Team are publicly viewable via their unqiue URL and anyone in the Team can see them in the StackBlitz Dashboard and has edit access to them. Any project owner can change the visibility settings and add additional editors or co-owners by clicking the “Share” button within the project which will bring up the settings pane shown below:

:::tip
Currently it is not possible to hide projects (or remove edit access) from other members within the StackBlitz Team. Selecting Visibility: Private will only hide the project from users NOT in the Team. [Let us know](mailto:hello@stackblitz.com) if additional configurability here is important to you.
:::