;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/gameobject/Component');
    deps.push('src/engine/physics/Vector');
    
    define(deps, function(Class, Component, Vector) {
        
        var Center = new Class('Center', function() {
            Center.super.constructor.call(this);
        });
        
        Center.extend(Component);
        
        /**
         * This method returns center of the GameObject
         * @returns Vector
         */
        Center.prototype.get = function() {
            var size = this.target.size.clone();
            return new Vector().copy(this.target.position.clone()).append(size.x >> 1, size.y >> 1);
        };
        
        return Center;
    });
    
})();