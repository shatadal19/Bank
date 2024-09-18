document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add')
    const cashOut = document.getElementById('cash-out').value;
    // console.log(addMoney);

    const cashOutPin = document.getElementById('cashout-p').value;
    // console.log(pinNumber);
    if(cashOutPin === '1234'){
        // console.log("Adding money tuuutuuutuuu")
        const reblance = document.getElementById('a-blance').innerText;
        // console.log(blance);

        const cashOutNumber = parseFloat(cashOut);
        const reblanceNumber = parseFloat(reblance);
        const newBlance = reblanceNumber - cashOutNumber;
        console.log(newBlance);
        document.getElementById('a-blance').innerText =newBlance;
    }
    else{
        console.log("Try again")
    }
})