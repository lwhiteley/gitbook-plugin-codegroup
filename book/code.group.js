var codeGroup = {};

(function (self) {
    self = self || {};
    var classie;

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    function noop() { }

    function isArr(classes) {
        if (Array.isArray(classes)) {
            return true;
        } else if (Object.prototype.toString.call(classes) === '[object Array]') {
            return true;
        } else {
            return false;
        }
    }

    function removeMultiple() {
        var c = arguments[1],
            elem = arguments[0];
        c.forEach(function (value) {
            if (classie.has(elem, value)) {
                noop();
            }
            classie.removeClass(elem, value);
        });
    }


    function addMultiple() {
        var c = arguments[1],
            elem = arguments[0];
        c.forEach(function (value) {
            if (classie.has(elem, value)) {
                noop();
            }
            classie.addClass(elem, value);
        });
    }

    function hasClass(elem, c) {
        return elem.classList.contains(c);
    }

    function addClass(elem, c) {
        if (isArr(c)) {
            addMultiple.apply(this, arguments);
        } else {
            elem.classList.add(c);
        }
    }

    function removeClass(elem, c) {
        if (isArr(c)) {
            removeMultiple.apply(this, arguments);
        } else {
            elem.classList.remove(c);
        }
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    self.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    
    return self;
})(codeGroup);

(function (self) {
    self = self || {};
    var active = 'gbcg-active';
    var removeActive = function () {
        var selectors = document.getElementsByClassName('gbcg-selector');
        for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i];
            self.classie.remove(selector, active);
        }
    };

    self.showtab = function showtab(event) {
        event.preventDefault(); event.stopPropagation();
        removeActive();
        var selector = event.srcElement;
        var tabId = selector.getAttribute('data-tab');
        var tab = document.getElementById(tabId);
        document.getElementById('gbcg-tab-container').innerHTML = tab.innerHTML;
        self.classie.add(selector, active);
    };

    return self;
})(codeGroup);