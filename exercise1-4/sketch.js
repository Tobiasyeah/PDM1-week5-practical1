let circleX = []
let circleY = []


function setup() {
    createCanvas(600, 400)
    background(255)
}

function draw() {
    fill(255, 0, 0)
    for (let i = 0; i < circleX.length; i++)
        circle(circleX[i], circleY[i], 40)


}

function mousePressed() {
    circleX.push(mouseX)
    circleY.push(mouseY)
    console.log(circleX)
}

function keyPressed() {
    if (key === 'z') {
        circleX.pop()
        circleY.pop()
        background(255)
    }

}












