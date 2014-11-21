/**
 * @file implements DateNow ECMAFix
 * @require requirejs
 * @author CORSAIR <vladimir.corsair@gmail.com>
 */
 
 ;(function() {
     
     var deps = [];
     
     define(deps, function (GameObject) {
        
        if(!Date.now) {
            Date.now = function now() {
                return (new Date()).getTime();
            };
        }
        
     });
     
 })();