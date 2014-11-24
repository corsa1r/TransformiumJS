/**
 * @file implements Container Class
 * @author CORSAIR <vladimir.corsair@gmail.com> 
 */
 
 ;(function () {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/storage/Container');
    
    define(deps, function (Class, Container) {
        
        var AdvancedContainer = new Class('AdvancedContainer', function () {
            AdvancedContainer.super.constructor.call(this);
            
            this.on = {
                add : new Container(),
                remove : new Container()
            };
        });
        
        AdvancedContainer.extend(Container);
        
        AdvancedContainer.prototype.add = function() {
            var _args = Array.prototype.slice.call(arguments);
            var item = AdvancedContainer.super.add.apply(this, _args).last();
            
            this.on.add.each(function(params, method) {
                if(typeof item[method] === 'function' || item[method] instanceof Function) {
                    item[method].apply(item, params);
                }
            });
        };
        
        AdvancedContainer.prototype.remove = function() {
            var _args = Array.prototype.slice.call(arguments);
            var item = AdvancedContainer.super.get.apply(this, _args);
            
            AdvancedContainer.super.remove.apply(this, _args);
            
            this.on.remove.each(function(params, method) {
                if(typeof item[method] === 'function' || item[method] instanceof Function) {
                    item[method].apply(item[method], params);
                }
            });
        };
        
        return AdvancedContainer;
    });
    
 })();