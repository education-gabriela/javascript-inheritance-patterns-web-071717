'use strict';

function Rectangule(sides, width, height) {
  this.sides = sides;
  this.width = witdh;
  this.height = height;
}

Rectangule.prototype.area = function() {
  return this.width * this.height;
}

Rectangule.prototype.perimeter = function() {
  return (this.width + this.height) * 2;
}

function Square(sides, length) {
  this.sides = sides
  this.height = length
  this.width = length
}

Square.prototype = Object.create(Rectangule.prototype)

Rectangule.prototype.internalAngules = 90
