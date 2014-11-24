/**
 * @file implements Camera Class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * */
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/physics/Vector');
    
    define(deps, function(Class, Vector) {
        
        var Camera = new Class('Camera', function(screen) {
            this.$$screen = screen;
            this.position = Camera.$$defaults.position.clone();
        });
        
        Camera.prototype.sees = function(gameObject) {
            var c1 = this.$$screen.innerPoint(gameObject.position);
            var c2 = this.$$screen.innerPoint(gameObject.size);
            return Boolean(c1 || c2);
        };
        
        Camera.$$defaults = {
            position : new Vector(0, 0)
        };
        
        return Camera;
    });
    
})();