const form = document.getElementById('formPesquisa');
const msg = document.getElementById('mensagem');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const dados = {
    nome: form.nome.value.trim(),
    patente: form.patente.value,
    idade: parseInt(form.idade.value),
    atividade: form.atividade.value,
    tempoServico: parseInt(form.tempoServico.value)
  };

  console.log("Tentando enviar os dados:", dados);
  msg.textContent = "Enviando...";

  try {
    const resposta = await fetch("https://talhetti.app.n8n.cloud/webhook/dados", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    console.log("Resposta do servidor:", resposta);

    if (resposta.ok) {
      msg.textContent = "Resposta enviada ✅";
      form.reset();
    } else {
      const erroTexto = await resposta.text();
      console.error("Erro do servidor:", resposta.status, erroTexto);
      msg.textContent = `Resposta não enviada ❌ (${resposta.status})`;
    }
  } catch (erro) {
    console.error("Erro ao enviar a requisição:", erro);
    msg.textContent = "Resposta não enviada ❌ (erro de rede ou CORS)";
  }
});
