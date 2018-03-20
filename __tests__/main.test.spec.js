import test from 'ava';
const tester = require('gitbook-tester');
const pkg = require('../package.json');
const pluginPath = require('path').join(__dirname, '..');

console.log(pluginPath)

test('arrays are equal', async t => {
  const result = await tester.builder()
    // .withContent('{% myTag %}World{% endMyTag %}')
    .withLocalPlugin(pluginPath)
    .withBookJson({
      gitbook: pkg.engines.gitbook,
      // plugins: ['codegroup']
    })
    .create();

  console.log(result[0].content);
  // console.log(result);
  t.deepEqual([1, 2], [1, 2]);
});