function submitForm(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const dui = document.getElementById('dui').value;
    const form = document.querySelector('form');
    form.submit();
    startLoading();
}

function startLoading() {
    document.getElementById("loading-screen").classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "../HomePage/Home.html";
    }, 3000);
  }

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const dui = document.getElementById('dui').value;
    const form = document.querySelector('form');
    form.submit();
    startLoading();
});     