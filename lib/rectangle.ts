import { Vector } from './vector';

/**
 * Rectangle
 *
 * @export
 * @class Rectangle
 */
export class Rectangle {

    /**
     * Get the Rectangle center length and angle to a Vector
     *
     * @memberof Rectangle
     * @returns {Vector} - Rectangle center as a Vector
     */
    get center(): Vector {
        return new Vector(this.x + this.width / 2.0, this.y + this.height / 2.0);
    }

    /**
     * Initialize a new Rectangle
     *
     * @constructor
     * @param {number} x - X value
     * @param {number} y - Y value
     * @param {number} width - Width value
     * @param {number} height - Height value
     *
     * @example
     * //Rectangle is empty by default
     * const rectangle = new Rectangle(); //all rectangle properties will be 0.0
     *
     * @example
     * //Use decimal point to create a rectangle.
     * const rectangle = new Rectangle(1.0, 2.0, 3.0, 4.0);
     */
    constructor(public x: number = 0.0,
                public y: number = 0.0,
                public width: number = 0.0,
                public height: number = 0.0) {

    }

    /**
     * Determine if the Rectangle is empty
     *
     * @memberof Rectangle
     * @returns {boolean} - True if the Rectangle is empty, otherwise false
     */
    isEmpty(): boolean {
        return this.width === 0 && this.height === 0;
    }

    /**
     * Compare the Rectangle with another Rectangle
     *
     * @memberof Rectangle
     * @param {Rectangle} rectangle - Rectangle value
     * @returns {boolean} - True if the Rectangle equals another Rectangle, otherwise false
     */
    compare(rectangle: Rectangle): boolean {
        return this.x === rectangle.x
            && this.y === rectangle.y
            && this.width === rectangle.width
            && this.height === rectangle.height;
    }

    /**
     * Determine if the Rectangle contains another Rectangle
     *
     * @memberof Rectangle
     * @param {Rectangle} rectangle - Rectangle value
     * @returns {boolean} - True if the Rectangle contains another Rectangle, otherwise false
     */
    contains(x: number, y: number, width: number = 0, height: number = 0): boolean {
        return (x >= this.x)
            && (x + width < this.x + this.width)
            && (y >= this.y)
            && (y + height < this.y + this.height);
    }

    /**
     * Determine if the Rectangle intersects another Rectangle
     *
     * @memberof Rectangle
     * @param {Rectangle} rectangle - Rectangle value
     * @returns {boolean} - True if the Rectangle intersects another Rectangle, otherwise false
     */
    intersects(x: number, y: number, width: number = 0, height: number = 0): boolean {
        return (x < this.x + this.width)
            && (x + width > this.x)
            && (y < this.y + this.height)
            && (y + height > this.y);
    }
}
