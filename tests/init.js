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
    
    define(deps, function (Class, GameLoop, Keyboard, Screen, Mouse, AdvancedContainer, GameObject, Center, ComponentsContainer, CanvasRenderer, Container) {
        var canvas = document.getElementById('canvas');
        var screen = new Screen(canvas);
        var renderer = new CanvasRenderer(screen);
        var gameloop = new GameLoop();
        var gameObjects = new Container();
        
        var cube = new GameObject();
        
        cube.draw = function(screen, camera) {
            screen.context.save();
            screen.context.beginPath();
            screen.context.fillStyle = 'black';
            screen.context.fillRect(this.position.x - camera.position.x, this.position.y - camera.position.y, this.size.x, this.size.y);
            screen.context.restore();
        };
        
        gameObjects.add(cube);
        
        gameloop.on('draw', function() {
            renderer.draw(gameObjects);
        });
        
        gameloop.start();
    });
})();