document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");
    // Add your JavaScript here
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("logo").style.fontSize = "35px";
    }
}
