/**
 * @file implements Mouse input class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * 
 * @version 3.0
 * */

;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/input/InputSwitch');
    deps.push('src/engine/events/EventSet');
    deps.push('src/engine/globals/Window');
    deps.push('src/engine/input/Output');
    deps.push('src/engine/physics/Vector');
    
    define(deps, function(Class, InputSwitch, EventSet, Window, Output, Vector) {
        
        var EVENT_BTN               = 'button';
        var EVENT_MOVE              = 'move';
        var EVENT_DBCLICK           = 'dbclick';
        var EVENT_DBCLICK_INTERVAL  = 300;//ms
        
        var Mouse = new Class('Mouse', function(screen) {
            Mouse.super.constructor.call(this);
            
            this.screen = screen;
            this.is = new InputSwitch();
            
            this.screen.canvas.addEventListener('mousedown', this.input.bind(this, EVENT_BTN, true), false);
            this.screen.canvas.addEventListener('mousemove', this.input.bind(this, EVENT_MOVE, true), false);
            Window.addEventListener('mouseup', this.input.bind(this, EVENT_BTN, false), false);
            
            this.$$lastPosition = new Vector();
            this.$$history = [];
            this.$$lastBtn = null;
        });
        
        Mouse.extend(EventSet);
        
        
        Mouse.prototype.input = function(type, state, event) {
            var output = new Output(Mouse.$$map[event.which], state, type);
            output.position = new Vector(event.clientX, event.clientY);
            
            output = this.screen.translate(output);
            
            //Google chrome fixes...
            if(type === EVENT_MOVE && this.$$lastPosition.diff2(output.position) === 0) {
                return false;
            }
            
            this.is.process(output, type === EVENT_BTN ? false : true);
            this.$$lastPosition = output.position.clone();
            
            if(!state) {
                this.$$history.push(Date.now());
                
                if(this.$$history.length > 2) {
                    this.$$history.shift();
                }
                
                if(this.$$history.length === 2 && this.$$lastBtn === output.which) {
                    if(this.$$history[1] - this.$$history[0] < EVENT_DBCLICK_INTERVAL) {
                        var dbclickOutput = output.otype(EVENT_DBCLICK);
                        dbclickOutput.position = output.position.clone();
                        this.is.process(dbclickOutput, true);
                    }
                }
            }
            
            if(type !== EVENT_MOVE && !state) {
                this.$$lastBtn = Mouse.$$map[event.which];
            }
        };
        
        Mouse.$$map = {
            1 : 'LMB',
            2 : 'MMB',
            3 : 'RMB'
        };
        
        return Mouse;
    });
})();