document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldByValuedId('cash-out');
    const cashOutPin =getInputFieldByValuedId('cashout-p');
    if(isNaN(cashOut)){
        alert('Failed To add Money');
        return;
    }
    if(cashOutPin === 1234){
        const reblance = getInputFieldByValuedIdInnertext('a-blance');
        if(cashOut>reblance){
            alert('You Do not have enough money');
            return;
        }
        const newBlance = reblance - cashOut;
        document.getElementById('a-blance').innerText =newBlance;
        const p =document.createElement('p');
        p.innerText = `Cash Out: ${cashOut} Tk. New Balance: ${newBlance}`;
        console.log(p);
        document.getElementById('insersion-tran').appendChild(p);
    }
    else{
        console.log("Try again")
    }
})