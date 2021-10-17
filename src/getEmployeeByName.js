const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  if (employeeName === undefined) {
    return {};
  }
  const findEmploy = data.employees
    .find((employ) => employ.firstName === employeeName || employ.lastName === employeeName);
  return findEmploy;
}
module.exports = getEmployeeByName;
