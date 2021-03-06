---
title: addShortcut()
excerpt: Adds a shortcut handler to the editor.
---
## addShortcut()

{{% api_method name="addShortcut(shortcut, handler)" since="1.4.3" %}}

Adds a shortcut handler to the editor. If a handler for the specified shortcut already exists, it will be replaced.

The shortcut shoult be a string of keys separated by plus (+) signs and the modifier keys should be ordered `ctrl`, `alt` and then `shift`.

e.g.:

	ctrl+alt+s
	alt+shift+a
	ctrl+shift+b
	alt+b


<span class="Label Label--info">Info:</span> The shortcut is bound to both WYSIWYG and source modes. It's up to the shortcut handler to check which mode the editor is in and take appropriate action.


{{% api_section title="Syntax" %}}
```js
instance.addShortcut(shortcut, handler);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**shortcut**
Type: *[String](/api/types/#string)*

The shortcut string to match.
{{% /api_parameter %}}

{{% api_parameter %}}
**handler**
Type *[Function](/api/types/#function)* or *[String](/api/types/#string)*

The function to be called when the shortcut is pressed or a string.
If this is a string the editor will call the command with the same name as the string value.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}