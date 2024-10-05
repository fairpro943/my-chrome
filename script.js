var d1 = document.getElementById("d1");
var di1 = document.getElementById("di1");
var inp = document.getElementById("inp").value;
var go = document.getElementById("go");

go.onclick = ()=> {
  if (inp=="test") {
    d1.removeAttribute("id");
    d1.setAttribute("id","d2")
  }
}

/*d1.onclick = ()=> {
  di1.setAttribute("open","true");
}*/
