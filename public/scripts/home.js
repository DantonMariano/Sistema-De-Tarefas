$(document).ready(() => {
  let tarefas = [];
  let pendentesCount = 0;
  $.ajax({
    url: "http://127.0.0.1:8000/api/v1/tarefa",
    context: 'application/json'
  }).done((res) => {
    tarefas = JSON.parse(res);
    tarefas.map((el) => {
      if (el.status === 0) pendentesCount++;
    })
    if (pendentesCount === 1) $('#pending__container').append(`<div class="bg-danger p-4 rounded">Você tem: ${pendentesCount} tarefa pendentes.</div>`).hide().fadeIn(200)
    if (pendentesCount > 1) $('#pending__container').append(`<div class="bg-danger p-4 rounded">Você tem: ${pendentesCount} tarefas pendentes.</div>`).hide().fadeIn(200)
  });
});