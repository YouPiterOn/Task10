class House {
    constructor(walls, doors, windows, roof, garage){
        this.walls = walls;
        this.doors = doors;
        this.windows = windows;
        this.roof = roof;
        this.garage = garage;
    }
    clone() {
        return new House(this.walls, this.doors, this.windows, this.roof, this.garage);
    }
}

const house1 = new House(4, 1, 5, 1, 0);
const house2 = house1.clone();
console.log(house1);
console.log(house2);