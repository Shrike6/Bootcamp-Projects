document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
})

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.3";
})

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.borderRadius = "0%";
3
})

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.transition = "border-radius .5s";
    document.getElementById("box").style.borderRadius = "50%";
})