let targetElement = document.getElementById("logo-icon");
// console.log(targetElement);
targetElement.addEventListener("click", openMobileMenu)

function openMobileMenu() {
    console.log("clicked");
    document.getElementById("mobile-menu").style.display = "block";
}

let closeTargetElem = document.getElementById("close-mobile-menu");
closeTargetElem.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
    console.log("clicked");
    document.getElementById("mobile-menu").style.display = "none";
}