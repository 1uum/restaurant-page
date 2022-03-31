function buildHomeDisplay() {
    const homeDisplay = document.createElement("div");
    homeDisplay.classList.add("homeDisplay");
    homeDisplay.setAttribute("id", "home");
    homeDisplay.textContent = "Gelato is a frozen dessert of Italian origin. Artisanal gelato in Italy generally contains 6-10% butterfat, which is lower than other styles of frozen dessert. Gelato typically contains 70% less air and more flavoring than other kinds of frozen desserts, giving it a density and richness that distinguishes it from other ice creams."
    return homeDisplay;
}

function loadHomeDisplay() {
    const container = document.getElementById("container");
    container.appendChild(buildHomeDisplay());
}

export default loadHomeDisplay;