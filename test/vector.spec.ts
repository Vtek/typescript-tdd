import { expect } from 'chai';
import { Vector } from '../lib/vector';

describe('As a developer, i want a Vector implementation', () => {
    let x: number;
    let y: number;
    let otherX: number;
    let otherY: number;
    let value: number;
    let vector: Vector;
    let other: Vector;

    beforeEach(() => {
        x = Math.random();
        y = Math.random();
        otherX = Math.random();
        otherY = Math.random();
        value = Math.random();
        vector = new Vector(x, y);
        other = new Vector(otherX, otherY);
    });

    it('Coordinates are available outside of the class', () => {
        expect(vector).to.have.property('x');
        expect(vector).to.have.property('y');
    });

    it('Vector can be initializes with X & Y coordinates', () => {
        expect(vector.x).to.be.equal(x);
        expect(vector.y).to.be.equal(y);
    });

    it('Vector default coordinates are 0,0', () => {
        const v = new Vector();
        expect(v.x).to.be.equal(0);
        expect(v.y).to.be.equal(0);
    });

    it('Vector can be rounded', () => {
        vector.round();
        expect(vector.x).to.be.equal(Math.round(x));
        expect(vector.y).to.be.equal(Math.round(y));
    });

    it('Vector length can be computed', () => {
        const expected: number = Math.sqrt(x * x + y * y);
        const actual: number = vector.length();

        expect(actual).to.be.equal(expected);
    });

    it('Two Vectors can be added', () => {
        const expectedX: number = otherX + x;
        const expectedY: number = otherY + y;

        vector.add(other);

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Two Vectors can be substracted', () => {
        const expectedX: number = x - otherX;
        const expectedY: number = y - otherY;

        vector.substract(other);

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Two Vectors can be multiplied', () => {
        const expectedX: number = x * otherX;
        const expectedY: number = y * otherY;

        vector.multiply(other.x, other.y);

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Vector can be multiplied with a float value', () => {
        const expectedX: number = x * value;
        const expectedY: number = y * value;

        vector.multiply(value);

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Two Vectors can be divided', () => {
        const expectedX: number = x / otherX;
        const expectedY: number = y / otherY;

        vector.divide(other);

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Vector can be normalized', () => {
        const v = 1.0 / Math.sqrt(x * x + y * y);
        const expectedX = x * v;
        const expectedY = y * v;

        vector.normalize();

        expect(vector.x).to.be.equal(expectedX);
        expect(vector.y).to.be.equal(expectedY);
    });

    it('Vector can be compared with another Vector', () => {
        const expected = x === otherX && y === otherY;

        const actual = vector.compare(other);

        expect(actual).to.be.equal(expected);
    });

    it('Distance can be computed between two Vectors', () => {
        const expected = Math.sqrt((x - otherX) * (x - otherX) + (y - otherY) * (y - otherY));

        const actual = vector.distance(other);

        expect(actual).to.be.equal(expected);
    });

    it('Polar Vector can be create with a length and an angle', () => {
        const polarX = value * Math.cos(Math.PI);
        const polarY = value * Math.sin(Math.PI);

        const actual = Vector.polar(value, Math.PI);

        expect(actual.x).to.be.equal(polarX);
        expect(actual.y).to.be.equal(polarY);
    });

    it('Vector linear interpolation', () => {
        const lerpX = vector.x + (other.x - vector.x) * value;
        const lerpY = vector.y + (other.y - vector.y) * value;

        const actual = Vector.lerp(vector, other, value);

        expect(actual.x).to.be.equal(lerpX);
        expect(actual.y).to.be.equal(lerpY);
    });
});
