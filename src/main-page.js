import loadHomeDisplay from "./home";
import loadMenuDisplay from "./menu";
import loadContactDisplay from "./contact";
let activePage = "home";

function buildHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("name");
    name.classList.add("name");
    name.textContent = "Gelato";

    header.appendChild(name);
    header.appendChild(buildNavMenu());
    return header;
}

function buildNavMenu(){
    const navMenu = document.createElement("ul");
    navMenu.classList.add("navMenu");

    const home = document.createElement("li");
    home.textContent = "Home";
    navMenu.appendChild(home);
    
    const menu = document.createElement("li");
    menu.textContent = "Menu";
    navMenu.appendChild(menu);
    
    const contact = document.createElement("li");
    contact.textContent = "Contact";
    navMenu.appendChild(contact);


    home.addEventListener("click", (e) =>{
        loadPage("home")
    });
    
    menu.addEventListener("click", (e) =>{
        loadPage("menu");
    });
    
    contact.addEventListener("click", (e) =>{
        loadPage("contact");
    });
    
    return navMenu;
}

function buildContainer(){
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    return container;
}

function buildSignature(){
    const signature = document.createElement("a");
    signature.classList.add("signature");
    signature.textContent = "Made by /1uum";
    signature.href = "https://github.com/1uum/restaurant-page";
    return signature;
}

function buildSite(){
    const content = document.getElementById ("content");

    content.appendChild(buildHeader());
    content.appendChild(buildContainer());
    content.appendChild(buildSignature());
    loadHomeDisplay();

}

function loadPage(newPage) {
    if (newPage !== activePage){
        removePage(activePage);
        activePage = newPage;

        if (newPage === "home"){
            loadHomeDisplay();
        } else
        if (newPage === "menu"){
            loadMenuDisplay()
        } else
        if (newPage === "contact"){
            loadContactDisplay();
        }
    }
    return(activePage);
}

function removePage(activePage){
    let child = document.getElementById(activePage);
    container.removeChild(child);
}


export default buildSite;