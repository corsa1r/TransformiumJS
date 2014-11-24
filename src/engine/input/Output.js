;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    
    define(deps, function(Class) {
        
        var Output = new Class('Output', function(which, state, type) {
            this.which = which;
            this.state = state;
            this.time = Date.now();
            this.type = type;
        });
        
        Output.prototype.otype = function(newType) {
            return new Output(this.which, this.state, newType);
        };
        
        Output.EVENT_NAME = 'output';
        
        return Output;
    });
})();