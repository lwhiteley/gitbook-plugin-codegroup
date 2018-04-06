const codeBlocks = require('gfm-code-blocks');
const merge = require('lodash/merge');
const includes = require('lodash/includes');
const get = require('lodash/get');
const trim = require('lodash/trim');
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
        <h3 class="gbcg-tabname ${tab.tabId}">${tab.printTitle}</h3>
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

var parseDescriptor = (lang, opts = {}) => {
    if (includes(lang, opts.tabNameSeperator)) {
        return lang.split(opts.tabNameSeperator);
    }
};

self.getLangName = (lang, opts = {}) => {
    const split = parseDescriptor(lang, opts);
    return trim(get(split, '[0]', lang));
};

self.getTabName = (lang, opts = {}) => {
    const split = parseDescriptor(lang, opts);
    return trim(get(split, '[1]', ''));
};

self.getPrintTitle = (lang, opts = {}) => {
    const split = parseDescriptor(lang, opts);
    return trim(get(split, '[2]', ''));
};

module.exports = self;