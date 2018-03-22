require([
    'jquery'
], function ($) {
    var self = self || {};
    var active = 'gbcg-active';

    var getStorageKey = function (id) {
        return 'codegroup.' + id;
    };

    self.showtab = function showtab(event) {
        event.preventDefault(); event.stopPropagation();
        var $selector = $(this);
        var $codeGroup = $selector.closest('.gbcg-codegroup');
        var $container = $codeGroup.find('#gbcg-tab-container');
        $codeGroup.find('.gbcg-selector').removeClass(active);
        var tabId = $selector.attr('data-tab');
        var selectorId = $selector.attr('id');
        var $tab = $('#' + tabId);
        $container.html($tab.html());
        $selector.addClass(active);
        gitbook.storage.set(getStorageKey($codeGroup.attr('id')), { selected: selectorId });
    };

    $('.gbcg-selector').click(self.showtab);

    var $codeGroups = $('.gbcg-codegroup');

    $codeGroups.each(function () {
        var $group = $(this);
        if ($group.attr('data-remember-tabs') !== 'true') {
            return;
        }
        var storageKey = getStorageKey($group.attr('id'));
        var tabSettings = gitbook.storage.get(storageKey);
        if (tabSettings && tabSettings.selected) {
            var $selector = $group.find('#' + tabSettings.selected);
            $selector.click();
        }
    });

    return self;
});
