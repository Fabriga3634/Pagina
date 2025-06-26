document.getElementById("abrirBtn").addEventListener("click", function () {
  const sobre = document.getElementById("sobre");
  const cartaContainer = document.getElementById("cartaContainer");
  const fraseContainer = document.getElementById("fraseContainer");
  const frase = document.querySelector(".frase");
  const contador = document.querySelector(".contador");
  const sonido = document.getElementById("sonidoPapel");

  sobre.classList.add("abierto");
  sonido.play();
  setTimeout(() => {
    cartaContainer.style.display = "none";
    fraseContainer.classList.remove("oculto");
    fraseContainer.style.display = "flex";
    fraseContainer.style.opacity = "1";
    frase.style.opacity = "1";
    contador.style.opacity = "1";

    escribirFrase(`Tu compañía es algo que valoro más que nada en este mundo. Aprecio cada instante que paso contigo y disfruto muchísimo el tiempo que compartimos. Me haces feliz con tu sola presencia, y alegras mis días sin importar lo que haya pasado.

Te agradezco de corazón por estar siempre, por tenerme en cuenta y por tu forma de ser tan especial. En tu día quiero desearte toda la felicidad que te merecés, y espero algún día poder retribuirte con la misma luz y alegría que vos trajiste a mi vida, muchas veces sin darte cuenta.

(Gracias por quedarte a mi lado. ¡Feliz cumpleaños!) 🎉💖`, frase);
    iniciarContador();
  }, 1500);
});

function escribirFrase(texto, elemento, velocidad = 50) {
  let i = 0;
  elemento.textContent = "";
  const intervalo = setInterval(() => {
    elemento.textContent += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, velocidad);
}

function iniciarContador() {
  let segundos = 90;
  const contador = document.querySelector(".contador");
  const frase = document.querySelector(".frase");

  const intervalo = setInterval(() => {
    segundos--;
    contador.textContent = `00:${segundos < 90 ? "0" + segundos : segundos}`;

    // Últimos 5 segundos animación
    if (segundos <= 5) {
      contador.classList.add("temblor");
    }

    if (segundos <= 0) {
      clearInterval(intervalo);
      frase.style.opacity = 0;
      contador.style.opacity = 0;

      setTimeout(() => {
        document.getElementById("fraseContainer").style.display = "none";
        const torta = document.getElementById("tortaContainer");
        torta.classList.remove("oculto");

        setTimeout(() => {
          torta.classList.add("oculto");
          document.getElementById("contenidoFinal").classList.remove("oculto");
          anim(); // fuegos artificiales
        }, 5000);
      }, 1000);
    }
  }, 1000);
}
