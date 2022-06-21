
//Square code
console.group("Squares");
// const squareSide= 5;
// const squarePerimeter= squareSide * 4;
// const squareArea= squareSide*squareSide;

function squarePerimeter(squareSide) {
    return squareSide*4;
};

function squareArea(squareSide) {
    return squareSide*squareSide;
};

console.groupEnd();


//Triangle code
console.group("Triangles");
// const side1= 6;
// const side2= 6;
// const base= 4;
// const height=5.5;
// const trianglePerimeter= side1 + side2 + base; 
// const triangleArea= (base*height)/2;

// console.log(
//     "Measures of the triangle: One side= " + side1 + 
//     " cm, Other side= " + side2 + 
//     " cm, and the base= " + base + 
//     " cm");
// console.log("Triangle's height: " + height + " cm");
// console.log("Triangle's perimeter: " + trianglePerimeter + " cm");
function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
};

function triangleArea(base, height) {
    return (base*height)/2;
};
console.groupEnd();


//Circle code
console.group("Circunferences");
const pi= Math.PI;
// const circleRadio= 4;
// const circleDiameter= circleRadio*2;

// const circlePerimeter= circleDiameter*pi;
// const circleArea= (circleRadio*circleRadio)*pi;

// console.log("The circunference's radio is " + circleRadio + "cm");
// console.log("The circunference's diameter is " + circleDiameter + "cm");
// console.log("The circunference's area is " + circleArea + "cm^2");
// console.log("The circunference's perimeter is " + circlePerimeter + "cm");

function circlePerimeter(circleRadio) {
    return 2*circleRadio*pi;
};

function circleArea(circleRadio) {
    return circleRadio*circleRadio*pi;
};

console.groupEnd();

// Interaction with HTML
function calculatePerimeter() {
    const input= document.getElementById("SquareInput");
    const inputValue= input.value;

    const perimeter= squarePerimeter(inputValue);
    alert("The square perimeter is " + perimeter);
}

function calculateArea() {
    const input=document.getElementById("SquareInput");
    const inputValue= input.value;

    const area=squareArea(inputValue);
    alert("The square area is " + area);
}

function CalculateAreaTri(){
    const inputHeight= document.getElementById("TriangleInputHeight");
    const inputBase= document.getElementById("TriangleInputBase");

    const valueHeight= inputHeight.value;
    const valueBase= inputBase.value;
    
    const areaTri= triangleArea(valueBase, valueHeight);
    alert("The perimeter of the triangle is " + areaTri);
}