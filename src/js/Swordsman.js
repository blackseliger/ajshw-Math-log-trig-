import Character from './app';

class Swordsman extends Character {
  show() {
    console.log(this);
  }
}

const swordsman = new Swordsman('John', 'Swordsman', 40, 10);
swordsman.show();
