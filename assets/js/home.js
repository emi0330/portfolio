//3秒画像スライド
/* document.addEventListener('DOMContentLoaded', () => {
  const slideImages = document.querySelectorAll('.slides img');
  let current = 0;

  if (slideImages.length === 0) return;

  setInterval(() => {
    slideImages[current].classList.remove('active');
    current = (current + 1) % slideImages.length;
    slideImages[current].classList.add('active');
  }, 3000);
}); */

//3秒画像スライド 2回目
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const gap = 40; // CSSと合わせる

  let index = 0;

  function slide() {
    const slideWidth = images[0].offsetWidth + gap;
    index++;
    slides.style.transform = `translateX(-${slideWidth * index}px)`;

    // ループ処理
    if (index === images.length - 1) {
      setTimeout(() => {
        slides.style.transition = 'none';
        index = 0;
        slides.style.transform = 'translateX(0)';
      }, 1200);

      setTimeout(() => {
        slides.style.transition =
          'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
      }, 1300);
    }
  }

  setInterval(slide, 3000);
});
