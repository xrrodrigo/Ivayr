function whatsapp() {

document.getElementById("options").style.display = "none";

const div = document.getElementById("canva");
const canvas = document.createElement("canvas");
canvas.width = "500";
canvas.height = "500";


const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0,0,500,500);


div.appendChild(canvas);
}










function instagram() {

  document.getElementById("options").style.display = "none";
   
  const cinput = document.createElement("input");
  cinput.placeholder = "Preencha com seu nome";
  cinput.name = "name";
  cinput.id = "name";

  const submit = document.createElement("input");
  submit.className = "submitInput";
  submit.type = "submit";
  submit.onclick = drawText;
  
  const div = document.getElementById("canva");
  const divMenu = document.getElementById("menu");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = "./ivayrcard.jpg";
  canvas.width = "320";
  canvas.height = "320";
  const tamanho1 = canvas.width.toString();
  const tamanho2 = canvas.height.toString();
  canvas.title = tamanho1 + " x " + tamanho2;
  
  img.onload = function () {
  ctx.drawImage(img, 0, 0, 320, 320);

  }

  function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, 320, 320);

  const getName = document.getElementById("name").value;

  ctx.fillStyle = "#008037";

  if (getName.length <= 9) {
  ctx.font = "600 italic 65px Fira Sans";
  ctx.fillText(getName, 14, 112);
  } else {
  ctx.font = "600 italic 50px Fira Sans";
  ctx.fillText(getName, 14, 110);
  }

}




const dowBtn = document.createElement("a");
dowBtn.className = "downloadBtn";
dowBtn.innerText = "Baixar imagem";
dowBtn.href = "";
dowBtn.onclick = downloadCanvas;

function downloadCanvas() {
const imgData = canvas.toDataURL("image/url");

dowBtn.href = imgData;
dowBtn.download = "ivayrcard.jpg";
dowBtn.click();

}

div.appendChild(canvas);
divMenu.appendChild(cinput);
divMenu.appendChild(submit);
divMenu.appendChild(dowBtn);
}







function custom() {
const largura = document.getElementById("inputI");
const altura = document.getElementById("inputII");
const lvalue = parseInt(largura.value);
const avalue = parseInt(altura.value);

if (lvalue >= 10 && avalue >= 10) {
document.getElementById("options").style.display = "none";
  
const div = document.getElementById("canva");
const canvas = document.createElement("canvas");
canvas.width = lvalue;
canvas.height = avalue;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "#000";
ctx.fillRect(0,0,lvalue,avalue);


div.appendChild(canvas);
} else {
document.getElementById("error").style.display = "flex";
}
}

function alert() {
  document.getElementById("error").style.display = "none";
}

