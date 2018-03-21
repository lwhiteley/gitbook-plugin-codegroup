const path = require('path');
const tester = require('gitbook-tester');
const { expect } = require('chai');

const pkg = require('../package.json');


describe('codegroup', function () {
    it('should add code group of two', function () {
        return tester.builder()
            .withContent('{% codegroup %}\n{% codetab "sdk" %}\n```js\n var s = console1;\n```\n{% codetab "js" %}\n```js\n var s = console2;\n```{% endcodegroup %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function (result) {
                const html = result[0].content
                    .replace(/\r?\n|\r/g, '')
                    .replace(/[\t ]+\</g, "<")
                    .replace(/\>[\t ]+\</g, "><")
                    .replace(/\>[\t ]+$/g, ">");
                
                expect(html).to.include('id="js-0');
                expect(html).to.include('id="js-1');
                expect(html).to.include('<div id="gbcg-tab-container"><div id="js-0');
            });
    });
});