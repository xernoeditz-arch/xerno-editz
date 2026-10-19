const enterButton = document.getElementById("enterButton");
const transitionOverlay = document.getElementById("transitionOverlay");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.3,
    alpha: Math.random(),
    speed: Math.random() * 0.015 + 0.003
  }));
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.alpha += star.speed;

    if (star.alpha > 1 || star.alpha < 0.15) {
      star.speed *= -1;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 190, 220, ${star.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

resizeCanvas();
animateStars();

window.addEventListener("resize", resizeCanvas);

enterButton.addEventListener("click", () => {
  enterButton.disabled = true;
  transitionOverlay.classList.add("active");

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1800);
});