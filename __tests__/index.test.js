var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');


describe('codegroup', function() {
    it('should correctly replace by sup html tag', function() {
        return tester.builder()
            .withContent('{% codegroup %}\n{% codetab "sdk" %}\n```js\n var s = console1;\n```\n{% codetab "js" %}\n```js\n var s = console2;\n```{% endcodegroup %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function(result) {
                // console.log(result[0].content)
                assert.equal(result[0].content, '<p>Hello world</p>')
            });
    });
});