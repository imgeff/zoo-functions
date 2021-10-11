const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecie = data.species.filter((value) => value.name === animal);
  const findAnimalsOfSpecie = findSpecie.map((val) => val.residents);
  const verificateAgeOfAnimals = findAnimalsOfSpecie.every((value) => value[0].age > age);
  return verificateAgeOfAnimals;
}

module.exports = getAnimalsOlderThan;
