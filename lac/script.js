$(document).ready(init)

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

var ListeEleve = [
    "Emma",
    "Thomas",
    "Léonard",
    "Bruna",
    "Nora",
    "Elisabeth",
    "Charlie",
    "Isaac",
    "Vadim",
    "Ulysse",
    "Solèl",
    "Victor",
    "Emi",
    "Simmon",
    "Nola",
    "Abel",
    "Tristan",
    "Lisy"
]
var ListeTache = [
    {
        name:"Tables",
        nombrePer:4
    },
    {
        name:"Chaises",
        nombrePer:3
    },
    {
        name:"Store",
        nombrePer:1
    },
    {
        name:"Tapis",
        nombrePer:1
    },
    {
        name:"Tableau",
        nombrePer:1
    },
    {
        name:"Balais",
        nombrePer:4
    },
    {
        name:"Toilette",
        nombrePer:1
    },
    {
        name:"Objet",
        nombrePer:3
    }]

var decalageJour = 4;

function init(){
    let _dayOfYear=dayOfYear(new Date())*decalageJour;
    for(let i=0; i <= _dayOfYear; i++) { ListeEleve.unshift(ListeEleve.pop()) }

    let i = 0;
    ListeTache.forEach((item, idx) =>{
        let TacheEleves = ListeEleve.slice(i, i + item.nombrePer).join("</li><li>");
        i += item.nombrePer;
        $("body").append(`<span class="tile"><span class="tileTitle">${item.name} (${item.nombrePer})</span><ul><li>${TacheEleves}</li></ul></span><br>`)
    })
}