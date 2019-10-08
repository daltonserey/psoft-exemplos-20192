function animal(especie) {
    return {
        especie: especie,
        fale: () => `!?`
    };
}

function cachorro(nome) {
    let este = animal("cachorro");
    let _nome = nome;
    este.nome = _nome;
    este.fale = () => `au (${_nome})`;
    return este;
}

let a1 = cachorro('bowser');
a1.nome = 'outro';
console.log(a1.fale());
console.log(a1.especie);
