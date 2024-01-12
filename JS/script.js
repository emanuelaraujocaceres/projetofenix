document.addEventListener('DOMContentLoaded', function () {
    // Botão Início
    document.getElementById('btnInicio').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Botão Tratamentos
    document.getElementById('btnTratamentos').addEventListener('click', function () {
        window.location.href = 'tratamentos.html';
    });

    // Botão Convênios
    document.getElementById('btnConvenios').addEventListener('click', function () {
        window.location.href = 'convenios.html';
    });

    // Botão Contato
    document.getElementById('btnContato').addEventListener('click', function () {
        window.location.href = 'contato.html';
    });
});

