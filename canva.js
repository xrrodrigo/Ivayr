function drawnImage() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d'); 
  const arquivo = document.getElementById('arquivo');

  var img1 = new Image();
  img1.src = URL.createObjectURL(arquivo.files[0]);

  img1.onload = function() {
    context.drawImage(img1, 0, 0, canvas.width, canvas.height);

    img1.onload = null; // Remove the onload handler to avoid memory leaks

    img1.src = '/img/canvaimage.png'; // Reuse the img1 instance for the second image

    img1.onload = function() {
      context.drawImage(img1, 0, 0, canvas.width, canvas.height);
    };
  };
}

window.onload = function() {
  drawnImage();
};
