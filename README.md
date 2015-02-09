TransformiumJS is a game engine for web.
=================================================================

Version 0.5 Beta 2

Feauters

1) Modular

2) Multiple input types:

    a) Keyboard
    b) Mouse
    c) Touch
    d) Joystic is not implemented yet. 
    
3) GameObjects

```js
    var gameLoop = new GameLoop();
    var player = new GameObject();
    
    gameLoop.on('update', function(delta) {
        player.update(delta);
    });
    
    gameLoop.start();
```

4) Physics engine (thanks to MatterJS - http://brm.io/matter-js/)

5) Storage container system

```js
    //Add commads queue to the player gameObject
    player.commandsQueue = new Container();
```

6) Event system
    
```js
var keyboard = new Keyboard();

//Handle keyboard events
keyboard.is.on(Output.EVENT_NAME, function(event) {
    if(event.which === 'SPACE' && event.state === false) {
        player.commandsQueue.add('JUMP');//Add command to the queue.
    }
});
```

a) Components system 
    - Just attach RigidBody and physics engine will automaticly simulate it.
    
```js
    
    //Create rigid body component as a cube
    var cubeBody = new RigidBody('rectangle', x, y, width, height, options);
    //Attach it to player
    player.components.attach(cubeBody);
```
  
7) Phonegap and Icenium implementation is on progress.

    - Feautered classes
    a) Gyroscope events
    b) Accelerometer events
    c) Vibration controller
    and more..
    
8) Rendering system is on progress.
