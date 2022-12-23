const condonProteinMapping = new Map<string,string>([
  ['AUG',	'Methionine'],
  ['UUU',	'Phenylalanine'],
  ['UUC',	'Phenylalanine'],
  ['UUA',	'Leucine'],
  ['UUG',	'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU',	'Tyrosine'],
  ['UAC',	'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC',	'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA',	'STOP'],
  ['UAG',	'STOP'],
  ['UGA',	'STOP']
]);

export function translate(input: string): string[] {
  let condonArray = input.match(/.{1,3}/g) || [];
  
  let stopIndex = condonArray.findIndex(condon => condonProteinMapping.get(condon) === 'STOP');
  if (stopIndex < 0) {
    stopIndex = condonArray.length;
  }
  
  return condonArray.slice(0, stopIndex).map(condon => condonProteinMapping.get(condon) || '');
}
