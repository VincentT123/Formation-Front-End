function maFonction() {
    console.log("Hello World !");
}

maFonction();

function saisirNom() {
    var nom = prompt("Quel est vorte nom ?");
    console.log(nom);
    var conf = confirm("Vous appelez-vous :" + nom);
    if (conf) {
        alert("Bonjour " + nom);
    }
}


function test() {

    var a = "3";
    var b = "5";
    var c = a + b;


    window.document.writeln("Type et valeur des variables :");
    document.write("<br/>");
    window.document.writeln("------------------------------");
    document.write("<br/>");
    window.document.writeln("a : " + a + " " + typeof (a));
    document.write("<br/>");
    window.document.writeln("b : " + b + " " + typeof (b));
    document.write("<br/>");
    window.document.writeln("c : " + c + " " + typeof (c));
    document.write("<br/>");

    var a = parseInt(a);
    var b = parseInt(b);
    var c = a + b;

    window.document.writeln("Type et valeur des variables :");
    document.write("<br/>");
    window.document.writeln("------------------------------");
    document.write("<br/>");
    window.document.writeln("a : " + a + " " + typeof (a));
    document.write("<br/>");
    window.document.writeln("b : " + b + " " + typeof (b));
    document.write("<br/>");
    window.document.writeln("c : " + c + " " + typeof (c));
    document.write("<br/>");
    // comments
}

function testZ() {
    var x = -3;
    if (x > 0) {
        console.log(x + " est strictement positif");
    }
    else if (x < 0) {
        console.log(x + " est strictement négatif");
    }
    else {
        console.log(x + " est nul");
    }
}

function testZerodix() {
    for (var i=1;i<11;i++) {
        //i += 2 permet d'incrémenter directement de 2 en 2
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

testZerodix();


