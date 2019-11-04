let username;
let $viewer = document.querySelector('#viewer');

(async function main() {
  let data = await Promise.all([fetch_user(), fetch_templates()]);
  username = data[0]['nome'];

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

let template1, template2;
async function fetch_templates() {
  let html_templates = await (fetch('templates.html').then(r => r.text()));
  let e = document.createElement("div");
  e.innerHTML = html_templates;
  template1 = e.querySelector('#view1');
  template2 = e.querySelector('#view2');
}

function view1() {
  let $template = template1;
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view2);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
}

function view2() {
  let $template = template2
  $viewer.innerHTML = $template.innerHTML;

  let $a = document.querySelector('a');
  $a.addEventListener('click', view1);
  
  let $user = document.querySelector('#user');
  $user.innerText = username;
  $user.classList.add("warning");
}
