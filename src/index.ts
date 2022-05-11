function isLengthValid(nif: string): boolean {
  return nif.length === 9;
}

const FIRST_DIGIT = ["1", '2', '3', '5', '6', '8'];
const FIRST_TWO_DIGITS = ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99'];

function getTotal(nif: string): number {
  return (
    Number(nif[0]) * 9 +
    Number(nif[1]) * 8 +
    Number(nif[2]) * 7 +
    Number(nif[3]) * 6 +
    Number(nif[4]) * 5 +
    Number(nif[5]) * 4 +
    Number(nif[6]) * 3 +
    Number(nif[7]) * 2
  );
}

export default function validateNIF(nif: string): boolean {
  if (!isLengthValid(nif)) return false;
  if (!FIRST_DIGIT.includes(nif.substring(0, 1)) && !FIRST_TWO_DIGITS.includes(nif.substring(0, 2))) return false;
  const remainder11 = getTotal(nif) % 11;
  const checkDigit = remainder11 < 2 ? 0 : 11 - remainder11;
  return checkDigit === Number(nif[8]);
}
