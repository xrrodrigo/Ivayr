function whatsapp() {

document.getElementById("options").style.visibility = "hidden";

const div = document.getElementById("canva");
const canvas = document.createElement("canvas");
canvas.width = "500";
canvas.height = "500";

const ctx = canvas.getContext('2d');
ctx.fillStyle = "#000";
ctx.fillRect(0,0,500,500);


div.appendChild(canvas);
}

function instagram() {

  document.getElementById("options").style.visibility = "hidden";
  
  const div = document.getElementById("canva");
  const canvas = document.createElement("canvas");
  canvas.width = "320";
  canvas.height = "320";
  
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,320,320);
  
  
  div.appendChild(canvas);
  }

  function custom() {
 const largura = document.getElementById("inputI");
 const altura = document.getElementById("inputII");
 const lvalue = parseInt(largura.value);
 const avalue = parseInt(altura.value);

if (lvalue && avalue >= 10) {
  document.getElementById("options").style.visibility = "hidden";
  
 const div = document.getElementById("canva");
 const canvas = document.createElement("canvas");
 canvas.width = lvalue;
 canvas.height = avalue;
 
 const ctx = canvas.getContext('2d');
 ctx.fillStyle = "#000";
 ctx.fillRect(0,0,lvalue,avalue);


div.appendChild(canvas);
} else {
  alert("a caixa está muito pequena");
  // Trocar alert por um poppup de erro
}
}