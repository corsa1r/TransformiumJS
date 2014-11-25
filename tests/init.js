/**
 * All Classes will be tested here, for now
 */
;(function() {
    
    require.config({
        baseUrl: './'
    });
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/time/GameLoop');
    deps.push('src/engine/input/Keyboard');
    deps.push('src/engine/render/Screen');
    deps.push('src/engine/input/Mouse');
    deps.push('src/engine/storage/AdvancedContainer');
    deps.push('src/engine/gameobject/GameObject');
    deps.push('src/engine/gameobject/components/Center');
    deps.push('src/engine/storage/ComponentsContainer');
    deps.push('src/engine/render/CanvasRenderer');
    deps.push('src/engine/storage/Container');
    deps.push('src/engine/input/Touch');
    deps.push('src/engine/physics/Vector');
    
    define(deps, function (Class, GameLoop, Keyboard, Screen, Mouse, AdvancedContainer, GameObject, Center, ComponentsContainer, CanvasRenderer, Container, Touch, Vector) {
        
        var canvas = document.getElementById('canvas');
        var screen = new Screen(canvas);
        screen.setCanvasSize(500, 500);
        var renderer = new CanvasRenderer(screen);
        var gameloop = new GameLoop();
        var gameObjects = new Container();
        var touch = new Touch(screen);
        var keyboard = new Keyboard();
        var mouse = new Mouse(screen);
        
        mouse.is.on('output', function(event) {
            console.log(event);
        });
    });
})();