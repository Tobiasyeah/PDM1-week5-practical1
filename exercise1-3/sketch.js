let tailX = []
let tailY = []




function setup() {
    createCanvas(400, 400)
}



function draw() {
    background(255)
    fill(0, 0, 255)
    if (tailX.length > 4 && tailY.length > 4) {
        tailX.pop()
        tailY.pop()
    } else {
        tailX.unshift(mouseX)
        tailY.unshift(mouseY)
    }



    for (let i = 0; i < 5; i++) {
        circle(tailX[i], tailY[i], 20 - i * 2)
    }

}