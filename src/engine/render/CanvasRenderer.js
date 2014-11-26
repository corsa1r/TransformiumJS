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
        
        CanvasRenderer.prototype.draw = function(gameObjects, dontClearScreen) {
            var that = this;
            
            if(that.isDisabled()) {
                return false;
            }
            
            if(dontClearScreen !== false) {
                that.$$screen.context.clearRect(0, 0, that.$$screen.canvas.width, that.$$screen.canvas.height);
            }
            
            gameObjects.each(function(gameObject) {
                gameObject.draw(that.$$screen, that.$$camera);
                gameObject.components.each(function(component) {
                    component.draw(that.$$screen, that.$$camera);
                });
            });
        };
        
        CanvasRenderer.prototype.drawGUI = function() {
            console.log('drawGUI');
        };
        
        return CanvasRenderer;
    });
})();