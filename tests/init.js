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
        
        var Cube = new Class('Cube', function() {
            this.position = new Vector(0, 400);
            this.velocity = new Vector(0.1, 0.1);
            this.c = [0, 0, 0];
            this.cc = 1;
            
            this.r = new Vector(1, 1);
            this.v = 0.002;
            this.ra = 68;
        });
        
        Cube.extend(GameObject);
        
        Cube.prototype.update = function() {
            this.c[0] += this.cc;
            this.c[1] += this.cc;
            this.c[2] += this.cc;
            
            if(this.c[0] > 254) {
                this.cc *= -1;
            }
            
            if(this.c[0] < 1) {
                this.cc *= -1;
            }
            
            this.position.x += Math.sin(this.r.x) * 7;
            this.r.x += this.v;
            
            this.position.y += Math.cos(this.r.y) * 7;
            this.r.y += this.v;
            
            this.v += 0.001;
            this.ra += Math.sin(this.r.x) * 0.2;
        };
        
        Cube.prototype.draw = function(context) {
            context.beginPath();
            context.strokeStyle = 'rgb(' + this.c.toString() + ')';
            context.arc(this.position.x, this.position.y, this.ra, Math.PI * 2, false);
            context.stroke();
        };
        
        gameloop.start();
        
        gameObjects.add(new Cube());
        
        gameloop.on('update', function(delta) {
            //screen.context.clearRect(0, 0, 500, 500);
            gameObjects.each(function(gameObject) {
                gameObject.update(delta);
                gameObject.draw(screen.context);
            });
        });
        
        mouse.is.on('output', function(event) {
            console.log(event);
        });
    });
})();