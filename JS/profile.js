// navbar
import navbar from "../componant/navbar.js";
console.log(navbar);

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

// footer

import footer from "../componant/footer.js";
console.log(footer);

let footer_div = document.querySelector("footer");

footer_div.innerHTML = footer();


document.getElementById('arrow').addEventListener('click',function(){
    window.location.href="otp.html"
});

document.getElementById('logoindex').addEventListener('click',function(){
    window.location.href="index.html"
});
document.getElementById('doctorspage').addEventListener('click',function(){
    window.location.href="doctors.html"
});
document.getElementById('labtests').addEventListener('click',function(){
    window.location.href="tests.html"
});
