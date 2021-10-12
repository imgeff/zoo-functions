const data = require('../data/zoo_data');

// const entrantss = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const result = {};
  const child = entrants.filter((value) => value.age < 18);
  const adult = entrants.filter((value) => value.age >= 18 && value.age < 50);
  const senior = entrants.filter((value) => value.age >= 50);
  result.child = child.length;
  result.adult = adult.length;
  result.senior = senior.length;

  return result;
}
// console.log(countEntrants(entrantss));
function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }

  const childPrice = countEntrants(entrants).child * data.prices.child;
  const adultPrice = countEntrants(entrants).adult * data.prices.adult;
  const seniorPrice = countEntrants(entrants).senior * data.prices.senior;
  const totalPrice = childPrice + adultPrice + seniorPrice;
  return totalPrice;
}
// console.log(calculateEntry(countEntrants(entrantss)));
module.exports = { calculateEntry, countEntrants };
