
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

// MUSIC ON / OFF
musicButton.addEventListener("click", async () => {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      musicButton.textContent = "♫ Music: ON";
    } catch (error) {
      musicButton.textContent = "♫ Add your music first";
    }
  } else {
    music.pause();
    musicPlaying = false;
    musicButton.textContent = "♫ Music: OFF";
  }
});

// START BUTTON
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
});

// OPEN LETTER
const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letterButton");

letterButton.addEventListener("click", () => {
  envelope.classList.toggle("open");

  letterButton.textContent = envelope.classList.contains("open")
    ? "Close your letter ♡"
    : "Tap to open your letter ✉";
});

// GIFT SURPRISE
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", () => {
  giftMessage.classList.toggle("show");

  if (giftMessage.classList.contains("show")) {
    giftButton.textContent = "A little more happiness ♡";
    createConfetti();
  } else {
    giftButton.textContent = "Open your gift ♡";
  }
});

// CONFETTI
function createConfetti() {
  const symbols = ["♡", "✧", "✦", "💜", "✨"];

  for (let i = 0; i < 45; i++) {
    const item = document.createElement("span");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = (12 + Math.random() * 16) + "px";
    item.style.pointerEvents = "none";
    item.style.zIndex = "100";
    item.style.transition = "transform 3s linear, opacity 3s";

    document.body.appendChild(item);

    requestAnimationFrame(() => {
      item.style.transform =
        `translate(${Math.random() * 100 - 50}px, 110vh) rotate(720deg)`;
      item.style.opacity = "0";
    });

    setTimeout(() => {
      item.remove();
    }, 3200);
  }
}

// GENTLE SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp 0.9s ease both";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});
