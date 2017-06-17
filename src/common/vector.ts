/**
 * Vector 2d
 *
 * @export
 * @class Vector
 */
export class Vector {

    /**
     * Convert length and angle to a Vector
     *
     * @memberof Vector
     * @param {number} length - Length value
     * @param {number} angle - Angle value (radians or degrees)
     */
    static polar(length: number, angle: number): Vector {
        return new Vector(length * Math.cos(angle), length * Math.sin(angle));
    }

    /**
     * Linear interpolation between two Vectors with an applied amount
     *
     * @memberof Vector
     * @param {Vector} from - From Vector value
     * @param {Vector} vector2 - To Vector value
     * @param {number} amount - Amount value
     * @returns {Vector} - Compute Vector value
     */
    static lerp(from: Vector, to: Vector, amount: number): Vector {
        return new Vector(from.x + (to.x - from.x) * amount, from.y + (to.y - from.y) * amount);
    }

    /**
     * Initialize a new Vector
     *
     * @constructor
     * @param {number} x - X value
     * @param {number} y - Y value
     *
     * @example
     * //default coordinates A(0.0;0.0)
     * const a = new Vector();
     *
     * @example
     * //Use decimal point to create vectors.
     * const vector = new Vector(1.0, 2.0);
     */
    constructor(public x: number = 0.0, public y: number = 0.0) {
    }

    /**
     * Round the Vector
     *
     * @memberof Vector
     */
    round(): void {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }

    /**
     * Compute the Vector length
     *
     * @memberof Vector
     * @returns {number} - Vector length
     */
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Add another Vector to the Vector
     *
     * @memberof Vector
     * @param vector - Vector value
     */
    add(vector: Vector): void {
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
    }

    /**
     * Substract another Vector from the Vector
     *
     * @memberof Vector
     * @param vector - Vector value
     */
    substract(vector: Vector): void {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
    }

    /**
     * Multiply the Vector by coordinates
     *
     * @memberof Vector
     * @param {number} x - X value
     * @param {number} y - Y value (default to X value)
     */
    multiply(x: number, y: number = x): void {
        this.x = this.x * x;
        this.y = this.y * y;
    }

    /**
     * Divide the Vector by another Vector
     *
     * @memberof Vector
     * @param {Vector} vector - Vector value
     */
    divide(vector: Vector): void {
        this.x = this.x / vector.x;
        this.y = this.y / vector.y;
    }

    /**
     * Normalize the Vector
     *
     * @memberof Vector
     */
    normalize(): void {
        const value = 1.0 / this.length();
        this.multiply(value);
    }

    /**
     * Compare the Vector with another Vector
     *
     * @memberof Vector
     * @param {Vector} vector - Vector value
     * @returns {boolean} - True if the Vector equals another Vector, otherwise false
     */
    compare(vector: Vector): boolean {
        return this.x === vector.x && this.y === vector.y;
    }

    /**
     * Compute distance between the Vector and another Vector
     *
     * @memberof Vector
     * @param {Vector} vector - Vector value
     * @returns {number} - Computed distance
     */
    distance(vector: Vector): number {
        return Math.sqrt((this.x - vector.x) * (this.x - vector.x) + (this.y - vector.y) * (this.y - vector.y));
    }
}
