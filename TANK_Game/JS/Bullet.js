
class Bullet {

    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.r=4;
        this.speed=15;

    }

    bulletFly(){
        this.x+=this.speed;
        this.y+=this.speed;
    }
    renderBullet(canvas){
        let ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
        ctx.stroke()
        ctx.closePath();
        ctx.fill();

    }


}
