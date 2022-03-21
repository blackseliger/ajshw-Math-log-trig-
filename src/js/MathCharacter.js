/* eslint-disable no-underscore-dangle */
import Character from './app';

export default class MathCharacter extends Character {
  constructor(name, type, attack, defence, stoned = false, distance = 1) {
    super(name, type, defence);
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  static distancePercentage = {
    1: 0,
    2: 0.1,
    3: 0.2,
    4: 0.3,
    5: 0.4,
  };

  get attack() {
    // eslint-disable-next-line no-return-assign
    this._attack = Math.floor(
      this._attack - this._attack * MathCharacter.distancePercentage[this.distance],
    );

    if (this.stoned) this._attack = Math.floor(this._attack - Math.log(this.distance) * 5);
    if (this._attack <= 0) this._attack = -1;
    return this._attack;
  }

  set attack(value) {
    if (value <= 0) this._attack = 0;
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

const math = new MathCharacter('gleb', 'Magician', 10, 30, true, 5);
// console.log(math);
console.log(math.attack);
