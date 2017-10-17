---
title: Plaintext
excerpt: Adds option to remove formatting when pasting.
---

Removes formatting when pasting text

## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `plaintext` to the `plugins` option. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'plugin',
	style: 'minified/jquery.sceditor.default.min.css'
});
</script>
```

That's it, now all pasting into the editor will be via plain text.

## Toggle plaintext

Setting the `pastetext.addButton` to true changes the behaviour of this plugin
by allowing plaintext pasting to be toggled on and off via the default plaintext
command.

For example:

```html
<script>
sceditor.create(textarea, {
    plugins: 'plugin',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
	style: 'minified/jquery.sceditor.default.min.css'
});
</script>
```