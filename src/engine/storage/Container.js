/**
 * @file implements Container Class
 * @author CORSAIR <vladimir.corsair@gmail.com> 
 * @version 3.1.2a
 */
 
 ;(function () {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    
    define(deps, function (Class) {
        
        /**
         * Container constructor
         * $$items store your content
         * $$names store names of items in your container
         */
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
        
        Container.prototype.has = function(what) {
            return Boolean(this.get(what));
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

        Container.prototype.eachByName = function(name) {
            var all = new Container();

            this.each(function(item, itemName) {
                if(itemName === name) {
                    all.add(item, itemName);
                }
            });

            return all;
        };
        
        Container.prototype.len = function() {
            return this.$$names.length;
        };
        
        Container.prototype.last = function() {
            return this.$$items[this.len() - 1];
        };
        
        Container.prototype.first = function() {
            return this.$$items[0];
        };
        
        return Container;
    });
    
 })();