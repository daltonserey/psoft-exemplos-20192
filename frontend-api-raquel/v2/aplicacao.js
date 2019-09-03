let disciplinas = [];
const API = 'https://lab01-projsw-ufcg.herokuapp.com/api';
let $mensagem = document.querySelector("#mensagem");

function fetch_disciplinas(dados) {
    disciplinas = dados;
    console.log("buscando disciplinas na API");
    let $disciplinas = document.querySelector("div");
    $disciplinas.innerHTML = '';
    disciplinas.forEach((e, i) => {
        let $p = document.createElement("p");
        $disciplinas.appendChild($p);
        $p.innerText = "Disciplina: " + disciplinas[i].nome + ", nota: " + disciplinas[i].nota;
    });
    $mensagem.innerText = '
}

function save() {
    let nome = document.querySelector("#nome").value;
    let nota = document.querySelector("#nota").value;
    fetch(API + '/disciplinas', {
      'method': 'POST',
      'body': `{"nome": "${nome}", "nota": ${nota}}`,
      'headers': {'Content-Type': 'application/json'}
    })
    .then(r => r.json())
    .then(d => {
        console.log(d);
        console.log('Pronto! Disciplina criada com sucesso!');
        $mensagem.innerText = 'disciplina salva';
        setTimeout(_ => {
            $mensagem.innerText = '';
        }, 2000);
        disciplinas.push(d);
        fetch_disciplinas(disciplinas);
    });
    $mensagem.innerText = "salvando...";
}

(function init() {
    console.log("inicando execução");
    let $button = document.querySelector("button");
    $button.addEventListener('click', save);
    $mensagem.innerText = 'buscando disciplinas...'
    fetch(API + '/disciplinas')
    .then(r => r.json())
    .then(fetch_disciplinas)
    console.log("tchau; script terminado");
}());
