function setup(){
    createCanvas(1000,1000);
    background(51);
    let  x = 50;let y = 50;
    for (let i=1; i <= 100; i++){
        rect(x,y,40,40);
        x = x + 40
        if (i % 10 == 0){
            y = y + 40
            x = 50
        }


    }


}

let ship1 
let ship2
    function mouseClicked(){
      shipX = Math.floor((mouseX - 50) / 40)
      shipY = Math.floor((mouseY - 50) / 40);
        
    }        

    