/**
 * @file implements Each method
 * @see
 *  each([1, 2, 3], function(item, i) {});
 * 
 * 
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * @version 1
 * */
;(function() {
    
    var deps = [];
    
    define(deps, function() {
        return function(list, iterator) {
            for(var i in list) {
                if(list.hasOwnProperty(i)) {
                    if(iterator(i, list[i]) === false) {
                        break;
                    }
                }
            }
        };
    });
})();