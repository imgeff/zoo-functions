const data = require('../data/zoo_data');

function getSpeciesByIds(...idsSpecies) {
  const arrayInfoOfSpecies = [];
  if (idsSpecies === undefined) return [];
  idsSpecies.forEach((idSpecie) => data.species.filter((value) => {
    if (value.id === idSpecie) arrayInfoOfSpecies.push(value);
    return arrayInfoOfSpecies;
  }));
  return arrayInfoOfSpecies;
}
module.exports = getSpeciesByIds;
