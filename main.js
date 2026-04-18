let karakter = "";
let scene = "menu";

function pick(nama){
  karakter = nama;
  saveGame({ karakter });
  loadScene("prologue");
}

function loadScene(nama){
  scene = nama;

  if(nama === "prologue"){
    show(prologue());
  }

  else if(nama === "chapter1"){
    show(chapter1());
  }
}

function show(html){
  document.getElementById("game").innerHTML = html;
}

function next(nextScene){
  loadScene(nextScene);
}
