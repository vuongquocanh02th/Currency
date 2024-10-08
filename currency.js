
function convert(){
    let Amount=document.getElementById("amount").value;
    let From=document.getElementById("from").value;
    let To=document.getElementById("to").value;
    let Result;

    if(From=="USD" && To=="VND"){
        Result="Result: " + (Amount * 23000) + "VND"
    }
    else if(From=="VND" && To=="USD"){
        Result="Result: " + (Amount / 23000) + "USD"
    }

    document.getElementById("result").innerHTML = Result;
}