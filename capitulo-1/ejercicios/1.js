

// Vuelve a escribir estas dos tipos de objeto para utilizar la palabra clave class, 
// en lugar de manipular el prototipo directamente

// function Speaker(name, verb) {
//     this.name = name;
//     this.verb = verb || "says";
// }
// Speaker.prototype.speak = function (text) {
//     console.log(this.name + " " + this.verb + " '" + text + "'");
// };
// 
// function Shouter(name) {
//     Speaker.call(this, name, "shouts");
// }
// Shouter.prototype = Object.create(Speaker.prototype);
// Shouter.prototype.speak = function (text) {
//     Speaker.prototype.speak.call(this, text.toUpperCase());
// };

//solucion

class Speaker{
    constructor(name, verb){
        this.name = name
        this.verb = verb || "says"
    }

    speak(text){
        console.log(`${this.name} ${this.verb} ${text}`)
    }
}

class Shouter extends Speaker{
    speak(text){
        super.speak(text.toUpperCase())
    }
}

new Shouter("Francisco Calle").speak("Hola ES6");
