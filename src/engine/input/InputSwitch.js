/**
 * @file implements InputSwitch class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * 
 * @version 0.1b 
 */
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/events/EventSet');
    deps.push('src/engine/input/Output');
    deps.push('src/engine/utils/Toggler');
    
    define(deps, function(Class, EventSet, Output, Toggler) {
        
        var InputSwitch = new Class('InputSwitch', function() {
            InputSwitch.super.constructor.call(this);
            
            this.$$commands = {};
            
            Toggler.set(this);
        });
        
        InputSwitch.extend(EventSet);
        
        InputSwitch.prototype.process = function(output, oneState) {
            if(this.isDisabled()) {
                return false;
            }
            
            var firstProcess = false;
            
            if(!this.$$commands[output.which]) {
                this.$$commands[output.which] = output;
                firstProcess = true;
            }
            
            if(this.$$commands[output.which].state !== output.state || oneState || firstProcess) {
                this.fire(Output.EVENT_NAME, output);
                this.$$commands[output.which] = output;
            }
            
            return true;
        };
        
        InputSwitch.prototype.command = function(which) {
            return this.$$commands[which];
        };
        
        return InputSwitch;
    });
    
})();