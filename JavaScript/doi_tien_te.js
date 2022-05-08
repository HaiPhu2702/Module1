let a=document.getElementById("input_value")
a.addEventListener("click",ham_doi_tien)

function ham_doi_tien() {

    let input = document.getElementById("Amount").value;
parseInt(input);
    let A1 = document.getElementById("FromCurrency").value;
parseInt(A1);
    let A2 = document.getElementById("ToCurrency").value;
parseInt(A2);
    let result = (input * A2) / A1;
    document.getElementById("result").innerHTML=result;
}

