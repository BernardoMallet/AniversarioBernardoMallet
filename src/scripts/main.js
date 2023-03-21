AOS.init();

const dataDoEvento = new Date("Feb 28, 2024 13:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMS = 1000 * 60 * 60 * 24 ;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOEvento} Dias ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras); 
        document.getElementById('hero-text').innerHTML = 'Evento expirado, até o ano que vem! =)';
    }

}, 1000);