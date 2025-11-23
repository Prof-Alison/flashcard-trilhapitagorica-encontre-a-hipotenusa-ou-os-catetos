function criaCartao(imgFrente, imgVerso, imgResposta, index) {

  const container = document.getElementById('container');
  const cartao = document.createElement('article');
  cartao.className = "cartao rot0"; // começa mostrando a frente

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <div class="cartao__face cartao__frente">
        <img src="${imgFrente}">
      </div>
      <div class="cartao__face cartao__verso">
        <img src="${imgVerso}">
      </div>
      <div class="cartao__face cartao__resposta">
        <img src="${imgResposta}">
      </div>
    </div>
  `;

  let estado = 0;
  // 0 = frente
  // 1 = fullscreen
  // 2 = pergunta
  // 3 = resposta

  cartao.addEventListener("click", () => {

    if (estado === 0) {
      // entra no fullscreen ainda mostrando a frente
      cartao.classList.add("fullscreen");
      estado = 1;
      return;
    }

    if (estado === 1) {
      // vira para a pergunta
      cartao.classList.remove("rot0");
      cartao.classList.add("rot120");
      estado = 2;
      return;
    }

    if (estado === 2) {
      // vira para a resposta
      cartao.classList.remove("rot120");
      cartao.classList.add("rot240");
      estado = 3;
      return;
    }

    if (estado === 3) {
      // volta para a frente e sai do fullscreen
      cartao.classList.remove("rot240");
      cartao.classList.add("rot0");

      setTimeout(() => cartao.classList.remove("fullscreen"), 300);

      estado = 0;
      return;
    }

  });

  container.appendChild(cartao);
}
