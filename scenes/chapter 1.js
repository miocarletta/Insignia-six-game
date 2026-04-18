function chapter1(){

  let p = puzzles[karakter] || puzzles.default;

  return `
  <p>${p.q}</p>
  <input id="jawaban">
  <button onclick="cekJawaban()">Submit</button>
  `;
}

function cekJawaban(){
  let j = document.getElementById("jawaban").value;
  let p = puzzles[karakter] || puzzles.default;

  if(karakter === "Al"){
    if(j !== "benar"){
      alert("Kamu lolos 😏");
      nextScene();
    } else {
      alert("Kamu kena jebakan!");
    }
  }
  else{
    if(j == p.a){
      alert("Benar!");
      nextScene();
    } else {
      alert("Salah...");
    }
  }
}

function nextScene(){
  document.getElementById("game").innerHTML = `
  <p>Kamu bertemu seseorang...</p>
  <p>"Kamu juga sadar?"</p>
  <button onclick="escapeScene()">Lanjut</button>
  `;
}

function escapeScene(){
  document.getElementById("game").innerHTML = `
  <p>🚨 Alarm berbunyi!</p>
  <p>Ilmuwan mengejarmu...</p>
  <button onclick="ending()">Lari!</button>
  `;
}

function ending(){
  document.getElementById("game").innerHTML = `
  <h2>ENDING</h2>
  <p>Kamu berhasil kabur... untuk sekarang.</p>
  `;
}
