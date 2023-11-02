class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

class Square {
    constructor(width) {
        this.width = width;
    }
}

class SquareAdapter extends Circle {
    constructor(square) {
        super();
        this.radius = square.width * Math.sqrt(2) / 2;
    }
}

const square = new Square(10);
const circle = new SquareAdapter(square);
console.log(square);
console.log(circle);