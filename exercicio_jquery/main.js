$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        console.log(nomeTarefa)
        const novoItem = $('<li class="tarefa-listada"></li>');
        $(`<p>${nomeTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    })
})