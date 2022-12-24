export function classify(num: number): string {
  if (num > 0) {
    if (num === 1) {
      return 'deficient';
    }

    let aliquotSum = [...Array(num).keys()].filter(value => value > 0 && num % value === 0).reduce((sum, value) => sum + value);
    if (aliquotSum === num) {
      return 'perfect';
    } else {
      return aliquotSum > num ? 'abundant' : 'deficient';
    }
  }

  throw new Error('Classification is only possible for natural numbers.');
}
