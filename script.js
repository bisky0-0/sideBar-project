let navBar = document.getElementById("nav-bar");
let navIcon = document.getElementById("nav-icon");
let navIconi = document.getElementsByTagName("i")


navIcon.onclick = function () {
    navBar.style.width = "22vw";
    navIcon.style.left = "19vw";
    navIconi[0].style.color = "#ffffff";
}