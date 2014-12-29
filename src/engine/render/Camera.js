/**
 * @file implements Camera Class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * 
 * @version 1
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
        
        /**
         * This method returns you boolean true, if the given gameObject is on visible part of the screen.
         * @param {GameObject} gameObject - reference to gameObject which you want to know if is visible.
         * @returns Boolean
         */
        Camera.prototype.sees = function(gameObject) {
            var c1 = this.$$screen.innerPoint(gameObject.position);
            var c2 = this.$$screen.innerPoint(gameObject.size.append(gameObject.position));
            return Boolean(c1 || c2);
        };
        
        Camera.$$defaults = {
            position : new Vector(0, 0)
        };
        
        return Camera;
    });
    
})();
