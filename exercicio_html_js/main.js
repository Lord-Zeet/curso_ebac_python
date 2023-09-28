const form = document.getElementById('form-valores');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

form.addEventListener('submit', function(e){
    e.preventDefault();

    
    if (campoA.value > campoB.value){
        const MensagemSucesso = document.querySelector('.success-message');
        MensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    }
    else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoA.addEventListener('keyup', function(e){
    console.log(e.target.value);

    if (campoA.value <= campoB.value) {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }

    else{
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})