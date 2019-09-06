class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumstance() {
    return ( 2 * 3.14 * this.radius);
  }
  getArea() {
    return ( 3.14 * Math.pow(this.radius , 2));
  }
}

const circle = new Circle(10);
console.log('Diameter is: ',circle.getDiameter());
console.log('Circumstance is: ',circle.getCircumstance());
console.log('Area is: ',circle.getArea());