let paper1 = document.getElementById("canvas");

let pen = paper1.getContext("2d");

class Tank {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 20;
        this.img='';
        this.bullets=[];
    }

    drawTank(canvas) {
        let pen = canvas.getContext("2d");
         this.img = document.getElementById("imgTank")
        pen.drawImage(this.img, this.x, this.y, this.size, this.size)
    }

    createBullet(){
      let bullet=new Bullet(this.x,this.y)
        this.bullets.push(bullet)
    }
    drawBullet(canvas){
        let context=canvas.getContext("2d")
        for(let i=0;i<this.bullets.length;i++){p
            this.bullets[i].update();
            this.bullets[i].drawTank(context)
        }

    }

}

let tank = new Tank(0, 0, 60)
tank.drawTank(paper1)

window.addEventListener("keydown", Move)



function Move(e) {
    pen.clearRect(0, 0, paper1.width, paper1.height)
    switch (e.key) {
        case "ArrowUp":
            tank.img.src = 'JS/Image/Tank_up.png'
            if(tank.y-tank.size>=0){
                tank.y -= tank.speed;
            }
            break;
        case "ArrowLeft":
            tank.img.src = 'JS/Image/Tank_left.png'

            if(tank.x>0){
                tank.x -= tank.speed;
            }
            break;
        case "ArrowRight":
            tank.img.src = 'JS/Image/Tank_right.png'

            if(tank.x+tank.size<paper1.width){
                tank.x += tank.speed;
            }
            break;
        case "ArrowDown":
            tank.img.src = 'JS/Image/Tank_down.png'

            if(tank.y+tank.size<=paper1.height){
                tank.y += tank.speed;
            }
            break;
        case "p":
            tank.createBullet();
            break;
    }
    tank.drawTank(paper1)

}

 function  start(){
document.getElementById("canvas").style.display='block';
document.getElementById("start").style.display='none'
}