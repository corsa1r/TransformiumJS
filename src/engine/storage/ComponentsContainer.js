;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/storage/AdvancedContainer');
    
    define(deps, function(Class, AdvancedContainer) {
        
        var ComponentsContainer = new Class('ComponentsContainer', function() {
            ComponentsContainer.super.constructor.call(this);
        });
        
        ComponentsContainer.extend(AdvancedContainer);
        
        ComponentsContainer.prototype.attach = function(item) {
            ComponentsContainer.super.add.call(this, item, item.constructor.getName());
        };
        
        ComponentsContainer.prototype.detach = function(what) {
            ComponentsContainer.super.remove.call(this, what);
        };
        
        return ComponentsContainer;
    });
    
})();