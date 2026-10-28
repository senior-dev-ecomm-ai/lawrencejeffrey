document.addEventListener("DOMContentLoaded", () => {
  window.lightbox = new PhotoSwipeLightbox({
    gallery: ".pi-product__gallery-photoswipe-slider",
    children: ".pi-product__gallery-photoswipe-slide",
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe,
  });
  window.lightbox.init();
});
