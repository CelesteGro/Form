function radioSelection()
  const go = document.getElementById("go");
  go.setAttribute("class","hidden");
  const python = document.getElementById("python");
  python.setAttribute("class","hidden");
  const ruby = document.getElementById("ruby");
  ruby.setAttribute("class","hidden");
  const javascript = document.getElementById("javascript");
  javascript.setAttribute("class","hidden");


function unhideResults() 
  const radioSelection =document.querySelector("input[name='bev']:checked").value;
  if (radioSelection === "input#milk")
    javascript.removeAttribute("class");

    
  
window.addEventListener("load"), function(event){
window.document.getElementById("questions").addEventListener("submit", event)
  event.preventDefault;
}