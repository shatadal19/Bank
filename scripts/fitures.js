document.getElementById('display-cashout').addEventListener('click', function(){
    // event.preventDefault();
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transecton-his').classList.add('hidden');

})

document.getElementById('display-addomney').addEventListener('click', function(){
    // event.preventDefault();
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transecton-his').classList.add('hidden');

})


document.getElementById('display-Transactions').addEventListener('click', function(){
    // event.preventDefault();
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transecton-his').classList.remove('hidden');

})