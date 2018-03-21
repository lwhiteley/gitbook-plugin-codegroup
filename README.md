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

### Configure

book.json
```js
"pluginsConfig": {
    "codegroup":{
        "defaultTabName": "Code",
        "tabNameSeperator": "::",
    }
}
```

### Config Options:
| Option | Description |
| ------------- | ------------- |
| defaultTabName {string} <br> **default**: `Code` | a fallback tab name if no language is specied for a fenced code block  |
| tabNameSeperator {string}  <br> **default**: `::` | a string delimeter that differentiates the language name from the tab name  |


then run
```bash
gitbook install
```

## Template

<pre>
<code>
{% codegroup %}
```js::sdk
    var s = console.log;
```
```js
    var s = console.warn;
```
{% endcodegroup %}
</code>
</pre>


#### Notes:
- ebook/PDF compatible

### Custom Named Tabs

As seen in the example above, tabs can have custom names for situations where you may need to group the same language and need to differentiate them.

The example above shows a code block `js::sdk`, where `js` is the language syntax to be used and `sdk` denotes the name to be seen in the tab; we use `::` (configurable) to separate both terms.


### Use Case:
- This is ideal for displaying similar usages of your code in multiple languages
    - for example an sdk that can be used in several languages

### Output Sample:
![js-tab](https://i.imgur.com/6Odrdh7.png)
![swift-tab](https://i.imgur.com/t7aQUgu.png)

### Similar Projects
- [remarkable-codegroup](https://github.com/lwhiteley/remarkable-codegroup)

### TODOs:
- consider using a select list in mobile

Pull requests are welcome



