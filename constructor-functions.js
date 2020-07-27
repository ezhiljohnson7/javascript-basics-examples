function Circle(radius){

    this.radius = radius;
    this.draw = function(){
        console.log('Successfully drew a circle with radius ' + radius);
    }
}

const circle1 = new Circle(2);
circle1.draw(); 
const circle2 = new Circle(3);
circle2.draw(); 
const circle3 = new Circle(4);
circle3.draw(); 

function createCircle(radius){
    return {
        radius: radius,
        draw: function() {
            //Graphic libraries that can draw a circle.
            console.log('Successfully drew a circle with radius ' + radius);
        }
    };
}
// let circle4 = new Object();

const circle4 = createCircle(2);
circle4.draw();
const circle5 = createCircle(3);
circle5.draw();
let circle6 = createCircle(4);
circle6.draw();