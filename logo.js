let dispositivoAtual = 0;
var icon = document.getElementById('device');
var iconImg = document.getElementById('device-img');
const dispositivos = [
    { img: "device1.png"},
    { img: "device2.png"},
    { img: "device3.png"},
    { img: "device4.png"}
];

function mostrarDispositivo() {
 

    icon.classList.add(dispositivoAtual === 0 ? 'hidden-right' : 'hidden');


    setTimeout(() => {
        icon.innerHTML = `<img src="./src/img/${dispositivos[dispositivoAtual].img}" alt="${dispositivos[dispositivoAtual].cat}">`;

        icon.classList.remove('hidden', 'hidden-right');
    }, 1000); // Match the transition duration in the CSS
}

const interval = setInterval(proximaImg, 8000);

function proximaImg() {
    dispositivoAtual = (dispositivoAtual + 1) % dispositivos.length;
    mostrarDispositivo();
}

function imgAnterior() {
     dispositivoAtual = (dispositivoAtual - 1 + dispositivos.length) % dispositivos.length;
    mostrarDispositivo();
}
