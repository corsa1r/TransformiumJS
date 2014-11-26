/**
 * @file implements Aspect Class
 * @description this class will help you to provide wrapper function
 * @see
 *  Aspect.wrap(player, { isDead : true }); // This will kill the player
 * 
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * @version 1
 * */
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/utils/Each');
    
    define(deps, function(Class, Each) {
        
        var Aspect = new Class('Aspect', function() {
            this.$$privatePrefix = '$$';
        });
        
        Aspect.prototype.wrap = function(target, fields) {
            var that = this;
            
            Each(fields, function(key, value) {
                if(key.toString().substr(0, that.$$privatePrefix.length) !== that.$$privatePrefix) {
                    target[key] = value;
                }
            });
        };
        
        return new Aspect();
    });
    
})();