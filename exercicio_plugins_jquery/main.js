$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Campo obrigatório!',
            email: 'Campo obrigatório!',
            telefone: 'Campo obrigatório!',
            cpf: 'Campo obrigatório!',
            endereco: 'Campo obrigatório!',
            cep: 'Campo obrigatório!',
        },
        submitHandler: function(form){
            form.submit();
            alert('Formulário Enviado! Obrigado.');
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Por favor, preecha todos os campos!')
            }
        }
    })


})