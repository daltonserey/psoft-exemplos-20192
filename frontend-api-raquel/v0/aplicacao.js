window.disciplinas;
let $disciplinas = document.querySelector("div");
let $nota = document.querySelector("#nota");
let $nome = document.querySelector("#nome");
let $button = document.querySelector("button");
let $mensagem = document.querySelector("#mensagem");

$button.addEventListener('click', function () {
    save();
})

function handler(d) {
    console.log("inicando execução do handler dos dados");
    $disciplinas.innerHTML = '';
    window.disciplinas = d;
    window.disciplinas.forEach((e, i) => {
        let $p = document.createElement("p");
        $disciplinas.appendChild($p);
        $p.innerText = "Disciplina: " + window.disciplinas[i].nome + ", nota: " + window.disciplinas[i].nota;
    });
}

function save() {
    let url = 'https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas';
    let nome = $nome.value;
    let nota = $nota.value;
    fetch(url, {
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
        window.disciplinas.push(d);
        handler(window.disciplinas);
    });
    console.log('Pronto! Já pedi pra criar!');
    $mensagem.innerText = "salvando...";
}
window.save = save;

// passo 1: busca dados na API REST
console.log("inicando execução");
fetch('disciplinas.json')
.then(r => r.json())
.then(handler)

console.log("tchau; script terminado");
