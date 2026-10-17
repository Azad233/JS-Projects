const spieler = {
  name: "Mia",
  punkte: 0,
  titel: "",
  gilde: null,
  bonus: undefined,
  inventar: { schwert: { schaden: 10 }, trank: { anzahl: 2 } }
};

function hatEigenschaft(obj, prop){
    return Object.hasOwn(obj, prop)
    
}

function enthalten(obj, prop){
   return prop in obj
}



function loeschen(obj, prop){
    const existierte = Object.hasOwn(obj, prop)
    delete obj[prop]
    return existierte
}

console.log(hatEigenschaft(spieler, "name"))
console.log(hatEigenschaft(spieler, "alter"))
console.log(hatEigenschaft(spieler, "bonus"))
console.log(hatEigenschaft(spieler, "toString"))

console.log(enthalten(spieler, "name"))
console.log(enthalten(spieler, "alter"))
console.log(enthalten(spieler, "bonus"))
console.log(enthalten(spieler, "toString"))

console.log(loeschen(spieler, "name"))
console.log(loeschen(spieler, "alter"))
console.log(loeschen(spieler, "bonus"))
console.log(loeschen(spieler, "toString"))

// Pruefung fuer die Existenz meherer Felder

function fehlendeFelder(obj, pflichtfelder) {
    const fehlend = [];

    for (const feld of pflichtfelder) {
        if (!Object.hasOwn(obj, feld)) { // Ausrufezeichen dreht den Boolean-Wert um
            fehlend.push(feld);
        }
    }

    return fehlend;
}

console.log(fehlendeFelder(spieler, ["name", "alter", "level"])); // ["alter", "level"]
console.log(fehlendeFelder(spieler, ["name"]));                   // []

const o = { name: "Ada", alter: undefined };

console.log("name" in o);              // Zeile 1: true
console.log("alter" in o);             // Zeile 2: true
console.log("toString" in o);          // Zeile 3: true
console.log(Object.hasOwn(o, "toString")); // Zeile 4: false
console.log(Object.hasOwn(o, "alter"));    // Zeile 5: true

function hatPfad(obj, pfad) {
    let aktuell = obj;
    for (const schluessel of pfad) {
        if (aktuell === null || aktuell === undefined) return false;
        if (!Object.hasOwn(aktuell, schluessel)) return false;
        aktuell = aktuell[schluessel];
    }
    return true;
}  

console.log(hatPfad(spieler, ["inventar", "schwert", "schaden"]))
console.log(hatPfad(spieler, ["inventar", "bogen", "schaden"]))
console.log(hatPfad(spieler, ["ruestung", "wert"]))

// noch eine Übung für die Prüfung von den Pfaden verschachtlter Objekte

const user = {
    name: "max",
    ping: 57,
    adresse: {straße: "fischweg", hausnummer: {zahl: 354, block: "a"}, plz: {plzStadt: 60, plzGebiet: 453}}
}

function holePfad(obj, pfad, standard){
    let neu = obj;
    for (const schluessel of pfad){
        if (neu === null  || neu === undefined) return standard;
        if (!Object.hasOwn(neu, schluessel)) return standard;
        neu = neu[schluessel]
    }
    return true

}

console.log(holePfad(user.adresse.hausnummer.block, "Daten existieren nicht in dieser Zurodnung"))
console.log(holePfad(user, ["adresse", "straße", "hausnummer", "zahl", "block", "plz", "plzStadt", "plzGebiet"], "Daten existieren nicht in dieser Zurodnung")) 

// console.assert

const produkt = (a, b, c ) => a*b*c

console.assert(produkt(5,6,2) === 76, "Das Ergebnis stimmt nicht")

