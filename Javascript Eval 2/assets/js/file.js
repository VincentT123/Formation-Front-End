console.log("Partie 1 ------------------------------------------------------")
//Partie 1 : exercice 1 ----------------------------------------------------
//Cette fonction permet d'additionner les deux paramètres
//en entrée et il faut que ces paramètres soient uniquement des nombres
function addition(x, y) {
    // j'additionne x et y et je le retourne
    return x + y;
}
// Afficher la sortie
console.log(addition(1, 2));
console.log(addition(-2, -4));

//Partie 1 : exercice 2 ----------------------------------------------------
//Cette fonction permet de convertir un nombre entier de minutes en secondes
function minuteToSecond(minutes) {
    // je multiplie minutes par 60 et je retourne le résultat
    return minutes * 60;
}
// Afficher la sortie
console.log(minuteToSecond(4));
console.log(minuteToSecond(3));

//Partie 1 : exercice 3 ----------------------------------------------------
//Cette fonction permet d'ajouter 1 à un nombre
function increment(n) {
    // j'ajoute 1 à n et je retourne le résultat
    return n + 1;
}
// Afficher la sortie
console.log(increment(1));
console.log(increment(4));

//Partie 1 : exercice 4 ----------------------------------------------------
//Cette fonction permet d'obtenir la surface d'un triangle à partir de la
//base et la hauteur
function getSurface(base, hauteur) {
    // je multiplie la base par la hauteur, je divise ce produit par 2 et je
    // retourne le résultat
    return (base * hauteur) / 2;
}
// Afficher la sortie
console.log(getSurface(8, 2));
console.log(getSurface(7, 3));

//Partie 1 : exercice 5 ----------------------------------------------------
//Cette fonction permet d'inverser une chaïne de caractères
function strReverse(str) {
    // je convertie la chaîne de caractères en un tableau, je transpose les
    // éléments du tableau dans l'ordre inverse, je concatène les éléments
    // en une chaîne de caractère et je retourne le résultat
    return str.split("").reverse().join("");
}
// Afficher la sortie
console.log(strReverse("WayToLearnX"));
console.log(strReverse("Hello"));

//Partie 1 : exercice 6 ----------------------------------------------------
//Cette fonction permet de trouver le plus grand de 3 entiers
function getMax(a, b, c) {
    // j'initialise x à 0, je teste si a est plus grand que b et c, auquel cas
    // je mets a dans x, sinon je teste si b est plus grand que c, auquel cas
    // je mets b dans x, sinon je mets c dans x, puis je retourne x qui contient
    // donc le plus grand des 3 nombres
    var x = 0;
    if ((a > b) && (a > c)) {
        x = a;
    } else if (b > c) {
        x = b;
    } else {
        x = c;
    }
    return x;
}
// Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));

//Partie 1 : exercice 7 ----------------------------------------------------
//Cette fonction permet d'obtenir le premier élément d'un tableau
function getFirst(tab) {
    // j'initialise x et je lui donne comme valeur celui du premier élément
    // du tableau et je retourne x
    var x = tab[0];
    return x;
}
// Afficher la sortie
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));

//Partie 1 : exercice 8 ----------------------------------------------------
//Appliquer la méthode .URL à notre page permet d'obtenir son url
// Afficher l'url de la page 
console.log(document.URL);

//Partie 1 : exercice 9 ----------------------------------------------------
//Cette fonction permet d'obtenir le reste d'une division de 2 nombres
function resteDiv(a, b) {
    // je retourne le reste de la division de a par b
    return a % b;
}
// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));

console.log("Partie 2 ------------------------------------------------------")
//Partie 2 : exercice 1 ----------------------------------------------------
//Cette fonction permet d'obtenir le carré d'un nombre
function carre(a) {
    // je retourne le carré du nombre donné
	return a * a;
}
// Afficher la sortie
console.log(carre(2));
console.log(carre(4));

//Partie 2 : exercice 2 ----------------------------------------------------
//Cette fonction permet d'obtenir la valeur True si la somme des 2 nombres
// donnés est inférieure à 100, ou False dans le cas contraire
function check(a, b) {
    // je teste si la somme des 2 nombres donnés est inférieure à 100 et je
    // retourne la réponse (qui sera donc soit True soit False)
    return a + b < 100; 
}
// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));

//Partie 2 : exercice 3 ----------------------------------------------------
//Cette fonction permet de convertir un nombre d'heures donné en secondes
function heureSeconde(heure) {
    // je multiplie le nombre donné par 3600 et je retourne le résultat
    return heure * 3600;
}
// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));

//Partie 2 : exercice 4 ----------------------------------------------------
//Cette fonction renvoie la valeur True si le nombre en entrée est inférieur
//ou égal à 0 
function checkNbr(n) {
    // je teste si n est inférieur ou égal à 0 et retourne True si oui ou bien
    // False sinon
    return n <= 0;
}
// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

//Partie 2 : exercice 5 ----------------------------------------------------
//Cette fonction renvoie la valeur True si les 2 nombres en paramètres sont égaux
//ou False si ce n'est pas le cas
function isEqual(nbr1, nbr2) {
    // je teste si les 2 nombres sont strictement égaux (même valeur et même type)
    // avec l'opérateur d'égalité stricte et je retourne la valeur True ou False
    return nbr1 === nbr2;
}
// Afficher la sortie
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));

//Partie 2 : exercice 6 ----------------------------------------------------
//Cette fonction renvoie True si l'entier en entrée est divsible par 5 ou False
//si ce n'est pas le cas
function isDivisible(n) {
    // j'initialise x et lui attribue le reste de la division par 5 du nombre n donné
    // puis je teste si ce reste est 0 auquel cas je renvoie True, sinon False
    var x = n % 5;
    return x == 0;
}
// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

//Partie 2 : exercice 7 ----------------------------------------------------
//Cette fonction convertit deux entiers donnés (heures, minutes) en secondes
function hmTos(heure, minute) {
    // je déclare x, lui attribue la valeur heure*3600, je déclare y, lui attribue
    // la valeur minute*60 et je retourne la somme de x et y
    var x = heure * 3600;
    var y = minute * 60;
    return x + y;
}
// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

//Partie 2 : exercice 8 ----------------------------------------------------
//Cette fonction inverse l'ordre des éléments d'un tableau
function reverseTab(tab) {
    // j'initialise tabinv et x, je fais une boucle for avec un nombre d'occurence i
    // égal au nombre d'éléments du tableau tab à inverser, et à chaque occurence je place l'élément
    // de rang i de tab en comptant à partir du début (0) et je le place au rang x du tableau tabinv
    // en comptant à partir de la fin (tab.lenght-1-i), puis je retourne tabinv
    // 
    var tabinv = [];
    var x = 0;
    for (i=0; i < tab.length; i++) {
        x = tab.length - 1 - i;
        tabinv[i] = tab[x];
    }
    return tabinv;
}
// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

//Partie 2 : exercice 9 ----------------------------------------------------
//Cette fonction renvoie le dernier élément d'un tableau
function getLastElem(tab) {
    // Écrivez votre code ici
    return tab[tab.length - 1];
}
// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

console.log("Partie 3 ------------------------------------------------------")
//Partie 3 : exercice 1 ----------------------------------------------------
//Cette fonction teste l'égalité des paramètres a et b, et return True s'ils sont
// égaux ou False dans le cas contraire
function checkEq(a, b) {
    // je teste l'égalité stricte (valeur et type) entre a et b et je retourne
    // True si a et b sont strictement égaux ou False sinon
    return a === b;
}
// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

//Partie 3 : exercice 2 ----------------------------------------------------
//Cette fonction renvoie True si la chaîne donnée en paramètre est vide sinon renvoie False
function isEmpty(str) {
    // Écrivez votre code ici
    return str.length == 0;
}
// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

//Partie 3 : exercice 3 ----------------------------------------------------
//Cette fonction concatène les 2 chaînes données en une seule
function concatStr(str1, str2) {
    // j'initialize str et lui attribue la concaténation des 2 chaînes données
    // puis retourne str
    var str = str1 + str2;
    return str;
}
// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

//Partie 3 : exercice 4 ----------------------------------------------------
//Cette fonction renvoie une chaîne de caractère contenant le nomvdonné et un message d'accueil
const msg = name => 
// je place le nom donné à l'endroit voulu du message d'accueil et retourne le tout
`Hello ${name}, Welcome to WayToLearnX!`;
// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

//Partie 3 : exercice 5 ----------------------------------------------------
//Cette fonction retourne la longueur d'une chaîne (ne pas utiliser length)
// function size(str) {
//     // ça ne fonctionne pas, je ne sais pas pourquoi, je passe au suivant
//     var x = 0;
//     var tab = str.split();
//     if (tab[x] === undefined) {
//         return x;
//     }
//     do  {
//         x = x + 1;
//     } while (tab[x] !== undefined);
//     return x;
// }
// // Afficher la sortie
// console.log(size("alex"));
// console.log(size("x"));
// console.log(size(""));

//Partie 3 : exercice 6 ----------------------------------------------------
//Cette fonction renvoie True si 2 chaînes ont la même longueur, False sinon
function compareSize(str1, str2) {
    // je compare la longueur de str1 à celle de str2 et renvoie True si égale ou False sinon
    return str1.length === str2.length;
}
// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

//Partie 3 : exercice 7 ----------------------------------------------------
//Cette fonction prend la hauteur et la largeur d'un rectangle et retourne le périmètre
function getPerimeter(height, width) {
    // Écrivez votre code ici
    return (height + width) * 2
}
// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

//Partie 3 : exercice 8 ----------------------------------------------------
//Cette fonction renvoie le nombre total de pattes à partir des nombres d'animaux donnés
function nbrsPattes(poulets, vaches, chevaux) {
    // je compte 2 pattes par poulet, 4 par vache et 4 par cheval, et je retourne le total de pattes
    return poulets * 2 + vaches * 4 + chevaux * 4;
}
// Afficher la sortie
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

//Partie 3 : exercice 9 ----------------------------------------------------
//Cette fonction prend un nombre et retourne "pair" ou "impair" selon le cas
function check(n) {
    // j'évalue le reste de la division du nombre donné par 2 et retourne "pair"
    // s'il est égal = 0, "impair" sinon
    if (n % 2 == 0) {
        return "pair";
    } else {
        return "impair";
    }
}
// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));

console.log("Partie 4 ------------------------------------------------------")
//Partie 4 : exercice 1 ----------------------------------------------------
//Cette fonction concatène 2 tableaux d'entiers
function concatener(tab1, tab2) {
    // je concatène tab1 et tab2, et je retourne le tableau résultant de cette concaténation
    return tab1.concat(tab2);
}
// Afficher la sortie
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

//Partie 4 : exercice 2 ----------------------------------------------------
//Cette fonction trouve l'index d'un élément dans un tableau
function find(tab, val) {
    // j'initialise indice à -1, je boucle sur tous les éléments du tableau
    // jusqu'à trouver l'élément qui est égal à val, puis je retourne indice (si pas trouvé indice = -1)
    var indice = -1;
    for (i=0; i < tab.length; i++) {
        if (tab[i] == val) {
            indice = i;
            return indice;
        }
    }
    return indice;
}
// Afficher la sortie
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));

//Partie 4 : exercice 3 ----------------------------------------------------
//Cette fonction permet de vérifier si un nombre est présent dans un tableau
function nbrExist(tab, val) {
    // Écrivez votre code ici
    for (i=0; i < tab.length; i++) {
        if (tab[i] === val) {
            return "oui"
        }
    }
    return "non";
}
// Afficher la sortie
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));

//Partie 4 : exercice 4 ----------------------------------------------------
//Cette fonction vérifie si une chaïne se termine par 's' (True) ou pas (False)
function checkS(str) {
    // je teste si la chaïne se termine par 's' et renvoie True si oui ou False sinon
    return str.endsWith("s");
}
// Afficher la sortie
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));

//Partie 4 : exercice 5 ----------------------------------------------------
//Cette fonction renvoie True si la chaïne donnée contient un espace sinon renvoie False
function containSpaces(str) {
    // je teste si la chaïne contient un espace et renvoie True si oui ou False sinon
    return str.includes(" ");
}
// Afficher la sortie
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));

//Partie 4 : exercice 6 ----------------------------------------------------
//Cette fonction prend un objet et restitue une chaîne décrivant un individu
function formatPrs(personne) {
    // je place aux endroits adéquats dans une chaîne décrivant une personne
    // le nom, l'âge et l'adresse provenant de l'objet donné
    var str = personne.nom + " a " + personne.age + " ans. Il habite à " + personne.adresse + ".";
    return str; 
}
// Afficher la sortie
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));

//Partie 4 : exercice 7 ----------------------------------------------------
//Cette fonction renvoie une phrase à partir d'un mot donné, si pas de mot alors
//renvoie une autre phrase
function myFeeling(feeling) {
    // je teste si le mot passé en paramètre est vide, si oui je retourne la phrase neutre
    // sinon je retourne la phrase avec feeling
    if (feeling == undefined) {
        return "Aujourd'hui je me sens neutre";
    } else {
        return "Aujourd'hui je me sens " + feeling;
    }
}
// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());

//Partie 4 : exercice 8 ----------------------------------------------------
//Cette fonction renvoie le nombre d'argument avec lesquels ell a été appelée
function nbrArgs() {
    // je retourne le nombre d'éléments contenu dans l'objet arguments de la fonction
    return arguments.length;
}
// Afficher la sortie
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));

//Partie 4 : exercice 9 ----------------------------------------------------
//Cette fonction vérifie si le mot donné est pluriel ou singulier c.-à-d. s'il se termine
//par 's' ou pas, et renvoie True si oui, False sinon
function recheck(str) {
    // déjà vu dans l'exercice 4 de la partie 4
    return str.endsWith("s");
}
// Afficher la sortie
console.log(recheck("enfants"));
console.log(recheck("filles"));
console.log(recheck("fille"));
console.log(recheck("enfant"));

console.log("Partie 5 ------------------------------------------------------")
//Partie 5 : exercice 1 ----------------------------------------------------
//Cette fonction prend un entier et renvoi "Hello", "World" ou "Hello World" selon
//que l'entier est multiple de 3, 5 ou des deux, respectivement
function checkNbr(n) {
    // je teste si n est multiple de 3 et de 5, si oui je retourne "Hello World", sinon
    // je teste si n est multiple de 3, si oui je retourne "Hello", sinon
    // je teste si n est multiple de 5, si oui je retourne "World"
    if ((n % 3) == 0 && (n % 5) == 0) {
        return "Hello World";
    } else if (n % 3 == 0) {
        return "Hello";
    } else if (n % 5 == 0) {
        return "World";
    }
}
// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

//Partie 5 : exercice 2 ----------------------------------------------------
//j'ai strictement rien compris à l'expression de var patt = what ???
var str = "242Welcome23 45to344 254324WayToLearnX!";
var patt = /\D */g;
var result = str.match(patt);
console.log(result.join(""));

//Partie 5 : exercice 3 ----------------------------------------------------
//Cette fonction prend un tableau et retourne ce tableau avec chacune de ses valeurs * 2
function tabX2(tab) {
    // j'initialise tab2, je boucle sur le contenu de tab, multiplie chaque élément de tab par 2 et
    // place le résultat dans tab2, et enfin retourne tab2
    var tab2 = [];
    for (i=0; i < tab.length; i++) {
        tab2[i] = tab[i] * 2;
    }
    return tab2;
}
// Afficher la sortie
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

//Partie 5 : exercice 4 ----------------------------------------------------
//Cette fonction prend trois nombre et vérifie si ces 3 nombres définissent un triangle
//si oui renvoie True sinon False
function isTriangle(a, b, c) {
    // je teste si la somme de 2 côtés est bien supérieure au troisième dans tous les 
    // cas (3 cas donc), si oui je retourne True sinon False
    return (a + b > c) && (a + c > b) && (b + c > a);
}
// Afficher la sortie
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

//Partie 5 : exercice 5 ----------------------------------------------------
//Cette fonction renvoie le code ASCII du caractère donné
function charToAscii(c) {
    // j'utilise la méthode charCodeAt (à l'indice 0 puisque la "chaîne" c n'a qu'un
    // caractère) et je retourne le code que me donne la méthode  
    return c.charCodeAt(0);
}
// Afficher la sortie
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));



