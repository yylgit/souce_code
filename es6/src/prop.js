/*
class A {
  static b = 3
  a = 2
	say() {
	}
	get name() {
    	return 'a'
    }
}
*/

'use strict';

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value"in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    }
    ;
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var A = function() {
    function A() {
        _classCallCheck(this, A);

        this.a = 2;
    }

    _createClass(A, [{
        key: 'say',
        value: function say() {}
    }, {
        key: 'name',
        get: function get() {
            return 'a';
        }
    }]);

    return A;
}();

A.b = 3;
