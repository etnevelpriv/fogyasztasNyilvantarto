import { Fuvar } from "../models/Fuvar.js";
import { readFuvarosok } from "./csvServices.js";
import { createInterface } from 'readline';
import fs from 'node:fs';

export const newFuvar = function () {
    const fuvarosok = readFuvarosok();
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Mi a fuvaros ID-ja? : ', id => {
        readline.question('Mennyit fogyaszt az autó? : ', consumption => {
            readline.question('Mennyibe kerül egy liter üzemagyag? : ', price => {
                readline.question('Mennyi távolságott tett meg az autó? : ', distance => {
                    try {
                        const found = fuvarosok.find((element) => element.id == Number(id));
                        if (!found) {
                            console.log('Nincs ilyen ID-jű fuvaros.');
                            readline.close();
                            return;
                        };
                        const name = found.name;
                        console.log(name);
                        const fuvar = new Fuvar(name, Number(consumption), Number(price), Number(distance));
                        fs.appendFileSync('./data/fuvarok.csv', `${fuvar}\n`);
                        console.log('Fuvar sikeresen létrehozva.');
                    } catch (err) {
                        throw new Error(err)
                    };
                    readline.close();
                });
            });
        });
    });
};