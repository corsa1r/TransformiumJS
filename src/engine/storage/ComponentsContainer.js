/**
 * @file implements Components Container Class
 * @description this class holds components in advanced container
 *  When you attach component, the name of the class of the component will be assigned as name in the advanced container (Parent)
 * 
 * @see
 *  ComponentsContainer.attach(new Center());
 * //Now, $$items[length - 1] = Center{}, $$names[length - 1] = 'Center' in the Advanced Container
 * 
 * 
 * */
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/storage/AdvancedContainer');
    
    define(deps, function(Class, AdvancedContainer) {
        
        var ComponentsContainer = new Class('ComponentsContainer', function() {
            ComponentsContainer.super.constructor.call(this);
        });
        
        ComponentsContainer.extend(AdvancedContainer);
        
        /**
         * This method allows you to attach component in this Container
         * This method will automaticly get the name of the constructor of item wich you present
         * 
         * $returns AdvancedContainer.add : result
         * */
        ComponentsContainer.prototype.attach = function(item) {
            ComponentsContainer.super.add.call(this, item, item.constructor.getName());
        };
        
        /**
         * This method removes the component by reference or name from the Container
         * 
         * $returns AdvancedContainer.remove : result
         * */
        ComponentsContainer.prototype.detach = function(what) {
            ComponentsContainer.super.remove.call(this, what);
        };
        
        return ComponentsContainer;
    });
})();