---
title: POST API
---


Create new projects by POSTing the desired project data from a form— useful when you don't/can't use our JavaScript SDK.

## Required Form Fields

```
project[title] = Project title
project[description] = Project description
project[files][FILE_PATH] = Contents of file, specify file path as key
project[files][ANOTHER_FILE_PATH] = Contents of file, specify file path as key
project[dependencies] = JSON string of dependencies field from package.json
project[template] = Can be one of: typescript, angular-cli, create-react-app, javascript
```

:::important
Binary files (such as archives or non-SVG images) are not supported for the dynamically created projects.
:::

## Example Payload

Below is an example HTML form that generates a project from the RxJS docs using the `typescript` template:

```html
<html lang="en">
<head></head>
<body>

<form id="mainForm" method="post" action="https://stackblitz.com/run" target="_self">
<input type="hidden" name="project[files][index.ts]" value="import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';

var button = document.querySelector('button');
Observable.fromEvent(button, 'click')
  .scan((count: number) => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
">
<input type="hidden" name="project[files][index.html]" value="<button>Click Me</button>
">
<input type="hidden" name="project[description]" value="RxJS Example">
<input type="hidden" name="project[dependencies]" value="{&quot;rxjs&quot;:&quot;5.5.6&quot;}">
<input type="hidden" name="project[template]" value="typescript">
<input type="hidden" name="project[settings]" value="{&quot;compile&quot;:{&quot;clearConsole&quot;:false}}">
</form>
<script>document.getElementById("mainForm").submit();</script>

</body></html>
```
