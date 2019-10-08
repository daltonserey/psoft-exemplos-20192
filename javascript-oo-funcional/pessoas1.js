function pessoa(nome) {
    return {
        nome: nome,
        fale: () => `oi, eu sou ${nome}`
    };
}

let p1 = pessoa("fulano");
let p2 = pessoa("beltrano");

console.log(p1.fale()); // 'oi, eu sou fulano'
console.log(p2.fale()); // 'oi, eu sou beltrano'
