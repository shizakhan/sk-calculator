function getNumber(x) {
    var result = document.getElementById("input")
    result.value += x;
}

function clearbtn(){
    var result = document.getElementById("input")
    result.value = "";
}

function finalResult(){
    var result = document.getElementById("input")
    result.value = eval(result.value)
}