function desenharImagens() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d'); 
  const arquivo = document.getElementById('arquivo');

  
  var img1 = new Image();
  img1.src = URL.createObjectURL(arquivo.files[0]);

  // Carregar a segunda imagem
  var img2 = new Image();
  img2.src = 'https://cdn.discordapp.com/attachments/737677070414643252/1176733219660509274/canvaimage.png?ex=656ff136&is=655d7c36&hm=5ccc2c06b571768f85ed04385fa1b086a0ac86e71167af0925f29e84b2383054&';
  
  // Esperar as imagens serem carregadas
  img1.onload = function() {
    // Desenhar a primeira imagem no canvas
    context.drawImage(img1, 0, 0, canvas.width, canvas.height);
    
    img2.onload = function() {
      // Desenhar a segunda imagem no canvas
      context.drawImage(img2, 0, 0, canvas.width, canvas.height);
    };
  };
}
desenharImagens();
