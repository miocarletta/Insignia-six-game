function saveGame(data){
  localStorage.setItem("insignia_save", JSON.stringify(data));
}

function loadGame(){
  return JSON.parse(localStorage.getItem("insignia_save"));
}
