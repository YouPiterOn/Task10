class Transport {
    deliver() { }
}

class Truck extends Transport {
    deliver() {
        return "box delivered";
    }
}

class Ship extends Transport {
    deliver() {
        return "container delivered";
    }
}

class Logistics {
    createTransport() {
        
    }
}

class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}


const truckFactory = new RoadLogistics();
const truck = truckFactory.createTransport();
truck.deliver();

const shipFactory = new SeaLogistics();
const ship = shipFactory.createTransport();
ship.deliver();
