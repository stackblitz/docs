You can also see demos for each of the package managers in this [monorepo demo collection](https://stackblitz.com/@d3lm/collections/workspaces).

### npm

Your project repository may look like this:

```
workspace-project
├─ packages
│  ├─ backend
│  │  ├─ package.json
│  │  └─ index.js
│  ├─ frontend
│  │  ├─ package.json
│  │  └─ index.js
│  └─ common
│     ├─ package.json
│     └─ index.js
└─ package.json
```

To define a workspace, add the `workspaces` field to the `package.json`:

```json
"workspaces": [
  "packages/*"
],
```

This refers to every sub-directory inside `packages` which contains a `package.json`.

Check the [npm documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces) for more information or [this npm-based monorepo demo](https://stackblitz.com/edit/node-4cygsf?file=README.md) for reference. 

### pnpm

To configure a workspace with pnpm, add the `pnpm-workspace.yaml` file to the root of the project:

```yaml
packages:
  - 'packages/*'
```

Next, add a package from the workspace as a dependency to another package. In the example below we define `frontend` as dependent on `common`:

```json
"dependencies": {
  "common": "workspace:^1.0.0"
}
```

The `workspace:` protocol ensures the correct package from the workspace is used. However, this is not required because, by default, pnpm will link packages from the workspace if the available packages match the declared ranges.

Check [pnpm documentation](https://pnpm.io/workspaces) for more information or [this pnpm-based monorepo demo](https://stackblitz.com/edit/node-gw1rvh?file=README.md) for reference. 


### Yarn

To define a workspace with yarn, add the `workspaces` field to our `package.json`:

```
"workspaces": [
  "packages/*"
],
```

This refers to every sub-directory inside `packages` which contains a `package.json`.

:::info
Note that a yarn workspace looks somewhat identical to an npm workspace. For the most parts that's true, but yarn also has [`nohoist`](https://classic.yarnpkg.com/blog/2018/02/15/nohoist).
:::