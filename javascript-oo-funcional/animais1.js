function animal(especie) {
    return {
        especie: especie,
        fale: () => `!?`
    };
}

let a1 = animal('cachorro');
let a2 = animal('gato');
