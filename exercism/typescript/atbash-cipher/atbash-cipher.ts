const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
const tebahpla: string = "zyxwvutsrqponmlkjihgfedcba";

export function encode(plainText: string): string {
  return groupBy5(atbash(plainText));
}

function groupBy5(text: string): string {
  return (text.match(/.{1,5}/g) || []).join(' ');
}

export function decode(cipherText: string): string {
  return atbash(cipherText);
}

function atbash(text: string): string {
  return text.toLocaleLowerCase().replace(/\W/g, '').split('')
             .map(char => /[^a-z]/.test(char) ? char : tebahpla[alphabet.indexOf(char)]).join('');
  
}