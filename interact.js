function hello(){
  alert("Hello, this is my personal website");
}

function bigImg(x) {
    x.style.height = "30px";
    x.style.width = "30px";
}

function normalImg(x) {
    x.style.height = "10px";
    x.style.width = "10px";
}

function show() {
    var x = document.getElementById("click");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
