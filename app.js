import { createInterface } from 'readline';
import { readFuvarosok, readFuvarok } from './services/csvServices.js';

const displayMenu = function () {
    console.log(`
Menü
1 : Fuvarosok listája
2 : Eddigi fuvarok listája
3 : Legrövidebb megtett út
4 : Legnagyobb fogyasztású fuvar
5 : Kilépés
    `);

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Melyik menüpontot választja?', menuNum => {
        console.log(menuNum)
        const fuvarok = readFuvarok();
        switch (Number(menuNum)) {
            case 1:
                console.log(readFuvarosok());
                break;
            case 2:
                if (!fuvarok) {
                    console.log('Nincs még felvett fuvar');
                } else {
                    console.log(fuvarok);
                };
                break;
            default:
                console.log('Nemjo');
        };
        readline.close();
    });
};

displayMenu();