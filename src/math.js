export function square(x) {
    console.log("square is called..")
    return Math.pow(x,2);
}

export function cube(x) {
    console.log("cube is called..")
    return Math.pow(x,3);
}

var math = {square, cube}

export default math;
