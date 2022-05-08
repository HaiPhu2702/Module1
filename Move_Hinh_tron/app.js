let paper = document.getElementById("canvas1");
let pen = paper.getContext('2d');

class Circle {

    constructor(x, y, r, color = "red") {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speed = 50;
    }

    render(canvas) {
        let pen = canvas.getContext("2d")
        pen.beginPath();
        pen.arc(this.x, this.y, this.r, 0, 2 * Math.PI,)
        pen.fillStyle = this.color
        pen.stroke();
        pen.fill();
        pen.closePath();
    }
}


let circle = new Circle(200, 200, 50)
circle.render(paper);

window.addEventListener("keydown", dichuyen);

function dichuyen(evt) {
    pen.clearRect(0, 0, paper.width, paper.height)
    switch (evt.key) {
        case "ArrowUp" :
                circle.y -= circle.speed
            break;
        case "ArrowRight":
                circle.x += circle.speed
            break;
        case "ArrowDown":
                circle.y += circle.speed
            break;
        case "ArrowLeft":
                circle.x -= circle.speed
            break;

    }
    circle.render(paper);

}

