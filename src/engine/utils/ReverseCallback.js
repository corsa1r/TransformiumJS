/**
* @file implements ReverseCallback Service
* @description - use this function to reverse order of parameters of function
* If you use ArrayTool.each and does't need 'index' variable you can use only 'value'
* 
* @author CORSAIR <vladimir.corsair@gmail.com>
* @version 21.11.2014
*/
 ;(function() {
    
    var deps = [];
    
    define(deps, function() {
        return function (iteratorFn) {
            return (function() {
                var _args = Array.prototype.slice.call(arguments);
                iteratorFn.apply(this, [].concat(_args.reverse()));
            }).bind(iteratorFn);
        };
    });
    
 })();