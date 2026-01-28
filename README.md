Készíts egy Node.js konzolos alkalmazást, amely egy fuvarozó cég autós útjait tartja nyilván.

Adatok:
 - Fuvaros neve (CSV fájlból betöltve)
 - Autó fogyasztása (liter / 100 km)
 - Üzemanyag ára (Ft / liter)
 - Megtett távolság (km)

Menürendszer és hozzá tartozó funkciók, kimenetek):
 - Új fuvar adatainak felvitele (Fuvaros választása ID által, lentebb látható a fuvarosok.csv minta; Mennyit fogyaszt az autó? Mennyibe kerül ez liter üzemagyag? Mennyi távolságott tett meg az autó?)
 - Fuvarosok listája (meglévő listából)
 - Eddigi fuvarok listája ("nincs még felvett fuvar", egyéb esetben meglévő fuvarok listája)
 - Legrövidebb megtett út kiírása (Legrövidebb: 130 km)
 - Legnagyobb fogyasztású fuvar kiírása (Legnagyobb fogyasztás: 15 liter/km)
 - Kilépés

Megkötések:
 - A fuvarok olvasása, írása CSV fájlba történjen
 - A fuvarosok nevei külön CSV fájlban legyenek tárolva
 - Konzolos bevitel readline segítségével
 - Konzolos kiíratás
 - Ajánlott mappa- és fájl szerkezet (export/import)

fogyasztas-app/
│
├─ app.js
├─ data/ (ide kerülnek az adatok csv formátumban)
│   └─ fuvarosok.csv
│
├─ models/ (ide kerülnek az osztályok)
│   ├─ Fuvar.js
│   └─ Fuvaros.js
│
├─ services/ (ide kerülnek a szolgáltatások)
│   ├─ csvService.js
│   └─ fuvarService.js
│
└─ menu.js

Minta a fuvarosok számára:
📄 fuvarosok.csv
id;nev
1;Kiss Béla
2;Nagy János
3;Szabó András
4;Tóth Péter
Megjegyzés: pontosvesszővel (;) elválasztva – ez magyar környezetben gyakori.