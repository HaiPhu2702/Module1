let productMannager=new ProductMannager();

function save(){
    //b1:lay gia tri 3 o inpu
let Name =document.getElementById("Name").value;
let Price =document.getElementById("Price").value;
let Author =document.getElementById("Author").value;
productMannager.add(Name,Price,Author)
}

function deleteProduct(index){

    if(confirm("sure")){
        productMannager.destroy(index)
    }
}

