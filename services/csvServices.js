import fs from 'node:fs';


const resp = fs.readFileSync('./data/fuvarosok.csv').toString();

readFuvarosok();