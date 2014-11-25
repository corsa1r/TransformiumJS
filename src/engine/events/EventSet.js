/**
* @file implements EventSet class
* @description this class implements simple event mechanism
* @author CORSAIR <vladimir.corsair@gmail.com>
* @version 21.11.2014
*/

;(function() {

	"use strict";

	var deps = [];

	deps.push('src/engine/Class');
	deps.push('src/engine/storage/Container');

	define(deps, function (Class, Container) {
		
		var EventSet = new Class('EventSet', function() {
			EventSet.super.constructor.call(this);
		});

		EventSet.extend(Container);

		EventSet.prototype.on = function(name, callback) {
			this.add(callback, name);

			return this;
		};

		EventSet.prototype.off = function(name) {
			this.eachByName(name).each((function(eventCallback) {
				this.remove(eventCallback);
			}).bind(this));	

			return this;
		};
		
		EventSet.prototype.fire = function () {
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