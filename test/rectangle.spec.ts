import { expect } from 'chai';
import { Rectangle } from '../lib/rectangle';
import { Vector } from '../lib/vector';

describe('As a developer, i want a Rectangle implementation', () => {
    let x: number;
    let y: number;
    let width: number;
    let height: number;
    let otherX: number;
    let otherY: number;
    let otherWidth: number;
    let otherHeight: number;
    let rectangle: Rectangle;
    let otherRectangle: Rectangle;

    beforeEach(() => {
        x = Math.random();
        y = Math.random();
        width = Math.random();
        height = Math.random();
        rectangle = new Rectangle(x, y, width, height);

        otherX = Math.random();
        otherY = Math.random();
        otherWidth = Math.random();
        otherHeight = Math.random();
        otherRectangle = new Rectangle(otherX, otherY, otherWidth, otherHeight);
    });

    it('Rectangle can be initialized with X, Y, Width and Height', () => {
        expect(rectangle.x).to.be.equal(x);
        expect(rectangle.y).to.be.equal(y);
        expect(rectangle.width).to.be.equal(width);
        expect(rectangle.height).to.be.equal(height);
    });

    it('Coordinates are available as a property', () => {
        expect(rectangle).to.have.property('x');
        expect(rectangle).to.have.property('y');
    });

    it('Width is available as a property', () => {
        expect(rectangle).to.have.property('width');
    });

    it('Height is available as a property', () => {
        expect(rectangle).to.have.property('height');
    });

    it('Rectangle is empty by default', () => {
        rectangle = new Rectangle();
        expect(rectangle.x).to.be.equal(0.0);
        expect(rectangle.y).to.be.equal(0.0);
        expect(rectangle.width).to.be.equal(0.0);
        expect(rectangle.height).to.be.equal(0.0);
    });

    it('Determine if a Rectangle is empty', () => {
        const expected = true;
        const empty = new Rectangle(x, y, 0.0, 0.0);
        const actual = empty.isEmpty();
        expect(actual).to.be.equal(expected);
    });

    it('Compare a Rectangle with another Rectangle', () => {
        const expected = x === otherX && y === otherY && width === otherWidth && height === otherWidth;

        const actual = rectangle.compare(otherRectangle);

        expect(actual).to.be.equal(expected);
    });

    it('Center coordinates are available as a property', () => {
        const expected = new Vector(x + width / 2.0, y + height / 2.0);

        const actual = rectangle.center;

        expect(actual).to.be.deep.equal(expected);
    });

    it('Determine if a Rectangle does not contains itselft', () => {
        //A rectangle can not contains itself
        const expected = false;

        const actual = rectangle.contains(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle contains another rectangle', () => {
        const expected = true;
        const actual = rectangle.contains(x, y, width - rectangle.center.x, height - rectangle.center.y);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle does not contains another rectangle', () => {
        const expected = false;
        const actual = rectangle.contains(rectangle.center.x, rectangle.center.y, width, height);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle contains it center', () => {
        const expected = true;

        const actual = rectangle.contains(rectangle.center.x, rectangle.center.y);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle contains it location', () => {
        const expected = true;

        const actual = rectangle.contains(rectangle.x, rectangle.y);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle does not contains a vector', () => {
        const expected = false;

        const actual = rectangle.contains(rectangle.x + rectangle.x + rectangle.width, rectangle.y + rectangle.y + rectangle.height);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle does not intersects another rectangle', () => {
        const expected = false;
        const actual = rectangle.intersects(x, y, width - rectangle.center.x, height - rectangle.center.y);

        expect(actual).to.be.equal(expected);
    });

    it('Determine if a Rectangle intersects another rectangle', () => {
        const expected = true;
        const actual = rectangle.intersects(rectangle.center.x, rectangle.center.y, width, height);

        expect(actual).to.be.equal(expected);
    });
});
