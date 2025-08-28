function startLoading() {
    document.getElementById("loading-screen").classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "../HomePage/Home.html";
    }, 3000);
  }

function submitForm() {
const button = document.getElementById("button");
  button.disabled = true;
  button.innerHTML = "Loading...";
  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = "Entrar";
  }, 2000);
  const form = document.querySelector('form');
  form.submit();
  startLoading();
}
