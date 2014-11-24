;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    
    define(deps, function(Class) {
        
        var Toggler = new Class('Toggler', function() {});
        
        Toggler.prototype.set = function(target) {
            target.constructor.prototype.$$togglerEnabled = true;
            
            target.constructor.prototype.enable = (function() {
                this.$$togglerEnabled = true;
            }).bind(target);
            
            target.constructor.prototype.disable = (function() {
                this.$$togglerEnabled = false;
            }).bind(target);
            
            target.constructor.prototype.toggle = (function() {
                this.$$togglerEnabled = !this.$$togglerEnabled;
            }).bind(target);
            
            target.constructor.prototype.isEnabled = (function() {
                return this.$$togglerEnabled;
            }).bind(target);
            
            target.constructor.prototype.isDisabled = (function() {
                return !this.$$togglerEnabled;
            }).bind(target);
        };
        
        return new Toggler();
    });
    
})();