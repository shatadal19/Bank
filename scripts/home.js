document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault();
    
    

    const addMoney = getInputFieldByValuedId('add-m');
    const pinNumber =getInputFieldByValuedId('add-p');

    if(isNaN(addMoney)){
        alert('Failed To add Money');
        return;
    }

    if(pinNumber === 1234){
        const blance = getInputFieldByValuedIdInnertext('a-blance');
        const newBlance = addMoney + blance;
        document.getElementById('a-blance').innerText =newBlance;

        const p =document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBlance}`;
        console.log(p);
        document.getElementById('insersion-tran').appendChild(p);
    }
    else{
        console.log("Try again")
    }
    
})

console.log("hey");