// variables
const login = document.querySelectorAll(".btn-login");
const register = document.querySelectorAll(".btn-register");
const logo = document.querySelector("#box1");
const loginForm = document.querySelector("#box2");
const registerForm = document.querySelector("#box3");
// events
login.forEach((i) => i.addEventListener("click", fadeLogin));
register.forEach((i) => i.addEventListener("click", fadeRegister));
// functions
function fadeLogin() {
  fadeOut();
  login.forEach((i) => i.setAttribute("disabled", ""));
  loginForm.classList.add("fadeIn");
  if (registerForm.classList.contains("fadeIn")) {
    registerForm.classList.add("fadeOut2");
    setTimeout(() => {
      registerForm.classList.remove("fadeIn", "fadeOut2");
      register.forEach((i) => i.removeAttribute("disabled"));
    }, 2000);
  }
}
function fadeRegister() {
  fadeOut();
  register.forEach((i) => i.setAttribute("disabled", ""));
  registerForm.classList.add("fadeIn");
  if (loginForm.classList.contains("fadeIn")) {
    loginForm.classList.add("fadeOut");
    setTimeout(() => {
      loginForm.classList.remove("fadeIn", "fadeOut");
      login.forEach((i) => i.removeAttribute("disabled"));
    }, 2000);
  }
}
function fadeOut() {
  logo.classList.add("fadeOut");
}
