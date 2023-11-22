function download() {
  const canvas = document.getElementById("canvas");
  const imgData = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imgData;
  link.download = "minha-imagem.png";
  link.click();

}