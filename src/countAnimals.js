const data = require('../data/zoo_data');

let countAnimalsOfSpecie;
let filterSpecie;
function verificateUndefined(animal) {
  if (animal === undefined) {
    countAnimalsOfSpecie = {};
    data.species.map((value) => {
      countAnimalsOfSpecie[`${value.name}`] = value.residents.length;
      return countAnimalsOfSpecie;
    });
  }
  return countAnimalsOfSpecie;
}
function filter(animal) {
  if (animal !== undefined) {
    filterSpecie = data.species.filter((value) => value.name === animal.specie);
    return filterSpecie;
  }
}
function countAnimalByName(animal) {
  if (animal !== undefined && Object.values(animal).length === 1) {
    countAnimalsOfSpecie = filterSpecie.map((value) => value.residents.length);
    countAnimalsOfSpecie = Number(countAnimalsOfSpecie[0]);
    return countAnimalsOfSpecie;
  }
}
function countAnimalsBySex(animal) {
  if (animal !== undefined && Object.values(animal).length === 2) {
    const animalsOfSpecie = filterSpecie.map((value) => value.residents);
    const filterAnimalsOfSex = animalsOfSpecie[0].filter((val) => val.sex === animal.sex);
    countAnimalsOfSpecie = filterAnimalsOfSex.length;
    return countAnimalsOfSpecie;
  }
}
function countAnimals(animal) {
  verificateUndefined(animal);
  filter(animal);
  countAnimalByName(animal);
  countAnimalsBySex(animal);
  return countAnimalsOfSpecie;
}

module.exports = countAnimals;
