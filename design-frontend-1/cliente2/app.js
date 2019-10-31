let username;
let $viewer = document.querySelector('#viewer');

(async function main() {
  username = (await fetch_user())["nome"];

  // roteamento
  let hash = location.hash;
  if (["", "#view1"].includes(hash)) {
    view1();
  } else if (["#view2"].includes(hash)) {
    view2();
  }
}());

async function fetch_user() {
  let data = await (fetch('api/nome').then(r => r.json()));
  return data;
}

function view1() {
  let $template = document.querySelector('#view1');
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view2);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
}

function view2() {
  let $template = document.querySelector('#view2');
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view1);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
  $user.classList.add("warning");
}
