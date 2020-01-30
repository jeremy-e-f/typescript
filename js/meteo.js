"use strict";
class Meteo {
    constructor(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    // A AJOUTER
    toString() {
        return `${this._ville} - ${this._temperature}°C`;
    }
}
let nantesCeMatin = new Meteo('Nantes', 12);
// A AJOUTER
console.log(nantesCeMatin.toString());
