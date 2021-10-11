const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
  return employees.some((manager) => manager.id === id && manager.managers.length <= 1);
}
// console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
function getRelatedEmployees(managerId) {
  // se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  // se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
  if (isManager(managerId) === true) {
    const man = employees
      .filter((employ) => employ.managers.find((value) => value === managerId));
    const manRes = man
      .map((value) => `${value.firstName} ${value.lastName}`);
    return manRes;
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
