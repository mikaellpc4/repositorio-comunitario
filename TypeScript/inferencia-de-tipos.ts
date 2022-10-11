let quatidade = 20;

// quatidade = '100'; -- não compila

let myArray = [1, 2, null];

//myArray[0] = true; -> não compila

// Contextual typing
window.onmousedown = function(evento) {
    console.log(evento.button); // Ok
    //console.log(evento.buton);  Não compila
}

