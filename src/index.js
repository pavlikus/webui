class Square {
    constructor(width) {
        this.width = width;
    }

    area() { return this.width * this.width; }
}


class Rectangle extends Square {
    constructor(height, width) {
        super(width);
        this.height = height;
    }

    area() { return this.width * this.height; }
}


let square = new Square(10);
console.log(square.area());

let rectangle = new Rectangle(10, 5);
console.log(rectangle.area());
