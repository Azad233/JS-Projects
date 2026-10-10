const kontakt1 = {
  name: "Azad",
  telefon: "04917220807682",
  email: "azadd1622@gmail.com",
  anzeigen(){
    console.log(this.name, this.telefon, this.email)
    },
    telefonAendern(neueNummer){
      this.telefon = neueNummer
      console.log(this.telefon)
    },
  };

kontakt1.anzeigen()
kontakt1.telefonAendern("07847098524")

const kontakt2 = {
  name: "Sufian",
  telefon: "0849787528740",
  email: "sufian@jdkj.de",
  anzeigen(){
    console.log(this.name, this.telefon, this.email)
    },
    telefonAendern(neueNummer){
      this.telefon = neueNummer
      console.log(this.telefon)
    },
  }

kontakt2.anzeigen()

const kontakt3 = {
  name: "Mo",
  telefon: "07890285789",
  email: "Mo@Kino.de",
  anzeigen(){
    console.log(this.name, this.telefon, this.email)
    },
    telefonAendern(neueNummer){
      this.telefon = neueNummer
      console.log(this.telefon)
    },
}

kontakt3.anzeigen()

// VERALLGEMEINERUNG UND AUTOMATISIERUNG VON OBJEKTEN

class buch {
  constructor (titel, autor, seiten) {
    this.titel= titel, 
    this.autor= autor,
    this.seiten= seiten
  }
  
  ausgeliehen= false;

  ausleihen() {
    if (this.ausgeliehen == false){
      this.ausgeliehen = true
    }
    else {
      console.log(`Das Buch ${this.titel} wurde bereits ausgeliehen`)
    }
  }

zurueckgeben(){
  if (this.ausgeliehen == true){
      this.ausgeliehen = false
    }
    else {
    console.log(`Das Buch ${this.titel} wurde noch nicht ausgeliehen`)
    }
}

info(){
  console.log(this.titel, this.autor, this. seiten)
}

}

const herrDerRinge = new buch ("herrDerRinge1", "marieVirage", 785)
const harryPotter = new buch ("steinDerWeisen", "jkRowling", 312)
const atomicHabits = new buch ("atomicHabits1", "christophCarr",537)
const influence = new buch ("einfluss", "markGold", 784)
const kapital = new buch ("kapital1", "karlMarx", 875)

kapital.ausleihen()
kapital.ausleihen()
kapital.zurueckgeben()
kapital.zurueckgeben()

