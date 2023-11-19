const avatarImage = document.querySelector('#arquivo');
const h2Avatar = document.querySelector('#h2-avatar');

avatarImage.addEventListener('change', event => {
  
  const reader = new FileReader;
  reader.onload = function(event) {
    
    const previewImage = document.createElement('img');
  previewImage.id = 'preview-image';
  previewImage.src = event.target.result;
  previewImage.width = 270;
  previewImage.height = 480;
  h2Avatar.insertAdjacentElement('afterend', previewImage);
  }
  reader.readAsDataURL(avatarImage.files[0]);
  
  
})
