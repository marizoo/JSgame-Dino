// const dino = document.querySelector(".dino");

// dino.addEventListener("click", () => {
//     setTimeout(() => {
//         dino.style.transform = "translateY(-150px)";
//     }, 200);
//     dino.style.transform = "translateY(0)";
// });

document.addEventListener("DOMContentLoaded", () => {
    const dino = document.querySelector("dino");

    function control(ev) {
        if (ev.keyCode === 32) {
            console.log("BITCH");
        }
    }

    document.addEventListener("keyup", control);
});
