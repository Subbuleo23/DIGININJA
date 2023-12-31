import * as MT from "math-toolbox";

const clampedValue = MT.clamp(0, 10, 15);
const clamped01Value = MT.clamp01(1.5);
const stepValue = MT.step(5, 7);
const remappedValue = MT.map(50, 0, 100, 0, 1);
const diagonalLength = MT.diagonal(3, 4);
const distanceValue = MT.distance(0, 0, 3, 4);
const smoothedValue = MT.smoothStep(0, 1, 0.5);
const normalizedValue = MT.normalize(0, 100, 75);
const randomFloatValue = MT.randomFloat(0, 1, 2);
const randomIntValue = MT.randomInt(1, 10);
const signValue = MT.randomSign();
const wrappedValue = MT.wrap(5, 0, 10);
const fuzzyFloorValue = MT.fuzzyFloor(2.01, 0.01);
const fuzzyCeilValue = MT.fuzzyCeil(2.99, 0.01);
const isEqual = MT.fuzzyEqual(2.01, 2.02, 0.01);
const isGreaterThan = MT.fuzzyGreaterThan(2.02, 2.01, 0.01);
const isLessThan = MT.fuzzyLessThan(2.01, 2.02, 0.01);
const newValue = MT.maxAdd(8, 5, 10);
const newValue2 = MT.minSub(5, 3, 2);
const isOddNumber = MT.isOdd(7);
const isEvenNumber = MT.isEven(6);
const isPowerOfTwoNumber = MT.isPowerOfTwo(16);
const closestPower = MT.closestPowerOfTwo(18);
const nextPower = MT.nextPowerOfTwo(25);
const percentage = MT.percent01(25, 100, 0);
const avg = MT.average(1, 2, 3, 4, 5);
const diff = MT.difference(5, 8);
const isWithinTolerance = MT.within(5, 6, 0.5);
const deltaAngle = MT.deltaAngleRad(1.0, 5.0);
const fractionalPart = MT.fract(5.7);
const moduloValue = MT.mod(10, 3);
const interpolatedAngle = MT.lerpAngleRad(1.0, 5.0, 0.5);
const linearValue = MT.gammaToLinearSpace(0.5);
const gammaValue = MT.linearToGammaSpace(0.5);
const smoothedValue2 = MT.almostIdentity(0.5, 0.1, 1.0);
const impulseValue = MT.impulse(0.5, 0.3);
const pulseValue = MT.cubicPulse(0.1, 0.5, 0.3);
const stepValue2 = MT.expStep(0.5, 0.1, 2.0);
const mappedValue2 = MT.parabola(0.25, 0.5);
const curveValue = MT.powerCurve(0.3, 0.2, 0.8);
const minResult = MT.smoothMin(2, 3, 0.1);
const maxResult = MT.smoothMax(2, 3, 0.1);
const deltaTimeValue = MT.deltaTime(1000, 1500);
const gcdValue = MT.gcd(48, 18);
const dotProductValue = MT.dotProduct(1, 2, 3, 4, 5, 6, 7, 8);
const lerpedValue2 = MT.lerp(0, 10, 0.5);
const radians = MT.degToRad(90);
const degrees = MT.radToDeg(Math.PI);
const t = MT.inverseLerp(0, 10, 5);
const lerpedValue3 = MT.lerpUnclamped(0, 10, 1.5);
const deltaAngle2 = MT.deltaAngleDeg(45, 315);
const interpolatedAngle2 = MT.lerpAngleDeg(10, 350, 0.5);
