let iconoMenu = document.getElementById('menu');
let linksContainer = document.getElementById("links-container");
let linkp = document.getElementById("link-1");
let links = document.getElementById("link-2");
let linkt = document.getElementById("link-3");
let h1    = document.getElementById("header-div1-h1");
let h3    = document.getElementById("header-div1-h3");
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
iconoMenu.onclick = function(){menu();}
linkp.onclick = function(){menu();}
links.onclick = function(){menu();}
linkt.onclick = function(){menu();}

document.getElementById("last").textContent = "Ultima modificación: " + document.lastModified;