/**
 * @file implements Class class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 */
;(function() {
    
    "use strict";
    
    var deps = [];
    
    deps.push('src/ecma/DateNow');
    
    define(deps, function(DateNow) {
        
        var Class = function(name, constructor) {
            constructor.$$name = name;
            constructor.extend = this.extend;
            constructor.getName = this.getName;
            return constructor;
        };

        Class.prototype.extend = function(ancestor) {
            function TransformiumExtend() {
            }
            TransformiumExtend.prototype = ancestor.prototype;
            this.prototype = new TransformiumExtend();
            this.prototype.constructor = this;
            this.super = ancestor.prototype;
        };

        Class.prototype.getName = function() {
            return this.$$name;
        };
        
        Class.prototype.serialize = function() {
            var Serialization = {
                $$className : this.constructor.getName(),
                $$fields : this,
                $$super : this.constructor.super ? this.constructor.super.constructor.getName() : null
            };
            
            return JSON.stringify(Serialization);
        };

        Class.prototype.deserialize = function(serealization) {
            throw new Error('Method Class.deserialize was not implemented yet !');
        };

        return Class;
    });
}());