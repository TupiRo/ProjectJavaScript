/**
 * Created by Rodrigo Zarate on 3/17/2015.
 */
console.log('Tu eres el problema');

function verificar(){
    var name = window.prompt('** Nombre:');
    var edad = window.prompt('** Edad:');
    if(edad > 30)
        window.alert(name + ' You are a OLD');
    else
        window.alert(name + ' You are YOUNG');
};

Persona = function(name, age)
{
    this.name = name;
    this.age = age;
};

pepe = new Persona("Lio",25);


function calculateAge1(bornYear){

    var age = 2014 - bornYear;
    return age;
}


function letters(word){

    return number = word.split(' ').length;
}