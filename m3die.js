async function carregarM3DIE() {

  const status = document.getElementById("status");
  const conteudo = document.getElementById("conteudo");

  status.innerText = "Carregando conteúdo M3DIE...";
  conteudo.style.display = "none";

  try {

    const resposta = await fetch("m3die-test.txt");

    if (!resposta.ok) {
      throw new Error("Arquivo m3die-test.txt não encontrado.");
    }

    const texto = await resposta.text();

    conteudo.innerText = texto;
    conteudo.style.display = "block";

    status.innerText = "M3DIE carregado com sucesso!";

  } catch (erro) {

    status.innerText = "Erro ao carregar o M3DIE.";
    conteudo.innerText = erro.message;
    conteudo.style.display = "block";

  }
}
