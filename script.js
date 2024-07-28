var N = document.getElementById("N");
var i = document.getElementById("i");
var h = document.getElementById("h");
var a = document.getElementById("a");
var c = document.getElementById("c");
var o = document.getElementById("o");
var d = document.getElementById("d");
var e = document.getElementById("e");
var s = document.getElementById("s");
var complete = document.getElementById("complete");

N.addEventListener("click",()=>{
  N.style.display = "none";
  i.style.display = "block";
})
i.addEventListener("click",()=>{
  i.style.display = "none";
  h.style.display = "block";
})
h.addEventListener("click",()=>{
  h.style.display = "none";
  a.style.display = "block";
})
a.addEventListener("click",()=>{
  a.style.display = "none";
  c.style.display = "block";
})
c.addEventListener("click",()=>{
  c.style.display = "none";
  o.style.display = "block";
})
o.addEventListener("click",()=>{
  o.style.display = "none";
  d.style.display = "block";
})
  d.addEventListener("click",()=>{
    d.style.display = "none";
  e.style.display = "block";
})
  e.addEventListener("click",()=>{
    e.style.display = "none";
    s.style.display = "block";
})
 s.addEventListener("click",()=>{
    s.style.display = "none";
      complete.style.display = "block";
})
  complete.addEventListener("click",()=>{
    complete.style.display = "none";
    N.style.display = "block";
})
