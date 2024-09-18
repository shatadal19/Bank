document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log("logged in");
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber);
    // console.log(pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log("You are log in")
        window.location.href= '/home.html';
    }
    else{
        alert("Wrong Number or pin");
    }
})