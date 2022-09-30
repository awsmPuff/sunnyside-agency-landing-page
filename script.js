const toggleBtn = document.querySelector(".toggle");
const toggleMenu = document.querySelector(".toggle-menu");

toggleBtn.addEventListener("click", () => {
    if(toggleBtn.classList.contains("close")) {
        toggleBtn.classList.remove("close");
        toggleBtn.style.opacity = "0.5";
        toggleMenu.style.display = "flex";
    } else {
        toggleBtn.style.opacity = "1";
        toggleMenu.style.display = "none";
        toggleBtn.classList.add("close");
    }
    
})