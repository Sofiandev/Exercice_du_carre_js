// 3 manières de déclarer des variables
var a = 'toto' //à éviter à cause du hoisting
const b = 'tata' //on ne peut reattribuer sa valeur et on ne peut y accéder qu'après sa déclaration 
let c = 'titi' //on ne peut y accéder qu'après sa déclaration mais on peut réattirbuer sa valeur

//Pour les fonctions, même principe
// déclarer une fonction dans une variable permet d'éviter là encore le Hoisting de js 
let myFunction = function() {
    console.log('coucou');
} 

//exercice 1 : les tableaux 
const stagiaires = ['stephane','matthieu', 'roxanne', 'sofian', 'samuel', 'sofiane', 'marilyn'];

//.sort() : trier par ordre alphabétique
//ajouter une valeur 
//au début avec .pop('nomdustagiaire')
//à la fin avec .push('nomdustagiaire')
//afficher chaque prénom du tableau en console via une fonction en utilisant .map


//les objets
const formateur = {
    prenom: "Grégory",
    age: 37,
    isBold: true
}

//exercice du carré 
const square = document.querySelector('#square');

let draw = function() {
    square.style.height = '200px';
    square.style.width = '200px';
    square.style.backgroundColor = 'blue';
    square.style.left = '50%';
    square.style.top = '50%';
    square.style.position = 'absolute';
}
draw();
const grow = document.querySelector('#grow');
const changeColor = document.querySelector('#changeColor');
const ninja = document.querySelector('#ninja');
const bouh = document.querySelector('#bouh');
const reset = document.querySelector('#reset');

grow.addEventListener('click', function() {
    //on récupère la valeur de square.style.height en la transformant en entier avec parseInt()
    let actualSize = parseInt(square.style.height);
    //à partir de la valeur numérique, on ajoute 10 et on redonne l'unité pour que ce soit appliqué correctement
    square.style.height = actualSize + 10 + 'px';
})

changeColor.addEventListener('click', function() {
    //changer la couleur est aussi simple que suivant, c'est à dire attribuer une nouvelle valeur à la propriété backgroundColor
    square.style.backgroundColor = 'green';
})

ninja.addEventListener('click', function() {
    //plusieurs solutions pour rendre un élément visible/invisible, ici une proposition en jouant sur la valeur de display
    square.style.display = 'none';
})

bouh.addEventListener('click', function() {
    square.style.display = 'block';
})
//Pour remettre le carré à zéro, on réutilise simplement la fonction qui nous permet de le dessiner à la base
reset.addEventListener('click', draw);

document.addEventListener('keydown', function(e) {
    let initialLeft = parseInt(square.style.left);
    if(e.key == "ArrowLeft") {
        if(parseInt(square.style.left) <= 1) {
            square.style.left = "0%"
        }else{
            square.style.left = initialLeft - 1 + '%';
        }  
    } else if(e.key == "ArrowRight") {
        if(parseInt(square.style.left) >= 89) {
            square.style.left = "89%"
        }else{
            square.style.left = initialLeft + 1 + '%';
        }  
    }
})