document.addEventListener('DOMContentLoaded', function () {
  new Splide('#slider', {
    type: 'loop',
    perPage: 2,
    gap: '1rem',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
  }).mount();
});