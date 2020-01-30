"use strict";
class Sejour {
    constructor(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    get nom() {
        return this._nom;
    }
    set nom(nNom) {
        this._nom = nNom;
    }
    get prix() {
        return this._prix;
    }
    set prix(nPrix) {
        this._prix = nPrix;
    }
    toString() {
        return `${this._nom} : ${this._prix} euros`;
    }
}
class SejourService {
    constructor() {
        this.sejours = [new Sejour('Paris', 500), new Sejour('Pekin', -400), new Sejour('Tokyo', 700)];
    }
    findByNom(nom) {
        return this.sejours.find(sejour => sejour.nom === nom);
        /*
        this.sejours.forEach(sejour => {
            if(sejour.nom === nom){
                return sejour;
            }
        })*/
    }
}
const sejourService = new SejourService();
let sejour = sejourService.findByNom('Tokyo');
console.log(sejour == null ? `Pas de séjour trouvé!` : `Séjour trouvé: ${sejour}`);
