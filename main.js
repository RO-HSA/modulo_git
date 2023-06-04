$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa');

        $(`<li>${nomeTarefa.val()}</li>`).appendTo('ul');
        $(nomeTarefa).val('');
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    })
})