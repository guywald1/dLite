var _$ = function(param, settings) {
    return {

        // properties
        //
        // IDEA: use isNode() or isElement()
        el: (function(){
          if (settings === true || settings.node)
          return param;
          return document.querySelector(param);
        }()),

        // methods
        //
        _$: function(param) {
          return new _$(param);
        },
        addClass: function(pClass) {
            if (this.el.classList)
                this.el.classList.add(pClass);
            else if (!this.el.hasClass(pClass)) this.el.className += " " + pClass;
        },
        removeClass: function(pClass) {
            if (this.el.classList)
                this.el.classList.remove(pClass);
            else if (this.hasClass(pClass)) {
                var reg = new RegExp('(\\s|^)' + pClass + '(\\s|$)');
                this.el.className = this.el.className.replace(reg, ' ');
            }
        },
        toggleClass: function(pClass) {
            var classes = this.el.className;
            var regex = new RegExp('\\b' + pClass + '\\b');
            var hasOne = classes.match(regex);
            pClass = pClass.replace(/\s+/g, '');
            if (hasOne)
                this.el.className = classes.replace(regex, '');
            else
                this.el.className = classes + pClass;
        },
        hasClass: function(pClass) {
            if (el.classList)
                return el.classList.contains(pClass);
            else
                return !!el.className.match(new RegExp('(\\s|^)' + pClass + '(\\s|$)'));
        },
        addEventListener: function() {
            EventTarget.prototype.addEventListener.apply(this.el, arguments);
        },
        removeEventListener: function() {
            EventTarget.prototype.removeEventListener.apply(this.el, arguments);
        },
        dispatchEvent: function(){
          EventTarget.prototype.dispatchEvent.apply(this.el, arguments);
        },
        children: function(){
          var children = this.el.children;
          var res = [];
          for (var i=0; i<children.length; i++)
            res.push(new _$(children[i]), true);
          return res;
        }
    };
};
