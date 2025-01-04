import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(theX: number, theY: number,
        private _radius: number) {
        super(theX, theY);
    }
        
    public getRadius(): number {
        return this._radius
    }
    
    public setRadius(value: number) {
        this._radius = value;
    }
    
    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

    calcualteArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}