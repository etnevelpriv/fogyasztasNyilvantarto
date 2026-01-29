import fs from 'node:fs';
import { Fuvaros } from '../models/Fuvaros.js';
import { Fuvar } from '../models/Fuvar.js';

export const readFuvarosok = function () {
    const data = fs.readFileSync('./data/fuvarosok.csv').toString();
    const lines = data.split('\n').slice(1);
    const fuvarosok = [];
    lines.forEach(line => {
        const id = line.split(';')[0];
        const name = line.split(';')[1];
        try {
            fuvarosok.push(new Fuvaros(Number(id), name));
        } catch (err) {
            throw new Error(err);
        };
    });
    return fuvarosok;
};

export const readFuvarok = function () {
    const data = fs.readFileSync('./data/fuvarok.csv').toString();
    const lines = data.split('\n').slice(1);
    const fuvarok = [];
    lines.forEach(line => {
        const name = line.split(';')[0];
        const consumption = line.split(';')[1];
        const price = line.split(';')[1];
        const distance = line.split(';')[1];
        try {
            fuvarok.push(new Fuvar(name, Number(consumption), Number(price), Number(distance)));
        } catch (err) {
            throw new Error(err);
        };
    });
    if (fuvarok.length == 0) {
        return false;
    } else {
        return fuvarok;
    }
};

readFuvarosok();