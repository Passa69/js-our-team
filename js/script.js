// 1. creo un array di oggetti in cui metto ogni membro con le relative descrizioni
// 2. stampo tutti i membri nello html
// 3. prendo i dati dall'input per aggiungere nuovi membri

const members = [
    {
        "img"  : <img src="img\wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>,
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO"
    },

    {
        "img"  : <img src=".img\angela-caroll-chief-editor.jpg" alt="Angel Caroll"/>,
        "name" : "Angel Caroll",
        "role" : "Chief Editor"
    },

    {
        "img"  : <img src="img\walter-gordon-office-manager.jpg" alt="Walter Gordon"/>,
        "name" : "Walter Gordon",
        "role" : "Office Manager"
    },

    {
        "img"  : <img src="img\angela-lopez-social-media-manager.jpg" alt="Angela Lopez"/>,
        "name" : "Angela Lopez",
        "role" : "Social Media Manager"
    },

    {
        "img"  : <img src="img\scott-estrada-developer.jpg" alt="Scott Estrada"/>,
        "name" : "Scott Estrada",
        "role" : "Developer"
    },

    {
        "img"  : <img src="img\barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos"/>,
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer"
    }
]


// contenitore dei membri
const memberCont = document.getElementsByClassName("team-container");

// stampo i membri già presenti dall'array all'html
// creo i div per ogni membro
let memberImg = document.createElement("div");
memberImg.classList.add("card-image");
memberPage.append(memberImg);

let memberText = document.createElement("div");
memberText.classList.add("card-text");
memberPage.append(memberText);

// creo il div per gli elementi
let memberPage = document.createElement("div");
memberPage.classList.add("team-card");
memberCont.append(memberPage);


// aggiungo i pezzi dell'array nei div giusti
// memberImg.innerHTML = members.img;
// memberText.innerHTML = members.name;
// memberText.innerHTML = members.role;
// ...
// memberImg.append(members.img);
// memberText.append(members.name);
// memberText.append(members.role);

