const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark", "bg-gray-900", "text-gray-100");
}


darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-gray-100");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  darkModeToggle.textContent = body.classList.contains("dark") ? "Clear Mode" : "Dark Mode";
});

// Navbar active color
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("text-amber-400"));
    link.classList.add("text-amber-400");
  });
});


const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Loading screen
function startLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "../Directory/choose-signup.html";
  }, 3000);
}
