;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/utils/Toggler');
    
    define(deps, function(Class, Toggler) {
        
        var Component = new Class('Component', function() {
            Toggler.set(this);
        });
        
        Component.prototype.init = function (gameObject) {
            this.target = gameObject;
            return this;
        };
        
        //@abstract methods
        Component.prototype.run     = function() {};
        Component.prototype.update  = function() {};
        Component.prototype.draw    = function() {};
        
        return Component;
    });
    
})();