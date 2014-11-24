;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/utils/Toggler');
    
    define(deps, function(Class, Toggler) {
        
        var Renderer = new Class('Renderer', function() {
            Toggler.set(this);
        });
        
        Renderer.prototype.draw = function() {};
        Renderer.prototype.drawGUI = function() {};
        
        return Renderer;
    });
})();