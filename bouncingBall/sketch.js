function setup(){
    createCanvas(600, 600)
}

let x = 300; let y = 300
let xdirection = 1
function draw(){
    background(225);
    ellipse(x, y, 20);
    if (x<10){
    xdirection = 1
    }
    if (x>590){
        xdirection = -1
    }
     x = x + xdirection
    
    background(225);
    ellipse(x, y, 20);
    if (y<10){
        ydirection = 1
    }
    if (x>590){
        ydirection = -1
    }
     y = y + ydirection


    }

