/* eslint-disable no-new */
import Character from '../js/app';
import Bowerman from '../js/Bowerman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import MathCharacter from '../js/MathCharacter';

test('should show error name if not in 2&10', () => {
  expect(() => {
    new Character('Gl', 'Magician', 0, 0);
  }).toThrow();
});

test('should show error name if not String ', () => {
  expect(() => {
    new Character(10, 'Magician', 0, 0);
  }).toThrow();
});

test('should show error type if not String ', () => {
  expect(() => {
    new Character('Gleb', 10, 0, 0);
  }).toThrow();
});

test('should show error type if not access type ', () => {
  expect(() => {
    new Character('Gleb', 'Sword', 0, 0);
  }).toThrow();
});

test('should setted this.name', () => {
  const expected = 'Gleb';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.name).toEqual(expected);
});

test('should setted this.type', () => {
  const expected = 'Swordsman';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.type).toEqual(expected);
});

test('should setted this.type in class Bowerman', () => {
  const expected = 'Bowman';
  const character = new Bowerman('Gleb', 'Bowman', 25, 25);
  expect(character.type).toEqual(expected);
});

test('should setted this.attack in class Bowerman', () => {
  const expected = 25;
  const character = new Bowerman('Gleb', 'Bowman', 25, 20);
  expect(character.attack).toEqual(expected);
});

test('should setted this.defence in class Bowerman', () => {
  const expected = 20;
  const character = new Bowerman('Gleb', 'Bowman', 25, 20);
  expect(character.defence).toEqual(expected);
});

describe('check work class MathCharacter', () => {
  it('expected default setted attack if stonned = false & distance = 1', () => {
    const math = new MathCharacter('Gleb', 'Magician', 80, 30);
    const expected = 80;
    expect(math.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const math = new MathCharacter('Gleb', 'Magician', 80, 30, false, 3);
    const expected = 64;
    expect(math.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const math = new MathCharacter('Gleb', 'Magician', 80, 30, true, 3);
    const expected = 58;
    expect(math.attack).toEqual(expected);
  });
  it('expected attact = -1 if stonned = false & distance = 5', () => {
    const math = new MathCharacter('Gleb', 'Magician', 10, 30, true, 5);
    const expected = -1;
    expect(math.attack).toEqual(expected);
  });
  it('expected setted this.distance', () => {
    const math = new MathCharacter('Gleb', 'Magician', 80, 30, true, 3);
    const expected = 3;
    expect(math.distance).toEqual(expected);
  });
  it('expected setted this.stoned', () => {
    const math = new MathCharacter('Gleb', 'Magician', 80, 30, true, 3);
    const expected = true;
    expect(math.stoned).toEqual(expected);
  });
});
describe('check work class Magician', () => {
  it('expected default setted attack if stonned = false & distance = 1', () => {
    const magician = new Magician('Gleb', 'Magician', 80, 30);
    const expected = 80;
    expect(magician.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const magician = new Magician('Gleb', 'Magician', 80, 30, false, 3);
    const expected = 64;
    expect(magician.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const magician = new Magician('Gleb', 'Magician', 80, 30, true, 3);
    const expected = 58;
    expect(magician.attack).toEqual(expected);
  });
  it('expected attact = -1 if stonned = false & distance = 5', () => {
    const magician = new Magician('Gleb', 'Magician', 10, 30, true, 5);
    const expected = -1;
    expect(magician.attack).toEqual(expected);
  });
});
describe('check work class Daemon', () => {
  it('expected default setted attack if stonned = false & distance = 1', () => {
    const daemon = new Daemon('Gleb', 'Daemon', 80, 30);
    const expected = 80;
    expect(daemon.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const daemon = new Daemon('Gleb', 'Daemon', 80, 30, false, 3);
    const expected = 64;
    expect(daemon.attack).toEqual(expected);
  });
  it('expected lowered attack if stonned = false & distance = 3', () => {
    const daemon = new Daemon('Gleb', 'Daemon', 80, 30, true, 3);
    const expected = 58;
    expect(daemon.attack).toEqual(expected);
  });
  it('expected attact = -1 if stonned = false & distance = 5', () => {
    const daemon = new Daemon('Gleb', 'Daemon', 10, 30, true, 5);
    const expected = -1;
    expect(daemon.attack).toEqual(expected);
  });
});

