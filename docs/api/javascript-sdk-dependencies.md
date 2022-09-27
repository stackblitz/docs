---
title: 'SDK: managing dependencies'
---

# SDK: managing dependencies

When creating new projects with the [`sdk.openProject`](/guide/javascript-sdk/#openproject) and [`sdk.embedProject`](/guide/javascript-sdk/#embedproject) methods, you can specify which npm dependencies should be installed on startup.

The expected way to specify dependencies depends on the [runtime environment](/guide/available-environments/).

:::info Reminder
Projects created with the `template: 'node'` option will use the WebContainers environment (currently on stackblitz.com only). Projects created with a different `template` value will use the EngineBlock environment (available on stackblitz.com and StackBlitz Enterprise Edition).
:::

## With WebContainers

For WebContainers project, our [Turbo package manager](/guide/turbo/) will install `dependencies` and `devDependencies` from the project’s `package.json` file, much like `npm`, `pnpm` or `yarn` would.

For those projects, you can provide your dependencies directly in the `package.json` file, and ignore the `project.dependencies` option. Here’s an example:

```js
import sdk from '@stackblitz/sdk';

const packageJson = `{
  "name": "node-starter",
  "version": "0.0.0",
  "scripts": {
    "start": "serve public"
  },
  "dependencies": {
    "serve": "^14.0.0"
  }
}`;

const project = {
  title: 'Node serve demo',
  description: 'Node.js server demo using the "serve" package',
  template: 'node',
  files: {
    'package.json': packageJson,
    'public/index.html': '<h1>Hello world!</h1>',
  },
};

sdk.openProject(project);
```

## With EngineBlock

For EngineBlock projects, provide dependencies using the `project.dependencies` option. The `package.json` file will not be used to resolve dependencies, and you don’t have to provide a `package.json` file in the `project.files` data.

However, it can be useful to still include a `package.json` file in your project because end users might prefer to edit their dependencies in the code rather than use the “Dependencies” sidebar UI. For that reason, we recommend providing dependencies in both `project.dependencies` and in `package.json` when generating your project.

### Dependencies plus package.json

In the next example, we will show how to generate this project:

<img
  width="1000"
  src="/doc_images/sdk-project-dependencies.png"
  alt="Screenshot of a project showing three packages in the “Dependencies” section of the sidebar, and an editor tab with the same dependencies in a package.json file."
/>

Since we don’t want to risk having mismatched dependencies, we’ll define the `package.json` data first, and use that to set the `project.dependencies` as well.

```js
import sdk from '@stackblitz/sdk';

const PACKAGE_JSON = {
  name: 'cool-project',
  version: '0.0.0',
  private: true,
  dependencies: {
    gsap: '^3.11.0',
    jquery: '^3.6.0',
    lodash: '^4.17.21',
  },
};

const project = {
  title: 'My cool project',
  description: 'Example animation project',
  template: 'javascript',
  // REQUIRED: specify dependencies
  dependencies: PACKAGE_JSON.dependencies,
  files: {
    // Recommended: provide a package.json file with the same dependencies
    'package.json': JSON.stringify(PACKAGE_JSON, null, 2),
    'index.html': '<h1>Hello world!</h1>',
    'index.js': 'import gsap from "gsap";\n// etc.',
  },
};

sdk.openProject(project);
```

And for a more complete demo, [check out this Angular example](https://stackblitz.com/edit/sdk-angular-dependencies?file=project.ts).

### Inherited dependencies

A useful but sometimes confusing feature of the `project.template` value is that it will retrieve an initial dependency list from a “parent” project. For instance, when using the `template: 'angular-cli'` option to generate an Angular project on stackblitz.com, the dependencies and version numbers from https://stackblitz.com/edit/angular will be used initially.

At this time, there is no way to control which project is selected as the “parent” project for a given `template` value.

In some cases, inherited dependencies can cause your project to show:

- unnecessary dependencies;
- outdated package versions.

To work around this problem, we recommend specifying all the dependencies and the version ranges your project uses with the `project.dependencies` option.
