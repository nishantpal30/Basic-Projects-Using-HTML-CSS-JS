const inp = document.getElementById("urlforqr");
const generate = document.getElementById("generateBtn");
const down = document.getElementById("dwn");
const imgid = document.getElementById("image");
const cls = document.getElementById("close");
const popup = document.getElementById("qrget");

const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

generate.addEventListener('click' , () =>{
  if(!inp.value)
  {
    alert(`Enter Text Or URL!`)
  }
  else{
    
    const mainurl = url + inp.value;
    imgid.setAttribute('src', mainurl);
    setTimeout(() =>{
     popup.classList.add('show');
    }, 1000)
  }
   
})

