const path = require('path');
const tester = require('gitbook-tester');
const { expect } = require('chai');

const pkg = require('../package.json');


describe('codegroup', function() {
    it('should add code group of two', function() {
        return tester.builder()
            .withContent('{% codegroup %}\n{% codetab "sdk" %}\n```js\n var s = console1;\n```\n{% codetab "js" %}\n```js\n var s = console2;\n```{% endcodegroup %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function(result) {
                expect(result[0].content).to.include('id="js-0');
                expect(result[0].content).to.include('id="js-1');
            });
    });
});