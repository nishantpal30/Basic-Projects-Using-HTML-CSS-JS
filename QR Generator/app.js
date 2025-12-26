const inp = document.getElementById("urlforqr");
const generate = document.getElementById("generateBtn");
const down = document.getElementById("dwn");
const imgid = document.getElementById("image");
const cls = document.getElementById("close");
const popup = document.getElementById("qrget");
const opa = document.getElementById("main-container");

const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

generate.addEventListener("click", () => {
  if (!inp.value) {
    alert(`Enter Text Or URL!`);
  } else {
    const mainurl = url + inp.value;
    imgid.setAttribute("src", mainurl);
    setTimeout(() => {
      popup.classList.add("show");
      opa.classList.add("light");
    }, 1000);
  }
});

down.addEventListener("click", () => {
  const imgUrl = url + inp.value;
  fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr.jpg";
      link.click();
    });
});

cls.addEventListener("click", () => {
  popup.classList.remove("show");
 opa.classList.remove("light")
});
