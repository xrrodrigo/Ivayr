function callShare() {
    const data = {
        title: 'Gere fotos personalizadas de apoio ao ivayr soalheiro',
        text: 'Compartilhe sua foto personalizada para engajar',
        url: 'https://xrrodrigo.github.io/Ivayr/'
    }
    
    if(navigator.canShare && navigator.canShare(data)){
        navigator.share(data);
    }else{}
}

function closeBtn() {
    const closeButton = document.getElementById("popup");
    closeButton.style.display = "none";
 }
 
