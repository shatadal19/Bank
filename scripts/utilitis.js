function getInputFieldByValuedId(id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}


function getInputFieldByValuedIdInnertext(id){
    const input = document.getElementById(id).innerText;
    const inputNumber = parseFloat(input);
    return inputNumber;
}