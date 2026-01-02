const sidebtn = document.getElementById("side");
const mobile = document.getElementById("mobilebaar");

sidebtn.addEventListener("click", (e) => {
  mobile.classList.toggle("show");
});
