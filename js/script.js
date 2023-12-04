// MILESTONE 1
// Creato un array di objects contenti i dipendenti con le loro informazioni
let worker = [
    {
       'name' : 'Wayne Barnett',
       'role' : 'Founder & CEO',
       'image' : 'wayne-barnet.img',
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll.img'
    },
    {
        'name' : 'Walter Gordom',
        'role' : 'Office Manager',
        'image' : 'walter-gordom.img'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez.img'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada.img'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos.img'
    }
]

console.log(worker)

// MILESTONE 2
// Stampato in console.log tutte le informazioni di ciascun dipendente
for(let i=0; i<worker.length; i++){
    console.log(worker[i])
    for(let key in worker[i]){
        console.log(worker[i][key])
    }
}
