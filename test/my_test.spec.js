const chai = require('chai');
const index = require('../index.js');
const cardValidator = index.cardValidator;
const expect = chai.expect;

describe ('isValidCard()', () => {
  it ('Deveria retornar true para o número 5234210287767604', () => {
    expect(cardValidator(5234210287767604)).to.equal(true);
  });
  it ('Deveria retornar false para o número 08650001769129301', () => {
    expect(cardValidator(08650001769129301)).to.equal(false);
  });
  it ('Deveria retornar false para "string"', () => {
    expect(() => cardValidator("cartão")).to.throw("Necessário inserir os números para verificação");
  });
  it ('Deveria retornar false para string vazia ("")', () => {
    expect(() => cardValidator()).to.throw("Necessário inserir os números para verificação");
  });
  it ('Deveria retornar false para valor com um dígito', () => {
    expect(() => cardValidator(7)).to.throw("Necessário mais de 1 dígito para verificação");
  });
});