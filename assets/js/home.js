//---------------------
//スクロール時のアニメーション
//---------------------
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 一度だけ実行
      }
    });
  });

  targets.forEach(target => observer.observe(target));
});
