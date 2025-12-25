---
title: Vitepress test page
head:
  - ['meta', { name: 'robots', content: 'noindex,nofollow' }]
---

# Vitepress test page

Use this page to conveniently test theming and Markdown handling changes.

## Custom containers

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## Footnotes

We can use footnotes[^1]. Multi-paragraph footnotes require indentation[^2] to signal that the text is part of the footnote and not part of the main body of text.

[^1]: Footnote: an explanatory or documenting note or comment at the bottom of a page, referring to a specific part of the text on the page.

[^2]:
    In the written form of many languages, an indentation or indent is an empty space at the beginning of a line to signal the start of a new paragraph.
    
    Many computer languages have adopted this technique to designate "paragraphs" or other logical blocks in the program. 

## Code highlights

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
