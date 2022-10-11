
In your browser's console, you may see the following error:
> RangeError: WebAssembly.instantiate(): Out of memory: wasm memory

When too much memory is allocated to browser processes, browsers will run out of memory. This can happen if you open too many StackBlitz projects at the same time. This includes our editor, Codeflow IED, and Web Publisher - or is a page features too many StackBlitz embeds running at the same time. 

**To free up memory, close other StackBlitz projects in other tabs or windows, and refresh the page.**

