let imageCount = 0; // Contador para as imagens

function download(event) {
    event.preventDefault();
  
    canvas.toBlob(
        blob => {
            const anchor = window.document.createElement('a');
            anchor.href = window.URL.createObjectURL(blob);
            anchor.download = 'ivayr.jpg';
            anchor.click();
            window.URL.revokeObjectURL(anchor.href);
            
            
        },
        'image/jpeg',
        1.0,
    );

   // location.reload()
}
