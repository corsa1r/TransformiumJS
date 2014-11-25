/**
 * @file implements Touch input
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * @version test
 */

;(function () {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/lib/Hammer');
    deps.push('src/engine/physics/Vector');
    deps.push('src/engine/input/InputSwitch');
    deps.push('src/engine/input/Output');
    deps.push('src/engine/utils/Aspect');
    
    /**
     * Define module Touch input
     * @param {Object} EventSet
     * @param {Object} Hammer
     * @returns {_L5.TouchInput}
     */
    define(deps, function (Class, Hammer, Vector, InputSwitch, Output, Aspect) {

        /**
         * Class Touch input
         * @param {Object} screen - requires Screen
         * @param {Object} options - Hammer.js options
         * @returns {_L14.TouchInput}
         */
        var TouchInput = new Class('TouchInput', function(screen, options) {
            this.screen = screen;

            var defaultOptions = {
                cssProps: {
                    tapHighlightColor: 'rgba(0,255,0,0)'
                }
            };
            
            this.is = new InputSwitch();
            this.$$hammertime = new Hammer(this.screen.canvas, options || defaultOptions);
            
            this.$$hammertime.on(TouchInput.eventsMap.join(' '), (function(event) {
                
                var eventCenter = new Vector().copy(event.center);
                var translateObject = {};

                translateObject.position = eventCenter;
                
                if(this.screen.innerPoint(eventCenter)) {
                    
                    var output = new Output(undefined, true, event.type);
                    
                    var eventOutputs = {
                        position:   this.screen.translate(translateObject).position,
                        angle:      event.angle,
                        isFirst:    Boolean(event.isFirst),
                        isFinal:    Boolean(event.isFinal),
                        deltaTime:  event.deltaTime,
                        original:   event
                    };
                    
                    Aspect.wrap(output, eventOutputs);
                    this.is.process(output, true);
                }
                
            }).bind(this));


            this.$$hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            this.$$hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        });
        
        TouchInput.eventsMap = ['tap', 'doubletap', 'press', 'swipe', 'pan', 'panstart', 'panend', 'panmove'];
        
        return TouchInput;
    });
})();