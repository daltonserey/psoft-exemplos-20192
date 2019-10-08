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
    Object.defineProperty(e, 'salario', {
        get: () => _salario,
        set: function (novo_salario) {
            if (novo_salario > 5000) {
                console.log(`ops! limite excedido (${novo_salario})`);
                novo_salario = 5000;
            }
            _salario = novo_salario;
        }
    });
    return e;
}

function estagiario(nome, bolsa) {
    let e = pessoa(nome);
    e.bolsa = bolsa;
    e.fale = () => `oi, eu sou o estagiário ${e.nome}`;
    return e;
}

let p1 = pessoa("dalton");
let e1 = empregado("fulano", 3000);
let e2 = empregado("beltrano", 4000);
let e3 = estagiario("sicrano", 1000);
let pessoas = [p1, e1, e2, e3];

pessoas.forEach(p => {
    console.log(p.fale());
});
