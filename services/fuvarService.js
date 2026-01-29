import { Fuvar } from "../models/Fuvar.js";
import { readFuvarosok } from "./csvServices.js";
import fs from 'node:fs';

export const newFuvar = async function (readline) {
    return new Promise((resolve, reject) => {
        const fuvarosok = readFuvarosok();
        readline.question('Mi a fuvaros ID-ja? : ', id => {
            readline.question('Mennyit fogyaszt az autó? : ', consumption => {
                readline.question('Mennyibe kerül egy liter üzemagyag? : ', price => {
                    readline.question('Mekkora távolságott tett meg az autó? (km) : ', distance => {
                        try {
                            const found = fuvarosok.find((element) => element.id == Number(id));
                            if (!found) {
                                console.log('Nincs ilyen ID-jű fuvaros.');
                                readline.close();
                                resolve();
                                return;
                            };
                            let name = found.name.trim();
                            // console.log(name);
                            const fuvar = new Fuvar(name, Number(consumption), Number(price), Number(distance)).toCSVFormat();
                            console.log(fuvar)
                            fs.appendFileSync('./data/fuvarok.csv', `\n${fuvar}`);
                            console.log('Fuvar sikeresen létrehozva.');
                            resolve();
                        } catch (err) {
                            reject(err)
                        };
                        readline.close();
                    });
                });
            });
        });
    });
};