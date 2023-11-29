function drawnImage() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d'); 
  const arquivo = document.getElementById('arquivo');

  var img1 = new Image();
  img1.src = URL.createObjectURL(arquivo.files[0]);

  

  img1.onload = function() {
    context.drawImage(img1, 0, 0, canvas.width, canvas.height);
  };

  var img2 = new Image();
  img2.src = './canvaimage.png';

  img2.onload = function() {
    context.drawImage(img2, 0, 0, canvas.width, canvas.height);
  };
}

drawnImage();
