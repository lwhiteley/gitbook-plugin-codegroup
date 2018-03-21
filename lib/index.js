const codeBlocks = require('gfm-code-blocks');
const merge = require('lodash/merge');
const includes = require('lodash/includes');
const cryptoRandomString = require('crypto-random-string');
const self = {};

self.parseBlock = (content) => {
    const parsedCodeBlocks = codeBlocks(content);
    return parsedCodeBlocks;
};

self.getHash = () => {
    return cryptoRandomString(10);
};

self.getTabContents = (tabs) => {
    const contents = tabs.map((tab) => {
        const content = tab.tabContent || '';
        return `<div>
        <h3 class="gbcg-tabname ${tab.tabId}">${tab.tabName}</h3>
        ${content}
        </div>`
    });
    return contents.join('\n');
};

self.getTabSelectors = (tabs) => {
    const selectors = tabs.map((tab) => {
        return tab.tabSelector || '';
    });
    return selectors.join('\n');
};

self.getTabName = (lang, opts = {}) => {
    if (includes(lang, opts.tabNameSeperator)) {
      const split = lang.split(opts.tabNameSeperator);
      return split[1];
    }
    return lang;
  };
  
  self.getLangName = (lang, opts = {}) => {
    if (includes(lang, opts.tabNameSeperator)) {
      const split = lang.split(opts.tabNameSeperator);
      return split[0];
    }
    return lang;
  };

module.exports = self;