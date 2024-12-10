let waves = []; // Pole uchovávající všechny vlny

// Třída pro reprezentaci jednotlivých vln
class Wave {
  constructor(x, y) {
    this.x = x;          // X-ová souřadnice středu vlny
    this.y = y;          // Y-ová souřadnice středu vlny
    this.radius = 0;     // Počáteční poloměr vlny
    this.opacity = 255;  // Počáteční průhlednost vlny
  }

  // Metoda pro vykreslení vlny
  display() {
    noFill();
    stroke(0, 0, 255, this.opacity); // Modrá barva s průhledností
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius * 2);
  }

  // Metoda pro aktualizaci vlastností vlny
  update() {
    this.radius += 2; // Poloměr vlny se zvětšuje
    this.opacity -= 3; // Průhlednost se snižuje
  }

  // Metoda pro kontrolu, zda je vlna již "mrtvá"
  isDead() {
    return this.opacity <= 0;
  }
}

function setup() {
  createCanvas(800, 600); // Nastavení velikosti plátna
}

function draw() {
  background(200, 230, 255); // Světle modré pozadí

  // Aktualizace a vykreslení všech vln
  for (let i = waves.length - 1; i >= 0; i--) {
    waves[i].update();
    waves[i].display();

    // Pokud je vlna "mrtvá", odstraníme ji z pole
    if (waves[i].isDead()) {
      waves.splice(i, 1);
    }
  }
}

// Vytvoření nové vlny na místě kliknutí myší
function mousePressed() {
  waves.push(new Wave(mouseX, mouseY));
}