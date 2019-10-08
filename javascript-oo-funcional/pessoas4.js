function pessoa(nome) {
    let _nome = nome;

    return {
        nome: _nome,
        fale: () => `oi, eu sou ${_nome}`
    };
}

function empregado(nome, salario) {
    let _salario = salario;
    let e = pessoa(nome);
    e.get_salario = () => _salario;
    e.set_salario = function (novo_salario) {
        if (novo_salario > 5000) {
            console.log(`ops! limite excedido (${novo_salario})`);
            novo_salario = 5000;
        }
        _salario = novo_salario;
    }
    return e;
}

let e1 = empregado("fulano", 3000);
let e2 = empregado("beltrano", 4000);
e1.set_salario(10000);
e1._salario = 10000;
console.log(e1.fale()); // 'oi, eu sou fulano'
console.log(e1.get_salario()); // 3000
console.log(e2.fale()); // 'oi, eu sou beltrano'
console.log(e2.get_salario()); // 4000
