---
title: &title Command Line Utilities
description: &description WebContainer's shell comes with programs or commands that you would expect to find on any Unix shell such as `bash` or `zsh`. You'll find the full list here and learn more about WebContainer's shell `jsh`.
head:
  - ['meta', {property: 'og:title', content: *title}]
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/keyboard-shortcuts.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

WebContainer's shell comes with programs or commands that you would expect to find on any Unix shell such as `bash` or `zsh`. You'll find the full list here and learn more about WebContainer's shell `jsh`.

## JSH

`jsh` (not to be confused with the package of the same name on npm) is our custom shell provided as part of WebContainer. It is very similar in behaviour to `zsh` to make you feel right at home.

What you can expect while using `jsh`:

 * Support for booleans operators: `&&` and `||`
 * Pipe output from one program to another: `ls | cat`
 * Redirect output to a file: `ls > foo`
 * Completions for paths and known commands
 * [Common shell builtins](#shell-built-ins)

What you should expect to get in the near future:

 * Support for running shell scripts: `./myscript.sh`
 * More shell builtins (such as `unset`)

:::warning
Variable interpolation in `jsh` is not yet working:
```shell
❯ echo $PATH

❯ node -p 'process.argv[1]' $PATH

❯ node -p 'process.env.PATH'
/bin:/usr/bin:/usr/local/bin
```
:::


### Shell built-ins

A shell built-in is a command, that is executed directly in the shell itself, instead of an external executable program which the shell would load and execute.

You'll find the full list of supported built in here:

| Name      | Example usage      | Description                                                                                                                                   |
|-----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `echo`    | `echo Hello world` | Display a line of text (does not support any options such as `-n` or `-e`)                                                                    |
| `pwd`     | `pwd`              | Print name of current/working directory (does not support any options)                                                                        |
| `kill`    | `kill -9 2`        | Send a signal to a process (type `kill --help` to view all options)                                                                           |
| `export`  | `export CI=true`   | Modify the environment to set a new value                                                                                                     |
| `cd`      | `cd folder`        | Modify the current working directory of the shell                                                                                             |
| `true`    | `true`             | Exit immediately with code 0                                                                                                                  |
| `false`   | `false`            | Exit immediately with code 1                                                                                                                  |
| `which`   | `which node`       | For each argument, indicate how it would be interpreted if used as a command name                                                             |
| `alias`   | `alias foo=node`   | For each argument written as `name=value` create an alias for value to name and for each argument written as `name` print the value of `name` |
| `command` | `command command`  | Execute its arguments as an external command instead of a function or builtin and is executed.                                                |
| `exit`    | `exit 1`           | Terminate the shell and returns its first argument as its error code. If not argument are passed 0 is returned.                               |

### Command line utilities

| name      | example usage       | description                                                                                                                                   |
|-----------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `chmod`   | `chmod +x ./foo.js` | Change a file mode bits: read (r), write (w), execute (x), set user or group ID on execution (s), sticky bit (t)                              |

### Shortcuts

<style>
._guides_user-guide_command-line-utilities th:nth-child(2) {
  width: 30%;
}
</style>