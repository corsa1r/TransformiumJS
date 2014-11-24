/**
 * @file Implements Vector class.
 * @author CORSAIR <vladimir.corsair@gmail.com>
 * @version 09.14.2014
 */
;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    
    define(deps, function (Class) {
        
        var Vector = new Class('Vector', function(x, y) {
            this.x = x || 0;
            this.y = y || 0;
        });

        Vector.prototype.polar = function(a, r) {
            this.x = Math.cos(a) * r;
            this.y = Math.sin(a) * r;
            return this;
        };

        Vector.prototype.append = function(x, y) {
            if(typeof x === 'object') {
                this.x += x.x;
                this.y += x.y;
            } else {
                this.x += x || 0;
                this.y += y || 0;
            }

            return this;
        };

        Vector.prototype.appendClone = function(x, y) {
            return this.clone().append(x, y);
        };

        Vector.prototype.copy = function(vector) {
            this.x = vector.x;
            this.y = vector.y;
            return this;
        };

        Vector.prototype.sum = function(value, factor) {
            if (factor === undefined)
                factor = 1;
            if (typeof value === 'number') {
                this.x += value * factor;
                this.y += value * factor;
            } else if (value instanceof Vector) {
                this.x += value.x * factor;
                this.y += value.y * factor;
            } else
                throw "The value must be number or Vector.";
            return this;
        };

        Vector.prototype.mul = function(scalar) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        };

        Vector.prototype.len2 = function() {
            return Math.pow(this.x, 2) + Math.pow(this.y, 2);
        };

        Vector.prototype.len = function() {
            return this.len2();
        };

        Vector.prototype.angle = function() {
            return Math.acos(this.x / this.len());
        };

        Vector.prototype.diff2 = function(vector) {
            return Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2);
        };

        Vector.prototype.diff = function(vector) {
            return Math.sqrt(this.diff2(vector));
        };

        Vector.prototype.diffXY = function (vector) {
            return new Vector(vector.x - this.x, vector.y - this.y);
        };

        Vector.prototype.clone = function() {
            return new Vector(this.x, this.y);
        };
        
        return Vector;
    });
})();