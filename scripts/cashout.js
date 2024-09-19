document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldByValuedId('cash-out');
    const cashOutPin =getInputFieldByValuedId('cashout-p');
    if(cashOutPin === 1234){
        const reblance = getInputFieldByValuedIdInnertext('a-blance');
        const newBlance = reblance - cashOut;
        document.getElementById('a-blance').innerText =newBlance;
    }
    else{
        console.log("Try again")
    }
})