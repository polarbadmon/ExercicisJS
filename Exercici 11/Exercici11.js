function palindrom(text) {
    const net = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertit = net.split('').reverse().join('');
    return net === invertit;
}

const resultat = palindrom("la ruta natural"); //Escriure palindrom aquí
document.write(resultat);