// var Personne = function (nom, prenom) {
//     this.nom = nom;
//     this.prenom = prenom;
// }

// perso1 = new Personne("nom1", "prenom1");
// perso2 = new Personne("nom2", "prenom");
// console.log(perso1);
// console.log(perso2);

class Personne {
    nom;
    prenom;
    age;
    
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    } 
    afficherNomComplet() {
        return this.nom + " " + this.prenom;
    } 
    getNom() {
        return this.nom;
    } 
    setNom(nom) {
        this.nom = nom;
    } 
    getPrenom() {
        return this.prenom;
    } 
    setPrenom(prenom) {
        this.prenom = prenom;
    }
    getAge() {
        return this.age;
    } 
    setAge(age) {
        this.age = age;
    }
    afficherPersonne() {
        return this.nom + " " + this.prenom + " " + this.age;
    }
}
perso1 = new Personne("nom1", "prenom1", 25);
perso2 = new Personne("nom2", "prenom2", 38);
console.log(perso1);
console.log(perso2);
console.log(perso1.afficherPersonne());
console.log(perso2.afficherPersonne());

document.write("test", "<br>");
document.write(perso1.afficherPersonne(), "<br>");
document.write(perso1.nom, "<br>");
document.write(perso2.age, "<br>");