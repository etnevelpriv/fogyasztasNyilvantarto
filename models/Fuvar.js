export class Fuvar {
    constructor(name, consumption, literPrice, distance) {
        if (typeof name != 'string' || name === null || name === '' || name === undefined) {
            throw new Error(`A név nincs megfelelően megadva. : ${name}`);
        };
        if (typeof consumption != 'number' || consumption === null || isNaN(consumption) || consumption === undefined || consumption <= 0) {
            throw new Error(`A fogyasztás nincs megfelelően megadva. : ${consumption}`);
        };
        if (typeof literPrice != 'number' || literPrice === null || isNaN(literPrice) || literPrice === undefined || literPrice <= 0) {
            throw new Error(`Az üzemanyag ára nincs megfelelően megadva. : ${literPrice}`);
        };
        if (typeof distance != 'number' || distance === null || isNaN(distance) || distance === undefined || distance <= 0) {
            throw new Error(`A távolság nincs megfelelően megadva. : ${distance}`);
        };
        this.name = name;
        this.consumption = consumption;
        this.literPrice = literPrice;
        this.distance = distance;
    };
    toString() {
        return (`Név: ${this.name}. Fogyasztás: ${this.consumption}. Üzemanyag ár (liternként): ${this.literPrice}. Távolság: ${this.distance}.`)
    };
    toCSVFormat() {
        return (`${this.name};${this.consumption};${this.literPrice};${this.distance}`)
    };
};