const avatarImage = document.querySelector('#arquivo');
const h2Avatar = document.querySelector('#h2-avatar');

avatarImage.addEventListener('change', event => {
  
  const reader = new FileReader;
  reader.onload = function(event) {
    
    const previewImage = document.createElement('img');
  previewImage.id = 'preview-image';
  previewImage.class = 'teste';
  previewImage.width = 270;
  previewImage.height = 480;
  previewImage.src = event.target.result;
  h2Avatar.insertAdjacentElement('afterend', previewImage);
  }
  reader.readAsDataURL(avatarImage.files[0]);
  

})

function del() {
document.getElementById('preview-image')
.remove();
}
