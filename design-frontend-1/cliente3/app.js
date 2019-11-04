let username;
let $viewer = document.querySelector('#viewer');

(async function main() {
  username = (await fetch_user())["nome"];
  await fetch_templates();

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

window.templates = null;
async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;
  window.template1 = e.querySelector('#view1');
  window.template2 = e.querySelector('#view2');
}

function view1() {
  let $template = window.template1;
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view2);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
}

function view2() {
  let $template = window.template2
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view1);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
  $user.classList.add("warning");
}
