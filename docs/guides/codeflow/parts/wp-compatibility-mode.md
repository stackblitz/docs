In some cases, you may notice the "Compatibility Mode on" banner:
<!-- screenshot -->

This mode comes on when Web Publisher is viewed on Safari.

[Safari currently doesn't support WebContainers](/platform/webcontainers/browser-support#safari), which is the technology at the basis of Web Publisher. 

That being said, **you can still run Web Publisher and submit Pull Requests**. In this mode, Web Publisher only renders a Markdown-to-HTML conversion. Your app itself it not being run, so there is no app-specific styling, and if you’re using some kind of components in your Markdown, they won’t be compiled.