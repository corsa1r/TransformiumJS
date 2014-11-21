/**
 * All Classes will be tested here, for now
 */
;(function() {
    
    
    require.config({
        baseUrl: './'
    });
    
    var deps = [];
    
    deps.push('src/engine/time/GameLoop');
    deps.push('src/engine/input/Keyboard');
    
    define(deps, function (GameLoop, Keyboard) {
        var keyboard = new Keyboard();
        
        keyboard.on('output', function(event) {
            console.log(event);
        });
    });
})();