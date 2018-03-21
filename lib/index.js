const codeBlocks = require('gfm-code-blocks');
const merge = require('lodash/merge');
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
        return tab.tabContent || '';
    });
    return contents.join('\n');
};

self.getTabSelectors = (tabs) => {
    const selectors = tabs.map((tab) => {
        return tab.tabSelector || '';
    });
    return selectors.join('\n');
};

module.exports = self;