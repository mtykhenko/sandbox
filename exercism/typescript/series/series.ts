export class Series {
  series: string;

  constructor(series: string) {
    if (!series) {
      throw new Error('series cannot be empty');
    }

    this.series = series;
  }

  slices(sliceLength: number): number[][]{
    this.validatePreconditions(sliceLength);

    let slices: number[][] = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      slices.push(this.series.substring(i, i + sliceLength).split('').map(value => Number(value)));
    }

    return slices;
  }

  validatePreconditions(sliceLength: number) {
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }

    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    }
  }
}
