// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"




// array delle immagini
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
// array alt
const itemsAlt = [
    'foto Svezia',
    'foto Svizzera',
    'foto Gran Bretagna',
    'foto Germania',
    'foto Paradise'
];
// array titoli
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];
// array testi
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];




// creo una variabile vuota dove metterci il contenuto
let itemContent = ' ';
let cardContent = ' ';


// inserisco dinamicamente lo slider
for (let i = 0; i < items.length; i++) {

    itemContent += 
    `
    <div class="item">
    <img src="${items[i]}" alt="${title[i]}">
    <div class="title-text-box">
    <h1>${title[i]}</h1>
    <p>${text[i]}</p>
    </div>
    </div>
    `;

    cardContent += 
    `
    <div class="card">
    <img src="${items[i]}" alt="${title[i]}">
    </div>
    `
}



// inserisco il contenuto nell'html
const itemContainer = document.querySelector('.items-container');
itemContainer.innerHTML = itemContent;
const cardContainer = document.querySelector('.card-container');
cardContainer.innerHTML = cardContent;



// seleziono tutti gli item per rendere il primo attivo
const item = document.getElementsByClassName('item');
const card = document.getElementsByClassName('card');

// creo la variabile che indica la partenza dell'indice 
let activeItem = 0;

// aggiungo all'item la classe active partendo da indice 0
item[activeItem].classList.add('active');
card[activeItem].classList.add('active-thumbnails');



// attivo i pulsanti per scorrere le immagini
const next = document.querySelector('.next-pic');
const prev = document.querySelector('.previous-pic');



// scateno l'evento al click di next
next.addEventListener("click", function() {

    // rimuovo la classe active all'elemento
    item[activeItem].classList.remove('active');
    card[activeItem].classList.remove('active-thumbnails');

    // incremento il contatore
    if (activeItem === items.length -1) {
        activeItem = 0;
    } else {
        activeItem++;
    }

    // do l'active all'elemento successivo
    item[activeItem].classList.add('active');
    card[activeItem].classList.add('active-thumbnails');
})



// scateno l'evento al click di previous
prev.addEventListener("click", function() {

    // rimuovo la classe active all'elemento
    item[activeItem].classList.remove('active');
    card[activeItem].classList.remove('active-thumbnails');

    // incremento il contatore
    if (activeItem === 0) {
        activeItem = items.length -1;
    } else {
        activeItem--;
    }

    // do l'active all'elemento successivo
    item[activeItem].classList.add('active');
    card[activeItem].classList.add('active-thumbnails');
})






