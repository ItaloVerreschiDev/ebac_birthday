AOS.init();

const dataDoEvento = new Date("May 14, 2025 19:00:00");
const timeStapmDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStapmDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaEvento % (1000 * 60)) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaEvento < 0 ) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Já foi'
    }
}, 1000);   