export class Fuvar {
    constructor(id, name) {
        if (typeof id != 'number' || id === null || id === undefined || id <= 0) {
            throw new Error('Az id nincs megfelelően megadva');
        };
        if (typeof name != 'string' || name === null || name === '' || name === undefined) {
            throw new Error(`Nem megfelelően van megadva a név. : ${name}`);
        };
        this.id = id;
        this.name = name;
    };
    toString () {
        return (`$ID:${this.id}. NAME: ${this.name}`);
    };
};