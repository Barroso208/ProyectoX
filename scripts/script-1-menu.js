const iconoMenu = document.getElementById('menu');
const linksContainer = document.getElementById("links-container");
const h1    = document.getElementById("header-div1-h1");
const h3    = document.getElementById("header-div1-h3");
function menu(){
    if(window.screen.width<1090){
        if(linksContainer.className == "links-none"){
            linksContainer.setAttribute("class","links-container");
            h1.style.position ="unset";
            h3.style.position ="unset";
        }else {
            linksContainer.setAttribute("class","links-none");
        }
    }
}
function listClick(e) {
    menu();
}
iconoMenu.addEventListener('click',menu);
linksContainer.addEventListener('click',listClick);

document.getElementById("last").textContent = "Ultima modificación: " + document.lastModified;