document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add')
    const addMoney = document.getElementById('add-m').value;
    // console.log(addMoney);

    const pinNumber = document.getElementById('add-p').value;
    // console.log(pinNumber);
    if(pinNumber === '1234'){
        // console.log("Adding money tuuutuuutuuu")
        const blance = document.getElementById('a-blance').innerText;
        // console.log(blance);

        const addMoneNumber = parseFloat(addMoney);
        const blanceNumber = parseFloat(blance);
        const newBlance = addMoneNumber + blanceNumber;
        console.log(newBlance);
        document.getElementById('a-blance').innerText =newBlance;
    }
    else{
        console.log("Try again")
    }
})