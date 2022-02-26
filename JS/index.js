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


start();

    let x;
    function start(){
        let images = [
            {
                img : "https://newassets.apollo247.com/images/banners/Super_30.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/Pain_Relief_24feb.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/covidRecovery.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/covidhelp_01Feb.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/Web_Circle.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/CircleMembership.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/secondopinion.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/vaccination.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/HealthQueries.png"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/post-covid.jpg"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/pharma_2Feb.png"
            },
            {	
                img : "https://newassets.apollo247.com/images/banners/consult_2Feb.png"
            },
            {
                img : "https://newassets.apollo247.com/images/circle/banners/consult.png"
            },
            {
                img : "https://newassets.apollo247.com/images/banners/First3.jpg"
            }];

        let slideshowImages = document.getElementById("slideimg");

        let i = 0;

        x = setInterval(function(){
            slideshowImages.src = images[i].img;
            i++;

            if(i === images.length){
                i=0;
            }
        },3000)
    }
    function stop(){
        clearInterval(x);
    }


    
document.getElementById('default').addEventListener('click',function(){
    window.location.href="profile.html"
});

document.getElementById('doctorspage').addEventListener('click',function(){
    window.location.href="doctors.html"
});
document.getElementById('labtests').addEventListener('click',function(){
    window.location.href="test.html"
});
document.getElementById('profilepage').addEventListener('click',function(){
    window.location.href="profile.html"
});