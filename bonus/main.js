// Array holding team data
const data = [];

// Add "hardwritten" teammates
addMate("Wayne Barnett", "Founder & CEO", "img/wayne-barnett-founder-ceo.jpg");
addMate("Angela Caroll", "Chief Editor", "img/angela-caroll-chief-editor.jpg");
addMate("Walter Gordon", "Office Manager", "img/walter-gordon-office-manager.jpg");
addMate("Angela Lopez", "Social Media Manager", "img/angela-lopez-social-media-manager.jpg");
addMate("Scott Estrada", "Developer", "img/scott-estrada-developer.jpg");
addMate("Barbara Ramos", "Graphic Designer", "img/barbara-ramos-graphic-designer.jpg");

// References
const cardsFrameElement = document.getElementById("cards-frame");

// Print team info on console
iterateDo((info, value) => console.log(`${info}: ${value}`));

// Print team info on CARDS
for(let i = 0; i < data.length; i++){

    // Get mate obj
    const mate = data[i];

    // Create card
    const card = document.createElement("a");
    card.classList.add("card", "clearfix");

    // Create img
    const img = document.createElement("img");
    img.src = mate.pic;
    card.append(img);

    // Create name
    const name = document.createElement("h3");
    name.innerHTML = mate.name;
    card.append(name);

    // Create role
    const role = document.createElement("span");
    role.innerHTML = mate.role;
    card.append(role);

    // Append to cards frame
    cardsFrameElement.append(card);
}

// Function to add mate to team array
function addMate(name, role, picturePath) {

    data.push({
        name: name,
        role: role,
        pic: picturePath,
    });

}

// Util for quick iteration over data array
function iterateDo(print) {
    for (let i = 0; i < data.length; i++) {
        for (let info in data[i]) {

            print(info, data[i][info]);

        }
    }
}