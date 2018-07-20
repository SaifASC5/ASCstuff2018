function setup(){
    createCanvas(600,600);

}



let color = false;
function mouseClicked(){
    console.log()
    if(color){
        fill("red")
        rect(0, 0, 600,600)
        color=false
    }else{
        console.log("ball")
        fill("blue")
        rect(0, 0, 600, 600)
        color=true
    }  
}

 