window.addEventListener("scroll", () => {
  let cards = document.querySelectorAll(".card-reveal");

  for (let i = 0; i < cards.length; i++) {
    let windowHeight = window.innerHeight;
    let cardTop = cards[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if (cardTop < windowHeight - revealpoint) {
      cards[i].classList.add("active");
    } else {
      cards[i].classList.remove("active");
    }
  }
});
