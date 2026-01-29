import { createInterface } from 'readline';
import { readFuvarosok, readFuvarok, shortestDistance } from './services/csvServices.js';
import { newFuvar } from './services/fuvarService.js';

const displayMenu = async function () {
    console.log(`
Menü
1 : Új fuvar hozzáadása
2 : Fuvarosok listája
3 : Eddigi fuvarok listája
4 : Legrövidebb megtett út
5 : Legnagyobb fogyasztású fuvar
6 : Kilépés
    `);

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Melyik menüpontot választja? : ', async menuNum => {
        const fuvarok = readFuvarok();
        switch (Number(menuNum)) {
            case 1:
                await newFuvar(readline);
                break;
            case 2:
                console.log(readFuvarosok());
                break;
            case 3:
                if (!fuvarok) {
                    console.log('Nincs még felvett fuvar');
                } else {
                    console.log(fuvarok);
                };
                break;
            case 4:
                if (!fuvarok) {
                    console.log('Nincs még felvett fuvar');
                } else {
                    console.log(shortestDistance(fuvarok));
                };
                break;
            default:
                console.log('Nemjo');
        };
        readline.close();
    });
};

displayMenu();