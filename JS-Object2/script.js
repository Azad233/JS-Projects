const a = {
  name: "Ali",
  adresse: { stadt: "Frankfurt" }   // Objekt im Objekt
};

const b = a
const c = {...a}
const d = structuredClone(a)

b.name = "Bob";
c.name = "hund"
c.adresse.stadt = "Berlin";
d.adresse.stadt = "Hamburg";

console.log(c)
console.log(a);
console.log(d)
console.log(a.adresse === c.adresse)
console.log(a.adresse === d.adresse)

// Projekt

const spieler = {
  name: "Mia",
  punkte: 10,
  inventar: { waffe: "Schwert", traenke: 2 },
  freunde: ["Ali", "Bob"]
};

const sicherung1 = {...spieler}
const sicherung2 = structuredClone(spieler)

spieler.punkte = 50
sicherung1.inventar.traenke = 0
sicherung1.freunde.push("Azad")

console.log(sicherung1, sicherung2, spieler)

console.log(Object.keys(spieler), Object.entries(spieler))


const buch = {
  name: "Stein der Weisen",
  autor: "JK Rowling",
  anzeigen(){
    console.log(this.name)
  }
}
const Kopie = structuredClone(buch)
