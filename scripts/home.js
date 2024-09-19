document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault();
    
    

    const addMoney = getInputFieldByValuedId('add-m');
    const pinNumber =getInputFieldByValuedId('add-p');


    if(pinNumber === 1234){
        const blance = getInputFieldByValuedIdInnertext('a-blance');
        const newBlance = addMoney + blance;
        document.getElementById('a-blance').innerText =newBlance;
    }
    else{
        console.log("Try again")
    }
    
})

console.log("hey");