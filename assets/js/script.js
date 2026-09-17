document.addEventListener("DOMContentLoaded", () => {
  const scroll = document.querySelector(".scroll-down");
  scroll?.addEventListener("click", () => document.querySelector(".benefits")?.scrollIntoView({behavior:"smooth"}));

  const cards = document.querySelectorAll(".feature-cards article, .steps article");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("is-hovered"));
    card.addEventListener("mouseleave", () => card.classList.remove("is-hovered"));
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav nav a[href^='#']")];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, {rootMargin:"-35% 0px -55% 0px", threshold:0});
  sections.forEach(s => obs.observe(s));
});
