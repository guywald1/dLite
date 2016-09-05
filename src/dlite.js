var $ = function(param, settings) {
    return {

        // properties
        //
        // IDEA: use isNode() or isElement()
        el: (function() {
            if (settings === true || typeof settings === 'object' && settings.hasOwnProperty(node) && settings.node)
                return param;
            return document.querySelector(param);
        }()),

        // methods
        //
        $: function(param) {
            return new $(param);
        },
        addClass: function(classToAdd) {
            if (this.el.classList)
                this.el.classList.add(classToAdd);
            else if (!this.el.hasClass(classToAdd)) this.el.className += " " + classToAdd;
        },
        removeClass: function(classToRemove) {
            if (this.el.classList)
                this.el.classList.remove(classToRemove);
            else if (this.hasClass(classToRemove)) {
                var reg = new RegExp('(\\s|^)' + classToRemove + '(\\s|$)');
                this.el.className = this.el.className.replace(reg, ' ');
            }
        },
        toggleClass: function(classToToggle) {
            var classes = this.el.className;
            var regex = new RegExp('\\b' + classToToggle + '\\b');
            var hasOne = classes.match(regex);
            classToToggle = classToToggle.replace(/\s+/g, '');
            if (hasOne)
                this.el.className = classes.replace(regex, '');
            else
                this.el.className = classes + classToToggle;
        },
        hasClass: function(classToCheck) {
            if (el.classList)
                return el.classList.contains(classToCheck);
            else
                return !!el.className.match(new RegExp('(\\s|^)' + classToCheck + '(\\s|$)'));
        },
        addEventListener: function() {
            return EventTarget.prototype.addEventListener.apply(this.el, arguments);
        },
        removeEventListener: function() {
            return EventTarget.prototype.removeEventListener.apply(this.el, arguments);
        },
        dispatchEvent: function() {
            return EventTarget.prototype.dispatchEvent.apply(this.el, arguments);
        },
        children: function() {
            var children = this.el.children;
            var res = [];
            for (var i = 0; i < children.length; i++)
                res.push(new $(children[i]), true);
            return res;
        },
        css: function(styles) {
            if (typeof styles !== 'object') return;
            for (var property in styles) {
                if (typeof property === 'number' || typeof property === 'string') {
                    if (this.el.style[property] !== undefined) {
                        this.el.style[property] = String(styles[property]);
                    }
                }
            }
        },
        custom: function(cb) {
            if (!Element.prototype.cb) return;
            return Element.prototype.cb.apply(this.el, cb);
        }
    };
};
