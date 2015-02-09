TransformiumJS
=================================================================

Version 0.5 Beta 2 - demo http://sourcehint.com/Physics/

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


6) Components system 
    - Just attach RigidBody and physics engine will automaticly simulate it.
    
```js
    
    //Create rigid body component as a cube
    var cubeBody = new RigidBody('rectangle', x, y, width, height, options);
    //Attach it to player
    player.components.attach(cubeBody);
```

7) Event system
    
```js
var keyboard = new Keyboard();

//Handle keyboard events
keyboard.is.on(Output.EVENT_NAME, function(event) {
    if(event.which === 'SPACE' && event.state === false) {
        
        //Create a new player command
        var command = {
            name  : 'JUMP',
            state : event.state,
            time  : event.time
        };
        
        //Add command to the queue.
        player.commandsQueue.add(command);
    }
});

player.command = function(command, delta) {
    switch(command.name) {
        case 'JUMP' : {
        
            //Define force
            var force = {x : 0, y : -5 * delta};
            //Apply it
            this.components.get('RigidBody').applyForce(force);
            
            break;
        }
    }
};

player.update = function(delta) {
    
    while(this.commandsQueue.len()) {
        //Get first command from the queue
        var command = this.commandsQueue.first();
        //Process the command
        this.command(command, delta);
        //Remove command from the queue
        this.commandsQueue.remove(command);
    }
    
};
```
  
8) Phonegap and Icenium implementation is on progress.

    - Feautered classes
    a) Gyroscope events
    b) Accelerometer events
    c) Vibration controller
    and more..
    
9) Rendering system is on progress.
