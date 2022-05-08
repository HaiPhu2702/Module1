let paper=document.getElementById("")


class Pikachu_Move {

    constructor(image,top,left,size) {
        this.image=image;
        this.top=top;
        this.left=left;
        this.size=size;
        this.speed=30;
    }

    getImg(){
        return '<img width=" '+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:test-absolute;" />';
    }
    render(canvas){

    }
    moveRight(){
        this.left+=this.speed;
     }
     moveDown(){
        this.top+=this.speed;
     }
     moveLeft(){
        this.left-=this.speed;
     }
     moveUp(){
        this.top-=this.speed
     }
     setSpeed(speed){
        this.speed=speed;
        return this.speed;
     }


}
let hero = new Pikachu_Move("pikachu.png", 0, 0, 200);

function start(){
    if(hero.top<=0 && hero.left <= window.innerWidth - hero.size){
         hero.moveRight();
    }else if(hero.left>=window.innerHeight-hero.size&& hero.top<window.innerHeight-hero.size){
        hero.moveDown()
    }else if(hero.top>=window.innerHeight-hero.size && hero.left>0){
        hero.moveLeft()
    }else if(hero.left<= 0 && hero.top>0){
        hero.moveUp()
     }a
    document.getElementById('game_pikachu').innerHTML = hero.getImg();
    setTimeout(start, 60)
}

start();