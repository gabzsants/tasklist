var colors = ['#0000FF', '#FF1493', '#DC143C', '#FF8C00', '#7B68EE', '#32CD32', '#A020F0', '#FFD700'];

  document.getElementById('Formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var tituloTarefa = document.getElementById('tituloTarefa').value;
    var descricaoTarefa = document.getElementById('descricaoTarefa').value;

    var sticky = document.createElement('div');
    sticky.className = 'sticky';
    sticky.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sticky.innerHTML = '<h4>' + tituloTarefa + '</h4><p>' + descricaoTarefa + '</p>' +
      '<button class="botao-editar" onclick="editTask(this)">Editar</button>' +
      '<button class="botao-remover" onclick="removeTask(this)">Remover</button>l' + 
      '<button class="botao-concluir" onclick="completeTask(this)">Marcar como Concluída</button>';

    document.getElementById('tarefasAndamento').appendChild(sticky);

    document.getElementById('tituloTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
  });

  function completeTask(button) {
    var sticky = button.parentNode;
    document.getElementById('tarefasCompletas').appendChild(sticky);
    button.remove();
  }

  function removeTask(button) {
    var sticky = button.parentNode;
    sticky.remove();
  }

  function editTask(button) {
    var sticky = button.parentNode;

    var titulo = sticky.querySelector('h4').innerText;
    var descricao = sticky.querySelector('p').innerText;

    document.getElementById('tituloTarefa').value = titulo;
    document.getElementById('descricaoTarefa').value = descricao;

    sticky.remove();
  }
