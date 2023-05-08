---
title: &title "Collections"
description: &description If you'd like to group projects together, you could create a Collection. This feature is helpful when you like to create a list of your demos or inspiring projects you've forked, or can be used as your developer portfolio.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/collections.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

If you'd like to group projects together, you could create a Collection. This feature is helpful when you like to create a list of your demos or inspiring projects you've forked, or can be used as your developer portfolio.

## Creating a new Collection

To get started, go to the "Collection" sidebar item from the StackBlitz Dashboard view:

![Dashboard](./assets/dashboard-collections-highlightened.png)

This menu item will open an empty Collections page:

![Collections](./assets/collections-empty.png)

If you click on the "New" button, you will see a modal prompting you to create a new Collection:

![Collections modal](./assets/new-collection-modal.png)

## Adding projects to a Collection

Once you created a new Collection, you will be redirected to its page:

![Empty Collection](./assets/empty-collection.png)

Now you can choose projects which you want to add to the Collection:

![Adding projects to a Collection](./assets/adding-projects-to-a-collection.png)

## Sharing a Collection

You can share your Collection with friends by either posting it automatically on Twitter or copying its URL. To do so, use the "Share" button on the chosen Collection page:

![Share button](./assets/share-button.png)
