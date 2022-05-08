

function changeImage(id) {
    let img = document.getElementById("day"+id);
    let imgName ="";
    switch (img.alt){
        case "gau":
            imgName = "khi";
            break;
        case "khi":
            imgName = "meo";
            break;
        default:
            imgName = "gau"
    }

    img.src = "/img_game_puzzle/"+imgName+id+".jpg";
    img.alt = imgName;

    checkWin();
}

function checkWin() {
    let img1 = document.getElementById("day1").alt;
    let img2 = document.getElementById("day2").alt;
    let img3 = document.getElementById("day3").alt;
    let img4 = document.getElementById("day4").alt;
    let img5 = document.getElementById("day5").alt;

    if (img1==img2&&img2==img3&&img3==img4&img4==img5){
       document.getElementById("shadow").style.boxShadow="red 4px 4px 9px "
    }

}




