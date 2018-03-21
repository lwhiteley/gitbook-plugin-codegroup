GitBook CodeGroup Plugin
==============

[![npm version](https://badge.fury.io/js/gitbook-plugin-codegroup.svg)](https://badge.fury.io/js/gitbook-plugin-codegroup)
[![Build Status](https://travis-ci.org/lwhiteley/gitbook-plugin-codegroup.svg?branch=master)](https://travis-ci.org/lwhiteley/gitbook-plugin-codegroup)

## Add Plugin

book.json
```js
{
    "plugin": ["codegroup"]
}
```

then run
```bash
gitbook install
```

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

Use Case:
- This is ideal for displaying similar usages of your code in multiple languages
 - for example an sdk that can be used in several languages

#### Notes:

- For some reason gitbbok doesnt parse multiple subblocks when there is a new line after the sub block declaration.
 - pay close attention to how it is formatted in the example for it to work.

### Output Sample:
![js-tab](https://i.imgur.com/6Odrdh7.png)
![swift-tab](https://i.imgur.com/t7aQUgu.png)


### Similar Projects
- [remarkable-codegroup](https://github.com/lwhiteley/remarkable-codegroup)

### TODOs:
- expand codegroup in pdf
- consider using a select list in mobile

Pull requests are welcome



