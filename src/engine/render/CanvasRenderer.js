;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/render/Camera');
    deps.push('src/engine/render/Renderer');
    
    define(deps, function(Class, Camera, Renderer) {
        
        var CanvasRenderer = new Class('CanvasRenderer', function(screen) {
            CanvasRenderer.super.constructor.call(this);
            
            this.$$screen = screen;
            this.$$camera = new Camera(this.$$screen);
        });
        
        CanvasRenderer.extend(Renderer);
        
        CanvasRenderer.prototype.draw = function(gameObjects) {
            if(this.isDisabled()) {
                return false;
            }
            
            this.$$screen.context.clearRect(0, 0, this.$$screen.canvas.width, this.$$screen.canvas.height);
            
            gameObjects.each((function(gameObject) {
                gameObject.draw(this.$$screen, this.$$camera);
                gameObject.components.each((function(component) {
                    component.draw(this.$$screen, this.$$camera);
                }).bind(this));
            }).bind(this));
        };
        
        CanvasRenderer.prototype.drawGUI = function() {
            console.log('drawGUI');
        };
        
        return CanvasRenderer;
    });
})();