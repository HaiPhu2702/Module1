document.getElementById("+").addEventListener("click",function_cong);
function function_cong() {
   let value1=document.getElementById("1").value;
   let value2=document.getElementById("2").value;
   if(value1 && value2 == toString())
   {
      confirm("nhập sai");
   }
   let cong=parseFloat(value1)+parseFloat(value2);
   document.getElementById("kq").innerHTML=cong;
}

document.getElementById("-").addEventListener("click",function_tru);
function function_tru() {
   let value1=document.getElementById("1").value;
   let value2=document.getElementById("2").value;
   let tru=parseFloat(value1)-parseFloat(value2);
   document.getElementById("kq").innerHTML=tru;
}

document.getElementById("*").addEventListener("click",function_nhan);
function function_nhan() {
   let value1=document.getElementById("1").value;
   let value2=document.getElementById("2").value;
   let nhan=parseFloat(value1)*parseFloat(value2);
   document.getElementById("kq").innerHTML= nhan;
}

document.getElementById("/").addEventListener("click",function_chia);
function function_chia() {
   let value1=document.getElementById("1").value;
   let value2=document.getElementById("2").value;
   let chia=parseFloat(value1)/parseFloat(value2)
   document.getElementById("kq").innerHTML=chia;
}

