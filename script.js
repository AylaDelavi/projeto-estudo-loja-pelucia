const imagens = [
    "./images/Encontre seu novo.png",
    "./images/banner1.png",
    "./images/banner2.png",
  ];

  let index = 0;

  function criarImagem(src, classeExtra = "") {
    const div = document.createElement("div");
    div.classList.add("carrossel-imagem");
    if (classeExtra) div.classList.add(classeExtra);

    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img);

    return div;
  }

  function atualizarCarrossel() {
    const carrossel = document.querySelector(".carrossel");
    carrossel.innerHTML = "";

    const anterior = imagens[(index - 1 + imagens.length) % imagens.length];
    const atual = imagens[index % imagens.length];
    const proximo = imagens[(index + 1) % imagens.length];

    carrossel.appendChild(criarImagem(anterior, "esquerda"));
    carrossel.appendChild(criarImagem(atual, "destaque"));
    carrossel.appendChild(criarImagem(proximo, "direita"));
  }

  function proximaImagem() {
    index = (index + 1) % imagens.length;
    atualizarCarrossel();
  }

  atualizarCarrossel();
  setInterval(proximaImagem, 5000);