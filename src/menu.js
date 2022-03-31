function buildMenuDisplay() {
    const menuDisplay = document.createElement("div");
    menuDisplay.classList.add("menuDisplay");
    menuDisplay.setAttribute("id", "menu");
    menuDisplay.appendChild(buildTradFlavors());
    menuDisplay.appendChild(buildModFlavors());
    return menuDisplay;
}

function buildTradFlavors(){
    const tradFlavors = document.createElement("div");
    tradFlavors.classList.add("flavorsContainer");

    const flavorsTitle = document.createElement("h2");
    flavorsTitle.textContent = "Traditional Flavors";
    tradFlavors.appendChild(flavorsTitle);

    const flavors = document.createElement("ul");

    const vanilla = document.createElement("li");
    vanilla.textContent = "Vanilla";
    flavors.appendChild (vanilla); 
    const chocolate = document.createElement("li");
    chocolate.textContent = "Chocolate";
    flavors.appendChild (chocolate); 
    const hazelnut = document.createElement("li"); 
    hazelnut.textContent = "Hazelnut";
    flavors.appendChild (hazelnut); 
    const almond = document.createElement("li"); 
    almond.textContent = "Almond";
    flavors.appendChild (almond); 
    const pistachio = document.createElement("li");
    pistachio.textContent = "Pistachio";
    flavors.appendChild (pistachio); 
    const cream = document.createElement("li"); 
    cream.textContent = "Cream";
    flavors.appendChild (cream); 
    const stracciatella = document.createElement("li");
    stracciatella.textContent = "Stracciatella";
    flavors.appendChild (stracciatella); 
    
    tradFlavors.appendChild(flavors);

    return tradFlavors;
    
}

function buildModFlavors(){
    const modFlavors = document.createElement("div");
    modFlavors.classList.add("flavorsContainer");

    const flavorsTitle = document.createElement("h2");
    flavorsTitle.classList.add("flavors");
    flavorsTitle.textContent = "Modern Flavors";
    modFlavors.appendChild(flavorsTitle);

    const flavors = document.createElement("ul");

    const raspberry = document.createElement("li");
    raspberry.textContent = "Raspberry";
    flavors.appendChild (raspberry); 
    const strawberry = document.createElement("li");
    strawberry.textContent = "Strawberry";
    flavors.appendChild (strawberry); 
    const apple = document.createElement("li"); 
    apple.textContent = "Apple";
    flavors.appendChild (apple); 
    const lemon = document.createElement("li"); 
    lemon.textContent = "Lemon";
    flavors.appendChild (lemon); 
    const pineapple = document.createElement("li");
    pineapple.textContent = "Pineapple";
    flavors.appendChild (pineapple); 
    const braspberry = document.createElement("li"); 
    braspberry.textContent = "Black Raspberry";
    flavors.appendChild (braspberry);
    modFlavors.appendChild(flavors);

    return modFlavors;
    
}

function loadMenuDisplay() {
    const container = document.getElementById("container");
    container.appendChild(buildMenuDisplay());
}

export default loadMenuDisplay;