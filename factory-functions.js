function areaOfSquare(side){
    let area = side * side;
    return area;
}

console.log(areaOfSquare(2));

//Factory function.
function createCircle(radius){
    return {
        radius: radius,
        draw: function() {
            //Graphic libraries that can draw a circle.
            console.log('Successfully drew a circle with radius ' + radius);
        }
    };
}

const circle1 = createCircle(2);
circle1.draw();
const circle2 = createCircle(3);
circle2.draw();
let circle3 = createCircle(4);
circle3.draw();