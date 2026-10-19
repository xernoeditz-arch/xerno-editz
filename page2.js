const starsContainer = document.getElementById("stars");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalExtra = document.getElementById("modalExtra");

const doorCards = document.querySelectorAll(".door-card");

const doorContent = {
  heart: {
    icon: "♥",
    title: "Words From My Heart",
    text: `Maple, some people make ordinary days feel special just by being themselves.

This little corner is for all the things that are sometimes difficult to put into words.

You deserve kindness, happiness, and countless reasons to smile.

Today is your day, and I hope it reminds you how special you are. ♡`,
    extra: "A little message, just for you. ♥"
  },

  memories: {
    icon: "❀",
    title: "Our Little Memories",
    text: `Every little moment has its own magic.

The silly jokes, the random conversations, the unexpected smiles, and all those tiny things that become precious over time.

This door is for the memories that deserve a place of their own. ♡`,
    extra: "Next, we'll add your favourite photos here!"
  },

  surprise: {
    icon: "♛",
    title: "A Little Surprise",
    text: `Surprise, Maple! 🎀

I made this little universe especially for your birthday.

Every star, every door, and every tiny detail is here to make your day feel a little more magical.

I hope this new year of your life brings you beautiful moments, laughter, and happiness.

Happy Birthday! ♡`,
    extra: "Your special day deserves a little extra magic ✨"
  }
};

doorCards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("opening")) return;

    const content = doorContent[card.dataset.door];

    card.classList.add("opening");
        if (card.dataset.door === "surprise") {
      window.location.href = "page3.html";
      return;
    }
    

    setTimeout(() => {
      modalIcon.textContent = content.icon;
      modalTitle.textContent = content.title;
      modalText.textContent = content.text;
      modalExtra.textContent = content.extra;

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");

      card.classList.remove("opening");
      closeModal.focus();
    }, 550);
  });
});


function hideModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    hideModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideModal();
  }
});

// Small floating stars
for (let i = 0; i < 50; i++) {
  const star = document.createElement("span");

  star.style.position = "absolute";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.borderRadius = "50%";
  star.style.background = "#ffb8d8";
  star.style.opacity = Math.random() * 0.7 + 0.2;
  star.style.pointerEvents = "none";

  starsContainer.appendChild(star);
}