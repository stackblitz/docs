---
title: Codeflow FAQ
---

# {{ $frontmatter.title }}

На этой странице рассматриваются часто задаваемые вопросы: текущие возможности, безопасность, планируемые возможности, цены и доступ.

[[toc]]

## Общий

### Что такое Codeflow?

<!--@include: ./parts/codeflow.md--> Codeflow состоит из четырех инструментов: 
- Codeflow IDE, 
- Web Publisher для редактирования содержимого, 
- Бот CodeflowApp для решения вопросов и PR, а также 
- короткий URL-адрес, по которому выбирается нужный вам инструмент.

[Подробнее на вводной странице Codeflow.](./what-is-codeflow.md)

### Является ли редактор StackBlitz тем же самым, что и IDE Codeflow?

Редактор **StackBlitz** позволяет быстро создавать демо-версии, встраивать проекты в документацию и создавать стартеры проектов. 

<!--@include: ./parts/codeflow-ide.md-->

[Узнайте больше о полном потенциале StackBlitz на ознакомительной странице StackBlitz.](/guides/user-guide/what-is-stackblitz.md)

### Является ли Codeflow стабильным?
В настоящее время Codeflow является бета-версией, однако общую доступность можно ожидать в начале 2023 года.

## Возможности и ограничения

### Могу ли я запустить Vim?

Это, пожалуй, самый часто задаваемый вопрос относительно возможностей StackBlitz - и [один из самых старых вопросов в нашем репозитории](https://github.com/stackblitz/core/issues/3). У нас хорошие новости: вы можете запускать Vim в Codeflow IDE, включив расширение! 🥳

### Сохраняется ли мой код между сессиями?

<!--@include: ./parts/persistance.md-->

### Какие репозитории можно/нельзя открывать в Codeflow IDE?

Codeflow IDE должна иметь возможность открыть любой репозиторий. Когда дело доходит до *запуска*, ваш инструментарий должен быть совместим с WebContainers.

### Могу ли я запустить частные репозитории?

Да. Частные репозитории доступны бесплатно во время бета-версии до 2022 года. Начиная с 1 квартала '23 частные репозитории будут требовать подписки. Свяжитесь с нами, если вы хотите узнать больше о ценах.

### Могу ли я запустить любой репозиторий Git?

На данный момент мы поддерживаем только репозитории GitHub.com.

### Какие файлы можно открыть в Web Publisher?

В Web Publisher можно открыть файл любого типа.

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Which runtime does Codeflow support?

Codeflow runs on top of [WebContainers](/guides/user-guide/available-environments#webcontainers), which currently support **Node.js 16**.

### Does any company use Codeflow IDE for their daily development work?

At StackBlitz, we do! We use Codeflow IDE for our internal dev work, including PR reviews. In fact, this docs page has been built in Codeflow IDE.

It's a new product that has **just** been released so check back here in a few months.

## Security 

### I would like to use Codeflow but I'm not sure if it's secure.

Since we’re executing the code entirely in the browser's sandbox, Codeflow IDE is actually more secure than running locally. We also use expiring oAuth tokens for interactions with git.

## Pricing and access

### Is Codeflow free?

Codeflow IDE is free for Open Source projects and for public repositories and will remain this way forever. This includes private repositories. Please reach out to [devrel@stackblitz.com](mailto:devrel@stackblitz.com) and we’ll get your organization hooked up with free private repos!

If your company is interested in using Codeflow, reach out to our [Enterprise Team](https://stackblitz.com/beta-teams-signup).

### Do I have to be signed in to use Codeflow IDE? 

Yes, only during the beta. Starting Q1 2023, you'll be able to open public repos without being logged in.

### To open a repo in Codeflow IDE, do I need to be signed in both on StackBlitz and GitHub? Or only one of them?

You need to sign in to [StackBlitz](https://stackblitz.com) *using* GitHub.
