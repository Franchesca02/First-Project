const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".menu-list")

function toggle() {
    if(menu.style.display === "none"){
    menu.style.display = "flex";
    }else {
        menu.style.display = "none";
    }
}

