const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

let result = {};
let joker;
const arrHour = Object.entries(data.hours);

function monday() {
  if (joker === 'Monday') {
    result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return result;
}

function allCrono() {
  joker.forEach((day) => {
    if (day === 'Monday') {
      result[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return result;
    }
    const filterAnimals = data.species
      .filter((value) => value.availability.some((val) => val === day));
    const arrAnimals = filterAnimals.map((animal) => animal.name);
    const dayAnimal = arrHour.find((value) => value[0] === day);
    const string = `Open from ${dayAnimal[1].open}am until ${dayAnimal[1].close}pm`;
    const info = { officeHour: string, exhibition: arrAnimals };
    result[day] = info;
  });
  return result;
}
function paramDay() {
  monday();
  const filterAnimals = data.species
    .filter((value) => value.availability.some((val) => val === joker));
  const arrAnimals = filterAnimals.map((animal) => animal.name);
  const dayAnimal = arrHour.find((value) => value[0] === joker);
  const string = `Open from ${dayAnimal[1].open}am until ${dayAnimal[1].close}pm`;
  const info = { officeHour: string, exhibition: arrAnimals };
  const object = {};
  object[joker] = info;
  result = object;
  return result;
}

function codeConditional() {
  const verificateAnimal = species.some((animal) => animal.name === joker);
  const verificateDay = arrHour.some((day) => day[0] === joker);
  if (joker === undefined) {
    joker = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return allCrono();
  }
  if (verificateAnimal === true) {
    const animalDay = species.find((animal) => animal.name === joker).availability;
    result = animalDay;
  }
  if (verificateDay === true) {
    // joker = scheduleTarget;
    return paramDay();
  }
}

function isNotZoo() {
  const verificateAnimal = species.some((animal) => animal.name === joker);
  const verificateDay = arrHour.some((day) => day[0] === joker);
  if (verificateAnimal === false && verificateDay === false) {
    joker = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return allCrono();
  }
}

function getSchedule(scheduleTarget) {
  joker = scheduleTarget;
  isNotZoo();
  codeConditional();
  monday();
  return result;
}
console.log(getSchedule());
module.exports = getSchedule;
