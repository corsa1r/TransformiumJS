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
    
    define(deps, function (Class, GameLoop, Keyboard, Screen, Mouse, AdvancedContainer, GameObject, Center, ComponentsContainer) {
        var keyboard = new Keyboard();
        
        keyboard.is.on('output', function(event) {
            //console.log(event.type, event);
        });
        
        var canvas = document.getElementById('canvas');
        var screen = new Screen(canvas);
        var mouse = new Mouse(screen);
        
        mouse.is.on('output', function(event) {
            //console.log(event.type, event);
        });
        
        var ac = new AdvancedContainer();
        
        ac.on.add.add([-1, -2, -3], 'init');
        ac.on.remove.add([1, 2, 3], 'remove');
        
        var a = {
            x: 10,
            y: 100,
            init: function() {
                console.warn('init', arguments);
            },
            remove : function() {
                console.log('remove', arguments);
            }
        };
        
        //ac.add(a, 'a');
        //ac.remove('a');
        
        var cube = new GameObject();
        
        cube.components.attach(new Center());
        
        console.log(cube.components.get('Center').get())
    });
})();