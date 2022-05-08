class ProductMannager{

    constructor() {
    this._product=[];
    }

    showisProduct(){
        let html=''
        if(this._product.length===0){

            html+='<tr>'
            html+='<td colspan="6">No data<td>'
            html+='</tr>'
        }else{
            for (let i = 0; i <this._product.length ; i++) {
                html+='<tr>'
                html+=`<td>${i+1}</td>`
                html+=`<td>${this._product[i].getName()}</td>`
                html+=`<td>${this._product[i].getPrice()}</td>`
                html+=`<td>${this._product[i].getAuthor()}</td>`
                html+=`<td onclick="deleteProduct(${i})"><button>delete</button></td>`
                html+='</tr>'
            }
        }
        document.getElementById("list-product").innerHTML=html;
    }
    add(name,price,author){
        let product=new Product(name,price,author);
        this._product.push(product);
        this.showisProduct()
        this.clearInput()
    }
    clearInput(){
        document.getElementById("Name").value=''
        document.getElementById("Price").value=''
        document.getElementById("Author").value=''
    }
   destroy(index){
this._product.splice(index,1)
       this.showisProduct();
    }

}