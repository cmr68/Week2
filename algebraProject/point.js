"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //Setters
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    //Getters
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = this.x - anotherPoint.x;
        var dy = this.y - anotherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.calculateQuadrant = function () {
        var quadrant = 0;
        if (this.x > 0 || this.y > 0) {
            quadrant = 1;
        }
        else if (this.x < 0 || this.y > 0) {
            quadrant = 2;
        }
        else if (this.x < 0 || this.y < 0) {
            quadrant = 3;
        }
        else if (this.x > 0 || this.y < 0) {
            quadrant = 4;
        }
        return quadrant;
    };
    Point.prototype.calculateNearest = function (points) {
        if (points.length == 0) {
            console.log("Array de puntos vacío");
        }
        var nearestPoint = points[0];
        var minDistance = this.calculateDistance(points[0]);
        for (var i = 1; i < points.length; i++) {
            var distance = this.calculateDistance(points[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = points[i];
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
