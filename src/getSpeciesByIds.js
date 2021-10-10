// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...idsSpecies) {
  // seu código aqui
  if (idsSpecies === 'undefined') {
    return [];
  }
  const array = [];
  idsSpecies.forEach((idSpecie) => data.species.filter((value) => {
    if (value.id === idSpecie) {
      array.push(value);
    }
    return array;
  }));
  return array;
}
module.exports = getSpeciesByIds;
