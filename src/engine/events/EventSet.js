/**
* @file implements EventSet class
* @description this class implements simple event mechanism
* @author CORSAIR <vladimir.corsair@gmail.com>
* @requires Container class - EventSet depends/inherit the Container to store names and callbacks of the events.
* 	- https://github.com/corsa1r/TransformiumJS/blob/master/src/engine/storage/Container.js
* @version 21.11.2014
*/

;(function() {

	"use strict";

	var deps = [];

	deps.push('src/engine/Class');
	deps.push('src/engine/storage/Container');

	define(deps, function (Class, Container) {
		
		var EventSet = new Class('EventSet', function() {
			EventSet.super.constructor.call(this);//Call Container constructor in EventSet scope
		});

		EventSet.extend(Container);//Inherit the container to get functionallity as container
		
		/**
		 * Attach event listener by name and callback
		 * @param {String} name - this is the name of the event, for example: 'update'
		 * @param {Functin} callback - this is the callback function, which will be called when event is triggered.
		 * @see
		 * 	  eventSet.on('test', callback);//Attach event
		 *    //Fire the event, after this action, callback will be called with 1,2,3,4,5 arguments
		 *    eventSet.fire('test', 1, 2, 3, 4 etc..);
		 * 
		 * @description you can add multiple events with the same name, but when you remove one, all be removed (for now).
		 * @return EventSet
		 */
		EventSet.prototype.on = function(name, callback) {
			this.add(callback, name);

			return this;
		};
		
		/**
		 * This method detach/remove all events listeners with the given name
		 * @param {String} name - the name of the event which you want to remove.
		 * @return EventSet
		 */
		EventSet.prototype.off = function(name) {
			this.eachByName(name).each((function(eventCallback) {
				this.remove(eventCallback);
			}).bind(this));	

			return this;
		};
		
		/**
		 * This method fires/triggers the events by given name and arguments
		 * @param {String} name - this is the name of the event which you want to trigger.
		 * @param [{Object|Array|Number|String|Function}] - optional unlimited arguments
		 * 	- all these arguments will be passed to callbacks of the event listeners.
		 * 
		 * @return EventSet
		 */
		EventSet.prototype.fire = function (/*name, args_1, arg_2, arg_N*/) {
			var $$args = Array.prototype.slice.call(arguments, 0);
			var $$name = $$args.shift();

			this.eachByName($$name).each(function(callback) {
				callback.apply(callback, $$args);
			});
			
			return this;
		};

		return EventSet;
	});
})();
