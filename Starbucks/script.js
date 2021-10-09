const mediaQuery = window.matchMedia('(max-width: 1070px)');
document.querySelector(".alternatives").addEventListener("click", (e) => {

    let item = document.querySelector("#photo");
    let bg = document.querySelector(".background");
    let photosBg = document.querySelector(".photos");

    // images background color
    let src = e.target.src;
    if (src.includes("thumb1") == true) {
        item.setAttribute("src", "images/img1.png");
        bg.style.backgroundColor = "#017143";
    } else if (src.includes("thumb2") == true) {
        item.setAttribute("src", "images/img2.png");
        bg.style.backgroundColor = "#eb7495";
    } else if (src.includes("thumb3") == true) {
        item.setAttribute("src", "images/img3.png");
        bg.style.backgroundColor = "#d752b1";
    }

    if (mediaQuery.matches) {
        if (src.includes("thumb1") == true) {
            photosBg.style.backgroundColor = "#017143";
        } else if (src.includes("thumb2") == true) {
            photosBg.style.backgroundColor = "#eb7495";
        } else if (src.includes("thumb3") == true) {
            photosBg.style.backgroundColor = "#d752b1";
        }
    } else {
        photosBg.style.backgroundColor = "transparent";
    }

});


function transformY() {
    document.querySelectorAll(".trY").forEach(value => {
        value.classList.toggle("transformY");
    });
}

setInterval(transformY, 1000);

document.querySelector("#buttonLinks").addEventListener("click", () => {
    document.getElementById("links").classList.toggle("show");
});