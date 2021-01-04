console.log("Exo 1 ----------------------------------------");

var student = {
    name: "DavidRayy",
    class: "VI",
    rollno: 12
};
console.log(student.name + " " + student.class + " " + student.rollno);
delete student.rollno;
console.log(student.name + " " + student.class + " " + student.rollno);

console.log("Exo 2 ----------------------------------------");

var recette = {
    titre: "socca",
    portions: 2,
    ingredients: ["Pois-chiche", "Soleil", "Poivre"]
}
console.log("nom: '" + recette.titre + "'");
console.log("servies: " + recette.portions);
console.log("ingrédients:");
for (i=0; i < recette.ingredients.length; i++) {
    console.log("   - " + recette.ingredients[i]);
}

console.log("Exo 3 ----------------------------------------");

var titre1 = {
    title: "The Road Ahead",
    author: "Bill Gates",
    read: true
}
var titre2 = {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    read: true
}
var titre3 = {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    read: false
}
var tab = [titre1, titre2, titre3];
for (i=0; i < tab.length; i++) {
    // if (tab[i]) {
    //     var livre = 
    //     console.log
    // }
    console.log("title: " + tab[i].title);
    console.log("author: " + tab[i].author);
    console.log("readingStatus: " + tab[i].read);
}

console.log("Exo 4 ----------------------------------------");

class Guerrier {
    nom;
    att;
    def;
    san;
    
    constructor(nom, att, def ,san) {
        this.nom = nom;
        this.att = att;
        this.def = def;
        this.san = san;
    } 
    combat(cible) {
        cible.san = cible.san - this.att;
        return "attaquant: " + this.nom + " cible: " + cible.nom + " vie restante: " + cible.san;
    }
}

class Magicien {
    nom;
    att;
    def;
    san;
    man;
    
    constructor(nom, att, def ,san, man) {
        this.nom = nom;
        this.att = att;
        this.def = def;
        this.san = san;
        this.man = man;
    } 
    combat(cible) {
        cible.san = cible.san - this.att;
        return "attaquant: " + this.nom + " cible: " + cible.nom + " vie restante: " + cible.san;
    }
    soin() {
        if (this.man >= 10) {
            this.man = this.man - 10;
            this.san = this.san + 10;
            return this.nom + " s'est soigné ! Vie: " + this.san;
        }
        return this.nom + " n'a pas assez de mana";
    }
}

guerrier1 = new Guerrier("Jules Cesar", 10, 0, 50);
guerrier2 = new Guerrier("Brutus", 20, 0, 100);
magicien1 = new Magicien("Merlin", 30, 0, 300, 70);

console.log(guerrier1.combat(magicien1));
console.log(guerrier2.combat(magicien1));
console.log(magicien1.soin());
console.log(magicien1.combat(guerrier2));


