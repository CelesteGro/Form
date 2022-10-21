function handleRadio(event) {
  event.preventDefault();
  const radioSelection =document.querySelector("input[name='bev']:checked").value

}

window.addEventListener("load", function(){
  this.document.getElementById("questions").addEventListener("submit", handleRadio)
})

