function calculate(){
    var a = parseInt(document.querySelector("#v1").value);
    var b = parseInt(document.querySelector("#v2").value);
    var oper = document.querySelector("#operator").value;
    var calculate;

    if(oper == "add"){
        calculate = a + b;
    }
    else
    if (oper == "sub") {
        calculate = a = b;
    }
    else
    if (oper == "mult") {
        calculate = a * b;
    }
    else
    if (oper == "div") {
        calculate = a / b;
    }

    document.querySelector("#result").innerHTML = calculate;

}