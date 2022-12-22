const OrbitalPeriodRatio = new Map<string, number>([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132]
]);

const EARTH_YEAR_SECONDS  = 31_557_600;

function getOrbitalPeriodOrZero(planet: string): number {
  return OrbitalPeriodRatio.get(planet) || 0;
}

function roundNumber(num: number): number {
  return Math.round((num * 100)) / 100;
}

export function age(planet: string, seconds: number): number {
  if (OrbitalPeriodRatio.has(planet)) {
    return roundNumber(seconds / EARTH_YEAR_SECONDS / getOrbitalPeriodOrZero(planet));
  } else {
    throw 'Unsupported planet';
  }
}
