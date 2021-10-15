const data = require('../data/zoo_data');

const result = {};
const location = data.species.map((value) => value.location);
const animalsFromNE = data.species
  .filter((value) => value.location === 'NE')
  .map((value) => value.name);
const animalsFromNW = data.species
  .filter((value) => value.location === 'NW')
  .map((value) => value.name);
const animalsFromSE = data.species
  .filter((value) => value.location === 'SE')
  .map((value) => value.name);
const animalsFromSW = data.species
  .filter((value) => value.location === 'SW')
  .map((value) => value.name);

function getAnimalMap(options) {
  if (options.includeNames === true) {
    const [NE, NW, SE, SW] = location;
    const [lions, giraffes] = animalsFromNE;
    result[NE] = [];
  }
}

console.log(getAnimalMap({ includeNames: true }));
// console.log(animalsFromNE);
module.exports = getAnimalMap;
