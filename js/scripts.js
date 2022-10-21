function handleRadio(event) {
  event.preventDefault();
  const radioSelection =document.querySelector("input[name='bev']:checked").value;

  const go = document.getElementById("go");
  go.setAttribute("class","hidden");
  const python = document.getElementById("python");
  python.setAttribute("class","hidden");
  const ruby = document.getElementById("ruby");
  ruby.setAttribute("class","hidden");
  const javascript = document.getElementById("javascript");
  javascript.setAttribute("class","hidden");

  window.addEventListener("load", function(){
  document.getElementById("questions").addEventListener("submit", handleRadio)})

    if (radioSelection===document.getElementById("input#milk"))
      {javascript.removeAttribute("class", "hidden")};
  }


