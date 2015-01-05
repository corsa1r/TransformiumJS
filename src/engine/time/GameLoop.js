/**
 * @file implements GameLoop class
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * 
 * @version 21.11.2014
 */
 
 ;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/events/EventSet');
    deps.push('src/engine/time/Interval');
    
    define(deps, function(Class, EventSet, Interval) {
        
        var GameLoop = new Class('GameLoop', function(fps) {
            GameLoop.super.constructor.call(this);
            
            this.$$defaultFps = 16.666666666666668;//1000 / 60
            this.$$fps = fps || this.$$defaultFps;
            this.$$clock = new Interval(this.$$fps, Infinity);
            
            this.$$lastTime = null;
        });
        
        GameLoop.extend(EventSet);
        
        GameLoop.prototype.start = function() {
            var that = this;
            
            if(!that.$$clock.isRunning()) {
                that.$$lastTime = Date.now();
                that.$$clock.off('tick').on('tick', function(iterations, now) {
                    that.loop(iterations, now);
                }).start();
            }
            
            return that;
        };
        
        GameLoop.prototype.loop = function(iterations, now) {
            var delta = now - this.$$lastTime;
            var that = this;
            
            this.each(function(listener, eventName) {
                that.fire(eventName, delta, iterations, now);
                return true;
            });
            
            this.$$lastTime = now;
            
            return false;
        };
        
        GameLoop.prototype.pause = function() {
            if(this.$$clock.isRunning()) {
                this.$$clock.pause();
            }
            
            return this;
        };
        
        GameLoop.prototype.isRunning = function() {
            return this.$$clock.isRunning();
        };
        
        return GameLoop;
    });
    
 })();
