window.onload = () => {
  
  const lightbox = document.querySelector('.lightbox');
  const imageLightbox = document.querySelector('.image-lightbox');
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    image.addEventListener('click', function() {
      // tambahkan class "active" pada element lightbox
      lightbox.classList.add('active');
      // isi atribut "src" pada gambar yang ditekan
      const value = this.src;
      /*
        set isi atribut "src" pada gambar yang ditekan
        kepada element imageLightbox
      */
      imageLightbox.src = value;
    });
  });
  
  const closeButton = document.querySelector('.btn-close');
  closeButton.addEventListener('click', () => {
    // hapus class "active" pada element lightbox
    lightbox.classList.remove('active');
  })
  
}