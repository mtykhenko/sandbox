export function compute(left: string, right: string): number {
  if (left.length === right.length) {
    return left.split('').reduce((hammingDistance, leftChar, leftCharIndex) => 
                                  leftChar !== right[leftCharIndex] ? ++hammingDistance : hammingDistance
                                  , 0);;
  }

  throw new Error('DNA strands must be of equal length.');
}
