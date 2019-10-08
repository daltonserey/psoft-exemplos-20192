function pessoa(nome) {
    let _nome = nome;

    return {
        nome: _nome,
        fale: () => `oi, eu sou ${_nome}`
    };
}

let p1 = pessoa("fulano");
let p2 = pessoa("beltrano");

console.log(p1.fale()); // 'oi, eu sou fulano'
console.log(p2.fale()); // 'oi, eu sou beltrano'
