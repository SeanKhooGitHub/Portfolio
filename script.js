function reveal() {
    var reveals = document.querySelectorAll("section");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
    }
}

document.querySelector("#bars").onclick = () => {
    document.querySelector(".navbar").classList.toggle("active")
}

document.querySelector(".mode").onclick = () => {
    document.querySelector(".header").classList.toggle("active")
    document.querySelector(".mode").classList.toggle("active")
    document.body.classList.toggle("active")
    document.querySelector(".home").classList.toggle("active")
    document.querySelector(".work-grid").classList.toggle("active")
    document.querySelector(".education-grid").classList.toggle("active")
    document.querySelector(".skills").classList.toggle("active")
    document.querySelector("footer").classList.toggle("active")
    document.querySelector(".work-title").classList.toggle("active")
    document.querySelector(".about-title").classList.toggle("active")
}

window.addEventListener("scroll", reveal);
