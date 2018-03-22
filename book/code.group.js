require([
    'jquery',
    'gitbook'
], function ($, gitbook) {
    var self = self || {};
    var active = 'gbcg-active';

    console.log(gitbook);

    self.showtab = function showtab(event) {
        event.preventDefault(); event.stopPropagation();
        // removeActive();
        var $selector = $(this);
        var $codeGroup = $selector.closest('.gbcg-codegroup');
        var $container = $codeGroup.find('#gbcg-tab-container');
        $codeGroup.find('.gbcg-selector').removeClass(active);
        var tabId = $selector.attr('data-tab');
        var $tab = $(`#${tabId}`);
        $container.html($tab.html());
        $selector.addClass(active);
    };

    $('.gbcg-selector').click(self.showtab);

    return self;
});
