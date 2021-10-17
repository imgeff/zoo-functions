const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filterSpecie = data.species.filter((value) => value.name === animal);
  const allAnimalsOfSpecie = filterSpecie.map((val) => val.residents);
  const verificateAgeOfAnimals = allAnimalsOfSpecie.every((value) => value[0].age > age);
  return verificateAgeOfAnimals;
}
module.exports = getAnimalsOlderThan;
