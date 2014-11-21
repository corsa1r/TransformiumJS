/**
 * @file implements Interaval class
 * @see
 *    var clock = new Interval(1000);
 *    
 *    clock.on('tick', function() {
 *       //do stuff with this interval
 *    });
 */
;(function() {
   
   var deps = [];
   
   deps.push('src/engine/Class');
   deps.push('src/engine/globals/Window');
   deps.push('src/engine/events/EventSet');
   
   define(deps, function (Class, Window, EventSet) {
       
      var Interval = new Class('Interval', function(speed, iterationsBeforeDie) {
         this.parent.constructor.call(this);
         
         this.$$speed = Number(speed);
         this.$$clock = null;
         this.$$iterationsBeforeDie = Number(iterationsBeforeDie) || Infinity;
         this.$$iterations = 0;
      });
      
      Interval.extend(EventSet);
      
      Interval.prototype.start = function() {
         if(!this.$$clock) {
            
            this.fire('start', Date.now());
            
            this.$$clock = Window.setInterval((this.tick).bind(this), this.$$speed);
         }
      };
      
      Interval.prototype.tick = function () {
         this.$$iterations++;
         
         this.fire('tick', this.$$iteration, Date.now());
         
         if(this.$$iterations >= this.$$iterationsBeforeDie) {
            this.stop();
         }
      };
      
      Interval.prototype.stop = function () {
         if(this.$$clock) {
            this.fire('stop', Date.now());
            Window.clearInterval(this.$$clock);
         }
      };
      
      Interval.extend(EventSet);
      
      return Interval; 
   });
});