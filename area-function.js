function Area(){

    this.areaOfCircle = function(radius) {
        return 3.14 * radius * radius;
    }

    this.areaOfSquare = function(side) {
        return side * side;
    }

    this.areaOfRectangle = function(length, breadth) {
        return length * breadth;
    }
}

module.exports = Area;