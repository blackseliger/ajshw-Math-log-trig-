import Character from './app';

class Zombie extends Character {
  show() {
    console.log(this);
  }
}

const zombie = new Zombie('John', 'Zombie', 40, 10);
zombie.show();
