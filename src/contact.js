function buildContactDisplay() {
    const contactDisplay = document.createElement("div");
    contactDisplay.classList.add("contactDisplay");
    contactDisplay.setAttribute("id", "contact");
    contactDisplay.appendChild(buildContactInfo());

    return contactDisplay;
}

function buildContactInfo() {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    const contactUs = document.createElement("h2");
    contactUs.textContent = "Contact Us: "
    infoContainer.appendChild(contactUs);

    const p1 = document.createElement("p");
    p1.textContent = "You can find us in the streets of the world, specially if you are in Italy!";
    infoContainer.appendChild(p1);

    const p2 = document.createElement ("p");
    p2.textContent = "You can find us in social media as: @Gelato_yourcountry";
    infoContainer.appendChild(p2);
    
    const p3 = document.createElement ("p");
    p3.textContent = "Or you can contact us via email! at: gelato@yourcountry.com";
    infoContainer.appendChild(p3);

    return infoContainer;
}

function loadContactDisplay() {
    const container = document.getElementById("container");
    container.appendChild(buildContactDisplay());
}

export default loadContactDisplay;