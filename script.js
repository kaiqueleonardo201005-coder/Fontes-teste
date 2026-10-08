function iniciarCartasOrbitando() {
    const animacao = document.querySelector('.animacao8');

    if (!animacao) return;

    const texto = animacao.querySelector('.texto-carta');
    const cartas = animacao.querySelectorAll('.carta');

    if (!texto || cartas.length !== 4) return;

    let largura = 0;
    let altura = 0;

    function calcularOrbita() {
        const tamanho = texto.getBoundingClientRect();

        largura = tamanho.width;
        altura = tamanho.height;
    }

    calcularOrbita();

    window.addEventListener('resize', calcularOrbita);

    const velocidade = 0.0015;

    function animar(tempo) {

        const raioX = largura / 2 + 45;
        const raioY = altura / 2 + 45;

        cartas.forEach((carta, indice) => {

            const angulo =
                tempo * velocidade +
                (Math.PI * 2 / 4) * indice;

            const x = Math.cos(angulo) * raioX;
            const y = Math.sin(angulo) * raioY;

            carta.style.transform =
                `translate(${x}px, ${y}px)`;
        });

        requestAnimationFrame(animar);
    }

    requestAnimationFrame(animar);
}

document.addEventListener('DOMContentLoaded', iniciarCartasOrbitando);