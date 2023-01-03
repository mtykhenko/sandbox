export function isValid(isbn: string): boolean {
  return isbnFormatIsValid(isbn) && isbnChecksumValid(isbn);
}

const isbnFormatIsValid = function (isbn: string): boolean {
  return /(?=.{10,13}$)\d-*\d{3}-*\d{5}-*[\d|X]/.test(isbn);
}

const isbnChecksumValid = function (isbn: string): boolean {
  return isbn.replaceAll('-', '').split('')
             .map((digitValue: string, index: number) => 'x' === digitValue.toLocaleLowerCase() ? 10 : +digitValue * (10 - index))
             .reduce((a: number, b: number) => a + b) % 11 === 0;
}
