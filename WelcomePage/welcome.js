

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark", "bg-gray-900", "text-gray-100");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-gray-100");


  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



function startLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "choose-signup.html";
  }, 3000);
}


=======

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark", "bg-gray-900", "text-gray-100");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-gray-100");


  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



function startLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "choose-signup.html";
  }, 3000);
}
