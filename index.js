let slideBtn = document.getElementById("slide-btn");
let slider = document.getElementById("slider")
let handler = true
slideBtn.addEventListener("click", function (e) {
    slider.classList.toggle("animation-slide");
    if(handler){
        this.textContent = "REGISTER"
        handler = !handler
    }else {
        this.textContent = "LOGIN"
        handler = !handler
    }
})