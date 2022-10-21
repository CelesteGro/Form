window.addEventListener("load", function(){
  let form= document.querySelector("form");
  const radioSelection =document.querySelector("input[name='bev']:checked").value;

  form.addEventListener("submit", function(event);{
    const go = document.getElementById("go");
    go.setAttribute("class","hidden");
    const python = document.getElementById("python");
    python.setAttribute("class","hidden");
    const ruby = document.getElementById("ruby");
    ruby.setAttribute("class","hidden");
    const javascript = document.getElementById("javascript");
    javascript.setAttribute("class","hidden");
    const milk = document.getElementById("milk");
    if (document.getElementById("milk").checked); {
      javascript.removeAttribute("class", "hidden"); 
    }
    if (document.getElementById("tea").checked); {
      go.removeAttribute("class", "hidden");
    }
    if (document.getElementById("water").checked); {
      python.removeAttribute("class", "hidden");
    }
    if (document.getElementById("coffee").checked); {
      ruby.removeAttribute("class", "hidden");}
    }
