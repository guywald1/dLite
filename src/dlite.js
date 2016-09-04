var _$ = function(query) {

    return {
        el: document.querySelector(query),
        addClass: function (pClass) {
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
				}

    };
};
