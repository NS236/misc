class Vector2D {
  //default is zero vector
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }
  
  /**Static Methods**/
  // returns a new zero vector (Vector2D)
  static zero() {
    return new Vector2D(0, 0);
  }
  // returns a copy of given vector (Vector2D)
  static copy(v) {
    return new Vector2D(v.x, v.y);
  }
  // checks if two vectors are equal (boolean)
  static eq(a, b) {
    return a.x == b.x && a.y == b.y;
  }
  // normalizes given vector (Vector2D)
  static norm(v) {
    let r = v.mag;
    return (r != 0) ? new Vector2D(v.x / r, v.y / r) : new Vector2D(0, 0);
  }
  // adds two vectors (Vector2D)
  static add(a, b) {
    return new Vector2D(a.x + b.x, a.y + b.y);
  }
  // subtracts two vectors (Vector2D)
  static sub(a, b) {
    return new Vector2D(a.x - b.x, a.y - b.y);
  }
  // finds the dot product of two vectors (number)
  static dot(a, b) {
    return a.x * b.x + a.y * b.y;
  }
  // finds the cross product of two vectors (number)
  static cross(a, b) {
    return a.x * b.y - a.y * b.x;
  }
  // multiplies a given vector by a scalar (Vector2D)
  static scale(v, k) {
    return new Vector2D(v.x * k, v.y * k);
  }
  
  /**Accessing Values**/
  // get x coordinate
  get x() {
    return this._x;
  }
  // get y coordinate
  get y() {
    return this._y;
  }
  // get magnitude/length
  get mag() {
    return Math.sqrt(this._x**2 + this._y**2);
  }
  // get direction/angle
  get dir(degrees = false) {
    return Math.atan2(this._y, this._x) * (degrees ? (180 / Math.PI) : 1);
  }
  
  /**Setting Values**/
  // set x coordinate
  setX(x) {
    this._x = x;
  }
  //set y coordinate
  setY(y) {
    this._y = y;
  }
  // set cartesian coordinates (x and y)
  setCoords(x, y) {
    this._x = x;
    this._y = y;
  }
  // set magnitude
  setMag(r) {
    let θ = this.dir;
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  }
  // set direction
  setDir(θ) {
    let r = this.mag;
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  }
  // set polar coordinates (magnitude and direction/r and θ)
  setPolar(r, θ) {
    this._x = r * Math.cos(θ);
    this._y = r * Math.sin(θ);
  }
  
  /**Instance Vector Operations**/
  // add another vector to instance
  add(v) {
    this._x += v.x;
    this._y += v.y;
  }
  // subtract another vector from instance
  sub(v) {
    this._x -= v.x;
    this._y -= v.y;
  }
  // multiply instance by scalar
  scale(k) {
    this._x *= k;
    this._y *= k;
  }
  // normalize instance
  norm() {
    let r = this.mag;
    this._x = (r != 0) ? this.x / r : 0;
    this._x = (r != 0) ? this.y / r : 0;
  }
  
  /**Output**/
  // get array of either polar or cartesian coordinates 
  getArray(polar = false) {
    return !polar ? [this._x, this._y] : [this.mag, this.dir];
  }
  // get object of either polar or cartesian coordinates
  getObject(polar = false) {
    return !polar ? {x: this._x, y: this._y} : {r: this.mag, θ: this.dir};
  }
  // get string of either polar or cartesian coordinates separated by a space
  getString(polar = false) {
    return !polar ? (this._x + " " + this._y) : (this._mag + " " + this._dir);
  }
  // get copy of instance
  copy(v) {
    return new Vector2D(v.x, v.y);
  }
}
