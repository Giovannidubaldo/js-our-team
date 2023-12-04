// MILESTONE 1
// Creato un array di objects contenti i dipendenti con le loro informazioni
let worker = [
    {
       'name' : 'Wayne Barnett',
       'role' : 'Founder & CEO',
       'image' : './img /wayne-barnett-founder-ceo.jpg',
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : './img /angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : './img /walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : './img /angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : './img /scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : './img /barbara-ramos-graphic-designer.jpg'
    }
];

console.log(worker);

//Stampare nella pagina le informazioni dei dipendenti organizzate in card
let worker_card = document.getElementById('worker-card');

// MILESTONE 2
// Stampato in console.log tutte le informazioni di ciascun dipendente
for(let i=0; i<worker.length; i++){
    console.log(worker[i]);

    // Creo le card di ogni dipendente
    let div = document.createElement('div');
    div.classList.add('col-4');
    div.classList.add('p-4');

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('text-center');

    let name = `<p>${worker[i].name}</p>`;
    let role = `<p>${worker[i].role}</p>`;
    let image = `<img src="${worker[i].image}">`;

    card.innerHTML = image + name + role;
    div.appendChild(card);

    worker_card.appendChild(div);

    for(let key in worker[i]){
        console.log(worker[i][key]);
    }
}


