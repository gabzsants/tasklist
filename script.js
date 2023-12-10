var colors = ['#0000FF', '#FF1493', '#DC143C', '#FF8C00', '#7B68EE', '#32CD32', '#A020F0', '#FFD700'];

document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var tituloTarefa = document.getElementById('tituloTarefa').value;
    var descricaoTarefa = document.getElementById('descricaoTarefa').value;

    var sticky = document.createElement('div');
    sticky.className = 'sticky';
    sticky.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sticky.innerHTML = '<h4>' + tituloTarefa + '</h4><p>' + descricaoTarefa + '</p><button class="botao-concluir" onclick="completeTask(this)">Marcar como Concluída</button>';

    document.getElementById('tarefasAndamento').appendChild(sticky);
});

function completeTask(button) {
    var sticky = button.parentNode;
    document.getElementById('tarefasCompletas').appendChild(sticky);
    button.remove();
}



