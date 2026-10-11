Inhalt: Objekte, Klassen (Automatisierung)

Erkenntnisse: 
- einzelne nicht anpassbare objekte werden unter einer Variable gespeichert.
  
- "this" ist ein dynamischer Platzhalter , der immer auf das Objekt verweist in dem es steht. Es hilft den Code bei Namensänderungen des Objekts oder auch bei Klassen, d.h. anpassbaren Objekten auf das Objekt, das gerade ausgeführt wird zu verweisen.
  
- Methoden: Objektfunktionen,also eigenschaften von Objekten, die simultan ein Funktion sind. Beim Aufrufen müssen die Klammern ebenfalls geschrieben werden

DYNAMISCHE OBJEKTE

- Konstruktorfunktionen: Funktionen, die durch Parameter und das Schlüsselwort new, dynamische Werte für "Eigenschaften" (Variablen in der Funktion) erstellen können und somit als Prototyp für andere Objekte gelten können.

- Konstruktor: Ein Konstruktor ist der interne Bauplan einer Klasse – eine spezielle Funktion, die automatisch ausgeführt wird, sobald du ein neues Objekt mit new erstellst, um dessen Startwerte festzulegen.

- Klassen:
  Vorteile:
- Saubere Struktur: Eigenschaften und Methoden stehen gebündelt in einem Block statt verstreut im Code.
- Leichtere Lesbarkeit: Intuitive Syntax (class und constructor), die man sofort versteht.
- Einfache Wiederverwendung: Code lässt sich über Vererbung (extends) blitzschnell erweitern.

  new:
- Sicherer Code: JavaScript erzwingt das Schlüsselwort new – das verhindert Fehler (undefined).
- Objekt-Geburt: Signalisiert JavaScript, ein brandneues, leeres Objekt im Speicher zu erstellen.
- this-Bindung: Richtet das Wort this so ein, dass es direkt auf das neue Objekt zeigt.
- Auto-Rückgabe: Sorgt dafür, dass das fertige Objekt automatisch zurückgegeben wird (kein manuelles return nötig).


Bemerkungen: 
