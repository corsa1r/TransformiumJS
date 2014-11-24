/**
 * @file implements GameObject class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * 
 * @version 3.1.0b
 * 
 * */
 
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/storage/ComponentsContainer');
    deps.push('src/engine/physics/Vector');
    
    define(deps, function(Class, ComponentsContainer, Vector) {
        
        var GameObject = new Class('GameObject', function() {
            this.position = GameObject.$$defaults.position.clone();
            this.size     = GameObject.$$defaults.size.clone();
            this.zindex   = GameObject.$$defaults.zindex;
            
            this.components = new ComponentsContainer();
            this.components.on.add.add([this] , 'init');
            this.components.on.add.add([]     , 'run');
        });
        
        /**
         * @abstract methods
         */
        GameObject.prototype.init    = function() {};
        GameObject.prototype.destroy = function() {};
        GameObject.prototype.update  = function() {};
        GameObject.prototype.draw    = function() {};
        
        GameObject.$$defaults = {
            position:       new Vector(100, 100),
            size:           new Vector(100, 100),
            initMethod:     'init',
            destroyMethod:  'destroy',
            zindex:         1
        };
        
        return GameObject;
    });
})();