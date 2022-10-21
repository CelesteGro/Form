function handleRadio(event) {
  event.preventDefault();
  const radioSelection =document.querySelector("input[name='bev']:checked").value

}

window.addEventListener("load", function(){
  this.document.getElementById("questions").addEventListener("submit", handleRadio)
})

let go = document.getElementById("go");
go.setAttribute("class","hidden");
const python = document.getElementById("python");
python.setAttribute("class","hidden");
const ruby = document.getElementById("ruby");
ruby.setAttribute("class","hidden");
const javascript = document.getElementById("javascript");
javascript.setAttribute("class","hidden");