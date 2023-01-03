export class Matrix {
  rows: number[][];
  columns: number[][]; 

  constructor(data: string) {
    this.rows = [];
    this.columns = [];

    data.split('\n').forEach(row => {
      this.rows.push(row.split(' ').map(val => Number(val)));
    });

    this.columns = Object.keys(this.rows[0]).map(index => {
      return this.rows.map(row => row[Number(index)]);
    });
  }

}
