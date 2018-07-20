let healthPoints1 = 100;
let attackPoints1 = 15; 
let defensePoints1 = 15;
let healthPoints2 = 100;
let attackPoints2 = 30;
let defensePoints2 = 0;

function setup(){
    createCanvas (1000, 1000);
    background(50);
    fill("red");
    rect(100,450,100,100);
    fill("blue");
    rect(750,450,100,100);
    fill("white");
    textSize(20);
    if(healthPoints1 < 80){
        fill("yellow");
    }
    if(healthPoints1 < 25){
        fill("red");
    }
    text("HP: " + healthPoints1, 100, 445);

    fill("white")
    if(healthPoints2 < 80){
        fill("yellow");
    }
    if(healthPoints2 < 25){
        fill("red");
    }    
    text("HP: " + healthPoints2, 750, 445);
    
    defensePoints1 = Math.floor(random(10, 15));
    defensePoints2 = Math.floor(random(10, 15));
    attackPoints1 = Math.floor(random(15, 30));
    attackPoints2 = Math.floor(random(15, 30));    

    fill("white");
    text("Defense: " + defensePoints1, 100, 570);
    text("Defense: " + defensePoints2, 750, 570);
    text("Attack: " + attackPoints1, 100, 570);
    text("Attack: " + attackPoints2, 100, 570);    
}


let turn = 1;
function mouseClicked()
 {
    if(mouseX > 100 && mouseX < 200 && mouseY > 450 && mouseY < 550 && turn % 2 == 1){ // character on the left 
        healthPoints2 = healthPoints2 - (attackPoints1 - defensePoints2); 
        turn += 1;
    }else if(mouseX >750 && mouseX<850 && mouseY > 450 && mouseY < 550 && turn % 2 == 0){    // character on the right      
        healthPoints1 = healthPoints1 - (attackPoints2 - defensePoints1);
        turn += 1;
    }
    
    
    
    setup();
    if(healthPoints1 <= 0){
        background(50);
        fill("white");
        textSize(100);
        text("HAHA YOU LOST ", 100, 500);
        console.log("Game Over") // what about make defense point random ?
    }else if(healthPoints2 <= 0){
        background(50);
        fill("white");
        textSize(100);
        text("You Won ", 300, 500);
    }// else if()
    
}

