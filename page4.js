const starsContainer = document.getElementById("stars");

const memoryVideo = document.getElementById("memoryVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");

const photoCards = document.querySelectorAll(".photo-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

const envelopeButton = document.getElementById("envelopeButton");
const letterModal = document.getElementById("letterModal");
const modalClose = document.getElementById("modalClose");

// Stars
for (let i = 0; i < 90; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.setProperty("--duration", (2 + Math.random() * 4) + "s");
  star.style.animationDelay = Math.random() * 4 + "s";

  starsContainer.appendChild(star);
}

// Hide video placeholder when a video is available
memoryVideo.addEventListener("loadeddata", () => {
  videoPlaceholder.style.display = "none";
});

memoryVideo.addEventListener("error", () => {
  videoPlaceholder.style.display = "flex";
});

// Open photos
photoCards.forEach(card => {
  card.addEventListener("click", () => {
    const imagePath = card.dataset.image;
    const image = card.querySelector("img");

    lightboxImage.src = imagePath;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = card.dataset.caption;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Open secret letter
envelopeButton.addEventListener("click", () => {
  envelopeButton.classList.add("opened");

  setTimeout(() => {
    letterModal.classList.add("active");
    letterModal.setAttribute("aria-hidden", "false");
    modalClose.focus();
  }, 450);
});

function closeLetter() {
  letterModal.classList.remove("active");
  letterModal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeLetter);

letterModal.addEventListener("click", event => {
  if (event.target === letterModal) {
    closeLetter();
  }
});

// Keyboard support
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
    closeLetter();
  }
});