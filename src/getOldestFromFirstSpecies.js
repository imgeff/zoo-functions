const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  //  seu código aqui
  const findEmploy = data.employees.filter((employ) => employ.id === id);
  const findIdSpecieOfEmploy = findEmploy.map((animal) => animal.responsibleFor[0]);
  const findSpecieOfId = data.species.filter((specie) => specie.id === findIdSpecieOfEmploy[0]);
  const findAnimalsOfSpecie = findSpecieOfId.map((animals) => animals.residents);
  const findAgeAnimalOfSpecie = findAnimalsOfSpecie[0].map((animal) => animal.age);
  const orderAgeOfAnimals = findAgeAnimalOfSpecie.sort((a, b) => b - a);
  const OldAnimalOfSpecie = findAnimalsOfSpecie[0]
    .find((animal) => animal.age === orderAgeOfAnimals[0]);
  const { name, sex, age } = OldAnimalOfSpecie;
  const OldAnimalOfSpecieArray = [name, sex, age];
  return OldAnimalOfSpecieArray;
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
