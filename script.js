window.onload = () => {
  
  function imageGallery() {
    const lightBox = document.querySelector('.lightbox');
    const closeButton = document.querySelector('#close-button');
    const showImage = document.querySelector('#show-image');
    const images = document.querySelectorAll('.image-gallery');
    images.forEach(image => {
      image.addEventListener('click', function(event) {
        /* lightbox */
        lightBox.classList.add('active');
        if (lightBox.classList.contains('active')) closeButton.addEventListener('click', () => lightBox.classList.remove('active'));
        /* end of lightbox */
        
        showImage.setAttribute('src', event.target.src);
      });
    });
  }
  
  imageGallery();
  
}