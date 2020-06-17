let iconoMenu = document.getElementById('menu');
let linksContainer = document.getElementById("links-container");
let linkp = document.getElementById("link-1");
let links = document.getElementById("link-2");
let linkt = document.getElementById("link-3");
function menu(){
    if(linksContainer.className == "links-none"){
        linksContainer.setAttribute("class","links-container");
    }else {
        linksContainer.setAttribute("class","links-none");
    }
}
iconoMenu.onclick = function(){menu();}
linkp.onclick = function(){menu();}
links.onclick = function(){menu();}
linkt.onclick = function(){menu();}