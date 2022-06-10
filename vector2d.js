function Vector2D(x, y) {
  //default is zero vector
  if(x && y) {
    this._x = x;
    this._y = y;
  } else {
    this._x = 0;
    this._y = 0;
  }

  /**Accessing Values**/
  // get x coordinate
  this.x = this._x;
  // get y coordinate
  this.y = this._y;
  // get magnitude/length
  this.getMag = function() {
    return Math.sqrt(this._x**2 + this._y**2);
  };
  // get direction/angle
  this.getDir = function() {
    return Math.atan2(this._y, this._x);
  };

  /**Setting Values**/
  // set x coordinate
  this.setX = function(x) {
    this._x = x;
  };
  //set y coordinate
  this.setY = function(y) {
    this._y = y;
  };
  // set cartesian coordinates (x and y)
  this.setCoords = function(x, y) {
    this._x = x;
    this._y = y;
  };
  // set magnitude
  this.setMag = function(r) {
    var θ = this.getDir();
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  };
  // set direction
  this.setDir = function(θ) {
    var r = this.getMag();
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  };
  // set polar coordinates (magnitude and direction/r and θ)
  this.setPolar = function(r, θ) {
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  };

  /**Instance Vector Operations**/
  // add another vector to instance
  this.add = function(v) {
    this._x += v.x;
    this._y += v.y;
  };
  // subtract another vector from instance
  this.sub = function(v) {
    this._x -= v.x;
    this._y -= v.y;
  };
  // multiply instance by scalar
  this.scale = function(k) {
    this._x *= k;
    this._y *= k;
  };
  // normalize instance
  this.norm = function() {
    var r = this.getMag;
    this._x = (r !== 0) ? this.x / r : 0;
    this._y = (r !== 0) ? this.y / r : 0;
  };

  /**Output**/
  // get array of either polar or cartesian coordinates 
  this.getArray = function(polar) {
    return !polar ? [this._x, this._y] : [this.getMag, this.getDir()];
  };
  // get object of either polar or cartesian coordinates
  this.getObject = function(polar) {
    return !polar ? {x: this._x, y: this._y} : {r: this.getMag, θ: this.getDir()};
  };
  // get string of either polar or cartesian coordinates separated by a space
  this.getString = function(polar) {
    return !polar ? (this._x + " " + this._y) : (this.getMag + " " + this.getDir());
  };
  // get copy of instance
  this.copy = function() {
    return new Vector2D(this.x, this.y);
  };
}

/**Static Methods**/
// returns a new zero vector (Vector2D)
Vector2D.zero = function() {
  return new Vector2D(0, 0);
};
// returns a copy of given vector (Vector2D)
Vector2D.copy = function(v) {
  return new Vector2D(v.x, v.y);
};
// checks if two vectors are equal (boolean)
Vector2D.eq = function(a, b) {
  return a.x === b.x && a.y === b.y;
};
// normalizes given vector (Vector2D)
Vector2D.norm = function(v) {
  var r = v.mag;
  return (r !== 0) ? new Vector2D(v.x / r, v.y / r) : new Vector2D(0, 0);
};
// adds two vectors (Vector2D)
Vector2D.add = function(a, b) {
  return new Vector2D(a.x + b.x, a.y + b.y);
};
// subtracts two vectors (Vector2D)
Vector2D.sub = function(a, b) {
  return new Vector2D(a.x - b.x, a.y - b.y);
};
// finds the dot product of two vectors (number)
Vector2D.dot = function(a, b) {
  return a.x * b.x + a.y * b.y;
};
// finds the cross product of two vectors (number)
Vector2D.cross = function(a, b) {
  return a.x * b.y - a.y * b.x;
};
// multiplies a given vector by a scalar (Vector2D)
Vector2D.scale = function(v, k) {
  return new Vector2D(v.x * k, v.y * k);
};
