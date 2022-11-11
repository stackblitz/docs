# StackBlitz Docs

Добро пожаловать в дом [сайт документации StackBlitz](https://developer.stackblitz.com)!

Наш сайт docs был создан с помощью [VitePress](https://vitepress.vuejs.org/) 💙.

## Что такое StackBlitz?
StackBlitz - это **постоянная fullstack web IDE для экосистемы JavaScript**. Он работает на базе [WebContainers](https://blog.stackblitz.com/posts/introducing-webcontainers/), первой операционной системы на базе WebAssembly, которая **загружает среду Node.js за миллисекунды**, безопасно внутри вкладки вашего браузера.

Теперь вы можете использовать сеть для создания сети.

---

## Давайте сделаем документы лучше!

Спасибо, что посетили это хранилище. Мы любим наше сообщество и ценим ваше время.

Существует множество способов внести свой вклад в разработку документов:
- **Поделитесь отзывами**
  - Внизу каждой страницы документов есть инструмент обратной связи - вы можете использовать его, чтобы сообщить нам своё мнение!
  - Если вы видите, что что-то сломано или считаете, что какой-либо раздел может быть лучше или менее запутанным, пожалуйста, [проверьте, есть ли уже соответствующий вопрос](https://github.com/stackblitz/docs/issues), а если нет, не стесняйтесь [создать его](https://github.com/stackblitz/docs/issues/new).
- **Делитесь идеями**
  - Мы хотим, чтобы наши доктора были восхитительны. Если у вас есть идея по улучшению, свяжитесь с нами на [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Исправить опечатки**
  - Используйте [Web Publisher](#content-updates-with-web-publisher) для быстрого исправления опечаток!
- **Создание демо-версий**
  - Мы хотели бы помочь нашим пользователям увидеть наши методы SDK в действии. Вы хотите создать демо-версию Vanilla JS или TS? Перед этим, пожалуйста, прочитайте наше руководство [contributing guide](CONTRIBUTING.md) и свяжитесь с нами на [GitHub discussions](https://github.com/stackblitz/docs/discussions).
- **Устранить проблему**
  - Вы видите проблему, над которой хотели бы поработать? Попросите, чтобы вам поручили исправить это. Перед началом работы, пожалуйста, прочитайте наше [руководство по внесению вклада] (CONTRIBUTING.md).
- **Обзоры**
  - Пожалуйста, не стесняйтесь проверять существующие PR и проблемы. Делитесь своими любящими отзывами, помогайте другому участнику лучше подойти к задаче, выявляйте скрытые ошибки, погрешности и промахи. Для этого можно использовать pr.new - в URL выпуска или PR подставьте "github.com". с "pr.new" чтобы запустить среду и предварительный просмотр.

Спасибо, что делаете наши документы лучше!

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

1. Open the page on our [docs site](developer.stackblitz.com), scroll down, and click "edit this page".
2. Update the document in the editor on the left and see the rendered change in the preview window on the right.
3. Once you're done, in the top right corner click on the green button that says "Propose changes".
4. You will be redirected to a GitHub PR template page prepared for you to submit a PR.


### Developing with StackBlitz Codeflow
Use StackBlitz Codeflow for bigger content updates. Codeflow will spin up the entire dev environment with a running dev server. When using Codeflow, please remember to commit and push your changes frequently.

To access it, [click this button](https://stackblitz.com/~/github.com/stackblitz/docs).

Alternatively, add “pr.new” to the beginning of this GitHub repo URL.

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

They can be defined in CI server configuration, or in a `.env` file:

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
- Reach out to our Developer Advocate on [Twitter](https://twitter.com/sylwiavargas) or via [an email](mailto:devrel@stackblitz.com) with your StackBlitz ideas, dreams, and wishes!

