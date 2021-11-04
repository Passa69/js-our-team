// 1. creo un array di oggetti in cui metto ogni membro con le relative descrizioni
// 2. stampo tutti i membri nello html
// 3. prendo i dati dall'input per aggiungere nuovi membri

const members = [
    {
        "img"  : "img/wayne-barnett-founder-ceo.jpg",
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO"
    },

    {
        "img"  : "img/angela-caroll-chief-editor.jpg",
        "name" : "Angel Caroll",
        "role" : "Chief Editor"
    },

    {
        "img"  : "img/walter-gordon-office-manager.jpg",
        "name" : "Walter Gordon",
        "role" : "Office Manager"
    },

    {
        "img"  : "img/angela-lopez-social-media-manager.jpg",
        "name" : "Angela Lopez",
        "role" : "Social Media Manager"
    },

    {
        "img"  : "img/scott-estrada-developer.jpg",
        "name" : "Scott Estrada",
        "role" : "Developer"
    },

    {
        "img"  : "img/barbara-ramos-graphic-designer.jpg",
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer"
    }
]


// contenitore dei membri
const memberContainer = document.querySelector(".team-container");

// stampo i membri già presenti dall'array all'html con un ciclo

for (i = 0; i < members.length; i++) {
    // creo il div per gli elementi
    let memberPage = document.createElement("div");
    memberPage.classList.add("team-card");

    // creo i div per ogni membro
    let memberImg = document.createElement("div");
    memberImg.classList.add("card-image");
    memberImg.innerHTML = `
    <img
        src="${members[i].img}"
        alt="${members[i].name}"
    />
    `;
    memberPage.appendChild(memberImg);

    let memberText = document.createElement("div");
    memberText.classList.add("card-text");
    memberText.innerHTML = `
    <h3>
        ${members[i].name}
    </h3>
    `;
    memberText.innerHTML += `
    <p>
        ${members[i].role}
    </p>
    `;
    memberPage.appendChild(memberText);
    
    memberContainer.appendChild(memberPage);
}
