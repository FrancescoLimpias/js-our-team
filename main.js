// Array holding team data
const data = [];

// Add "hardwritten" teammates
addMate("Wayne Barnett", "Founder & CEO", "img/wayne-barnett-founder-ceo.jpg");
addMate("Angela Caroll", "Chief Editor", "img/angela-caroll-chief-editor.jpg");
addMate("Walter Gordon", "Office Manager", "img/walter-gordon-office-manager.jpg");
addMate("Angela Lopez", "Social Media Manager", "img/angela-lopez-social-media-manager.jpg");
addMate("Scott Estrada", "Developer", "img/scott-estrada-developer.jpg");
addMate("Barbara Ramos", "Graphic Designer", "img/barbara-ramos-graphic-designer.jpg");

// Function to add mate to team array
function addMate(name, role, picturePath){
    
    data.push({
        name: name,
        role: role,
        pic: picturePath,
    });

}