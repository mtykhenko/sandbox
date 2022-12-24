export class DiffieHellman {
  p: number;
  g: number;

  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('p and g should be prime numbers'); 
    }

    this.p = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key. It should be greater than one and lower than param p');
    }

    return this.g ** privateKey % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this.p;
  }

  private isPrime (num: number): boolean {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false; 
    }
    return num > 1;
  }

}
