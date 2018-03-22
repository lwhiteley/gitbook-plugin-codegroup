const codeBlocks = require('gfm-code-blocks');
const merge = require('lodash/merge');
const includes = require('lodash/includes');
const md5 = require('blueimp-md5');

const self = {};

self.parseBlock = (content) => {
    const parsedCodeBlocks = codeBlocks(content);
    return parsedCodeBlocks;
};

self.getHash = (str) => {
    return md5(str);
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