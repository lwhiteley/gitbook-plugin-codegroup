const path = require('path');
const tester = require('gitbook-tester');
const { expect } = require('chai');

const pkg = require('../package.json');
const localPluginPath = path.join(__dirname, '..');

function minifyHtml(content) {
    return content
        .replace(/\r?\n|\r/g, '')
        .replace(/[\t ]+\</g, "<")
        .replace(/\>[\t ]+\</g, "><")
        .replace(/\>[\t ]+$/g, ">");
}

describe('codegroup', function () {
    it('should add code group of two', function () {
        return tester.builder()
            .withContent('{% codegroup %}\n{% codetab "sdk" %}\n```js\n var s = console1;\n```\n{% codetab "js" %}\n```js\n var s = console2;\n```{% endcodegroup %}')
            .withLocalPlugin(localPluginPath)
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function (result) {
                const html = minifyHtml(result[0].content);

                expect(html).to.include('id="js-0');
                expect(html).to.include('id="js-1');
                expect(html).to.include('<div id="gbcg-tab-container"><div id="js-0');
            });
    });
});