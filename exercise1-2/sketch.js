let starX = []
let starY = []
let gX = 200
let gY = 200

function setup() {
    createCanvas(400, 400)

}



/**
 * Draws a star at the given coordinates.
 * @param {number} x
 * @param {number} y 
 */
function star(x, y) {
    fill(255, 234, 0);
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}

function draw() {
    background(50, 75, 255)
    for (let i = 0; i < starY.length; i++) {
        star(starX[i], starY[i])
        console.log(`i=${i} starY[${i}] is ${starY[i]}`)
        starY[i] += 2
    }
    console.log('For loop finished')
}

function mouseClicked() {
    starX.push(mouseX)
    starY.push(mouseY)
    console.log(starY)


}
