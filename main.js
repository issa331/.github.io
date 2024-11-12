document.addEventListener("DOMContentLoaded", function() {
  alert("Bienvenue sur notre site !");
});
document.addEventListener("DOMContentLoaded", function() {
  const services = document.querySelectorAll(".service");
  
  // Fonction pour faire apparaître chaque service progressivement
  function showService(service) {
    service.style.opacity = 1;
    service.style.transform = "translateY(0)";
  }
  
  // Observer chaque section pour l'animer en défilement
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showService(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  services.forEach(service => {
    service.style.opacity = 0;
    service.style.transform = "translateY(50px)";
    observer.observe(service);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Menu fixe au défilement
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
});