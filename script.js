var nb1 = document.querySelector('.nb1');
var op = document.querySelector('.op');
var nb2 = document.querySelector('.nb2');

var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');

let compteur = 0;

random1 = Math.random() * 1000 << 0;
random2 = Math.random() * 1000 << 0;

nb1.innerHTML = random1;
nb2.innerHTML = random2;

function verifier() {
    var res = document.querySelector('.res').value;
    //alert(res);
    if (random1 + random2 == res) {
        message.style.background = 'green';
        message.innerHTML = "Marina";

        random1 = Math.random() * 1000 << 0;
        random2 = Math.random() * 1000 << 0;

        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur = compteur + 1;
    }
    else {
        message.style.background = 'red';
        message.innerHTML = "Vous avez perdu!.";
        section.innerHTML = " ";
        score.innerHTML = compteur + '<br/>Isa';
        link.style.display = "block";
    }

}