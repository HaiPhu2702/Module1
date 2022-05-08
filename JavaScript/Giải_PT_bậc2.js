let a = prompt("ax^2+bx+c=0: nhập  a");
let b = prompt("ax^2+bx+c=0: nhập  b");
let c = prompt("ax^2+bx+c=0: nhập  c");
parseInt(a);
parseInt(b);
parseInt(c);


if (a == 0) {
    let x = -c / b;
    document.getElementById("result").innerHTML = x;

} else {
    let delta = Math.pow(b, 2) - (4 * a * c);
    if (delta >= 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        document.getElementById("result").innerHTML = "nghiem thu nhat la : " + x1 + "<br>" + "Nghiem thu hai la : " + x2 ;

    } else {
        document.getElementById("result").innerHTML = 'vo nghiem';


    }
}