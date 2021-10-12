const data = require('../data/zoo_data');

function verificateParam() {
  const result = {};

  data.species.map((value) => {
    result[`${value.name}`] = value.residents.length;
    return result;
  });
  return result;
}
function countAnimals(animal) {
  let countAnimalsOfSpecie;
  if (animal === undefined) {
    return verificateParam();
  }
  const findSpecie = data.species.filter((value) => value.name === animal.specie);
  if (Object.values(animal).length === 1) {
    countAnimalsOfSpecie = findSpecie.map((value) => value.residents.length).join();
    return Number(countAnimalsOfSpecie);
  }
  if (Object.values(animal).length === 2) {
    countAnimalsOfSpecie = findSpecie
      .map((value) => value.residents
        .filter((val) => val.sex === animal.sex))[0].length;
    return countAnimalsOfSpecie;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
