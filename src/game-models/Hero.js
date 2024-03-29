// Наш герой.

class Hero {
  constructor({ nickname = 'Pasha', position = 0 } = {}) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.nickname = nickname;
  }

  // fdf
  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
