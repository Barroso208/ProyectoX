const iconoMenu = document.getElementById('menu');
const linksContainer = document.getElementById("links-container");
const h1    = document.getElementById("header-div1-h1");
const h3    = document.getElementById("header-div1-h3");
function menu(){
    if(window.screen.width<1090){
        if(linksContainer.className == "links-none"){
            h1.style.position ="unset";
            h3.style.position ="unset";
            linksContainer.setAttribute("class","links-container");
        }else {
            $('div.links-container').animate({opacity:0.0},500,function() {
                linksContainer.setAttribute("class","links-none");
                linksContainer.style.opacity = 100;
            });
        }
    }
}
$('#menu').on('click',menu);
$('div.links-none').on('click',menu);
document.getElementById("last").textContent = "Ultima modificación: " + document.lastModified;
/* Ocultar y desocultar el nav :) */
let lastScroll;
$(window).on('scroll', function(event) {
    let scroll = $(this).scrollTop();
    if ( (lastScroll<scroll) && (scroll>312) && (window.screen.width<1090) ) {
        $('#nav').css('opacity',0.0);
    }else{
        $('#nav').css('opacity',100);
    }
    lastScroll=scroll;
});

