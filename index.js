const lib = require('./lib');
const get = require('lodash/get');
const trim = require('lodash/trim');
const isEmpty = require('lodash/isEmpty');
const pretty = require('pretty');
const md5 = require('blueimp-md5');
const boolean = require('boolean');

module.exports = {

    // Extend ebook resources and html
    website: {
        assets: './book',
        js: [
            'code.group.js'
        ],
        css: [
            'code.group.css'
        ],
    },
    book: {
        assets: './book',
        js: [
            'code.group.js'
        ],
        css: [
            'code.group.css'
        ],
    },

    ebook: {
        assets: './book',
        js: [
            'code.group.js'
        ],
        css: [
            'code.group.css',
            'code.group.ebook.css'
        ],
    },

    // Extend templating blocks
    blocks: {
        // output sample https://codepen.io/anon/pen/GxWPaN
        codegroup: {
            process: function (codeGroup) {
                const ctx = this;
                const opts = ctx.book.config.get('pluginsConfig.codegroup');
                const defaultTabName = get(opts, 'defaultTabName') || 'Code';
                const parsedCodeBlocks = lib.parseBlock(codeGroup.body);
                const blockHash = md5(codeGroup.body);
                const shouldRememberTabs = boolean(opts.rememberTabs);

                const tasks = parsedCodeBlocks.map((item, i) => {
                    let descriptor = trim(get(item, 'lang'));
                    descriptor = isEmpty(descriptor) ? defaultTabName : descriptor;
                    const active = i === 0 ? ' gbcg-active' : '';
                    const tabName = lib.getTabName(descriptor, opts) || defaultTabName;
                    const langName = lib.getLangName(descriptor, opts);
                    const sanitizedBlock = item.block.replace(descriptor, langName);
                    const tabId = `${langName}-${i}-${lib.getHash()}`;
                    const selectorId = `select-${tabId}`;
                    return this.renderBlock('markdown', sanitizedBlock)
                        .then(function (str) {
                            return {
                                tabId,
                                selectorId,
                                tabContent: `<div id="${tabId}" class="gbcg-tab-item gbcb-${tabName}">\n${str}</div>`,
                                tabSelector: `<a class="gbcg-selector${active}" data-tab="${tabId}">${tabName}</a>`,
                                tabName,
                                parsedBlock: item,
                            };
                        })

                });

                return Promise.all(tasks).then((tabs) => {
                    const content = lib.getTabContents(tabs);
                    const selectors = lib.getTabSelectors(tabs);
                    return pretty(`<div id="${blockHash}" class="gbcg gbcg-codegroup" data-remember-tabs="${shouldRememberTabs}">
                        <div class="gbcg-tab-selectors">
                            ${selectors}
                        </div>
                        <div class="gbcg-tab-contents">
                            <div id="gbcg-tab-container">
                                ${get(tabs, '[0].tabContent')}
                            </div>
                            <div class="gbcg-tab-item-cntr">
                                ${content}
                            </div>
                        </div>
                    </div>`);
                })
            }
        }
    },
};
