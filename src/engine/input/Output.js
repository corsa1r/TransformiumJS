;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/events/EventSet');
    
    define(deps, function(Class, EventSet) {
        
        var Output = new Class('Output', function(which, state) {
            this.which = which;
            this.state = state;
            
            this.time = Date.now();
        });
        
        Output.EVENT_NAME = 'output';
        
        return Output;
    });
})();