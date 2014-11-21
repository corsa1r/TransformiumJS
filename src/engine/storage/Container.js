/**
 * @file implements Container Class
 * @author CORSAIR <vladimir.corsair@gmail.com> 
 */
 
 ;(function () {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    
    define(deps, function (Class, ContainerItem) {
        
        var Container = new Class('Container', function () {
            this.$$items = [];
            this.$$names = [];
        });
        
        Container.prototype.add = function (item, name) {
            this.$$items.push(item);
            this.$$names.push(name);
            
            return this;
        };
        
        Container.prototype.get = function (what) {
            return this.$$items[this.indexOf(what)];
        };
        
        Container.prototype.remove = function (what) {
            var index = this.indexOf(what);
            
            this.$$items.splice(index, 1);
            this.$$names.splice(index, 1);
            
            return this;
        };
        
        Container.prototype.indexOf = function (what) {
            if(typeof what === 'string' || what instanceof String) {
                return this.$$names.indexOf(what);
            }
            
            return this.$$items.indexOf(what);
        };
        
        Container.prototype.each = function(iterator) {
            for(var i = 0, len = this.$$names.length; i < len; i++) {
                if(iterator(this.$$items[i], this.$$names[i]) === false) {
                    break;
                }
            }
            
            return this;
        };
        
        Container.prototype.len = function() {
            return this.$$names.length;
        };
        
        return Container;
    });
    
 })();