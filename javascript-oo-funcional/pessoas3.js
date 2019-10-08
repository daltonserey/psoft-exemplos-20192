function pessoa(nome) {
    let _nome = nome;

    return {
        nome: _nome,
        fale: () => `oi, eu sou ${_nome}`
    };
}

function empregado(nome, salario) {
    let novo = pessoa(nome);
    novo.salario = salario;
    return novo;
}

let e1 = empregado("fulano", 3000);
let e2 = empregado("beltrano", 4000);
console.log(e1.fale()); // 'oi, eu sou fulano'
console.log(e1.salario); // 3000
console.log(e2.fale()); // 'oi, eu sou beltrano'
console.log(e2.salario); // 4000
