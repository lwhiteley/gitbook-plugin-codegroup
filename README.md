GitBook CodeGroup Plugin
==============

### Template

<pre>
<code>
{% codegroup %}
{% codetab "sdk" %}```js
    var s = console1;
    ```
{% codetab %}```js
    var s = console2;
    ```
{% endcodegroup %}
</code>
</pre>

The `codetab` block accepts one argument. This is a custom tab name. if not specified, then the language of the code is used.

#### Notes:

- For some reason gitbbok doesnt parse multiple subblocks when there is a new line after the sub block declaration.
 - pay close attention to how it is formatted in the example for it to work.

Pull requests are welcome



