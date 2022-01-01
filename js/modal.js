const lightbox = document.getElementById("lightbox_container");

function showLightbox() {
    lightbox.style.display = "block";
}

function hideLightbox() {
    lightbox.style.display = "none";
}

document.getElementById("show").onclick = showLightbox;
document.getElementById("hide").onclick = hideLightbox;

document.getElementById("overlay").onclick = hideLightbox;