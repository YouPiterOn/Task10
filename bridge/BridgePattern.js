class Color {
    getColor() { }
}

class Shape {
    constructor(color) {
        this.color = color
    }
}

class RedColor extends Color {
    getColor() {
        return "red!"
    }
}
class BlueColor extends Color {
    getColor() {
        return "blue!"
    }
}
class Cube extends Shape {
    getShape() {
        return "cube!"
    }
}
class Sphere extends Shape {
    getShape() {
        return "sphere!"
    }
}

const redCube = new Cube(new RedColor());
const blueSphere = new Sphere(new BlueColor());
const blueCube = new Cube(new BlueColor());
const redSphere = new Sphere(new RedColor());
console.log(redCube.getShape(), redCube.color.getColor());
console.log(blueSphere.getShape(), blueSphere.color.getColor());
console.log(blueCube.getShape(), blueCube.color.getColor());
console.log(redSphere.getShape(), redSphere.color.getColor());