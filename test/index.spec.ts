import validateNIF from '../src/index';

describe('Tests the NIF - Numero de Identificação Fiscal', () => {
  test('Passes for a valid NIF', () => {
    expect(validateNIF('123456789')).toBeTruthy();
  });

  test('Fails for an invalid NIF', () => {
    expect(validateNIF('1234567890')).toBeFalsy();
  });
});
