class House {
    constructor(){
        this.walls = 0;
        this.doors = 0;
        this.windows = 0;
        this.roof = 0;
        this.garage = 0;
    }
}

class HouseBuilder {
    constructor(){
        this.house = new House();
    }
    getHouse(){
        return this.house;
    }
}

class GarageHouseBuilder extends HouseBuilder {
    addWalls(walls){
        this.house.walls = walls;
    }
    addDoors(doors){
        this.house.doors = doors;
    }
    addWindows(windows){
        this.house.windows = windows;
    }
    addRoof(roof){
        this.house.roof = roof;
    }
    addGarage(garage){
        this.house.garage = garage;
    }
}

class Director {
    build(builder){
        builder.addWalls(4);
        builder.addDoors(1);
        builder.addWindows(5);
        builder.addRoof(1);
        builder.addGarage(1);
        return builder.getHouse();
    }
}

const director = new Director();
const garageHouse = director.build(new GarageHouseBuilder());
console.log(garageHouse);