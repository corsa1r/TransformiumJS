/**
 * @file implements Class class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 */
;(function() {
    
    "use strict";
    
    var deps = [];
    
    define(deps, function() {
        
        var Class = function(name, constructor) {
            constructor._name = name;
            constructor.extend = this.extend;
            constructor.getName = this.getName;
            return constructor;
        };

        Class.prototype.extend = function(ancestor) {
            var Prototype = function () {
                this.parent = ancestor.prototype;
            };
            
            Prototype.prototype = ancestor.prototype;
            
            this.prototype = new Prototype();
            this.prototype.constructor = this;
        };

        Class.prototype.getName = function() {
            return this._name;
        };

        return Class;
    });
}());