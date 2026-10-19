const giftSection = document.getElementById("giftSection");
const giftButton = document.getElementById("giftButton");
const giftInstruction = document.getElementById("giftInstruction");
const replayButton = document.getElementById("replayButton");
const starsContainer = document.getElementById("stars");

let isOpened = false;

// Background stars
for (let i = 0; i < 90; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.setProperty("--duration", (2 + Math.random() * 4) + "s");
  star.style.animationDelay = Math.random() * 4 + "s";

  starsContainer.appendChild(star);
}

// Confetti effect
function createConfetti() {
  const colors = [
    "#ff4f9a",
    "#ffb0d1",
    "#d4b17b",
    "#fff0f7",
    "#a52d5c"
  ];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.setProperty(
      "--fall-time",
      (2.5 + Math.random() * 3) + "s"
    );

    piece.style.setProperty(
      "--drift",
      (Math.random() * 300 - 150) + "px"
    );

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
}

// Floating hearts
function createHearts() {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");

      heart.className = "floating-heart";
      heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (2.5 + Math.random() * 2) + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }, i * 100);
  }
}

// Open gift
function openGift() {
  if (isOpened) return;

  isOpened = true;
  giftSection.classList.add("opened");

  giftButton.setAttribute("aria-label", "Birthday gift opened");
  giftInstruction.textContent = "YOUR LITTLE SURPRISE IS HERE ♡";

  createConfetti();
  createHearts();

  document.getElementById("letter").setAttribute("aria-hidden", "false");
}

giftButton.addEventListener("click", openGift);

// Replay the animation
replayButton.addEventListener("click", () => {
  isOpened = false;

  giftSection.classList.remove("opened");

  document.getElementById("letter").setAttribute("aria-hidden", "true");

  giftInstruction.textContent = "TAP THE GIFT TO OPEN YOUR SURPRISE";

  giftSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});