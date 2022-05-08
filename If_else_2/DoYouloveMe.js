
document.getElementById("y").addEventListener("click",out_thong_bao);
function out_thong_bao(){
    alert("<3")
}

let no=document.getElementById("n")
no.addEventListener("mouseover",move_right);


function move_right(){
    let x =Math.round(Math.random()*window.innerWidth);
    let y=Math.round(Math.random()*window.innerHeight);
no.style.left=parseInt(no.style.left)+x+"px"
no.style.top=parseInt(no.style.top)+y+"px"

}



