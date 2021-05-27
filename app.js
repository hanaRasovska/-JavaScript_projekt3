/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

//const lsKey = 'nejakyKlic';

const ulozeneRecepty = recepty; //ulozeni druheho js-souboru do promenne
const seznam = document.getElementById("recepty");
const kategorieSeznam = document.getElementById("recepty");

let poleDezertu = [];
let poleHlavni = [];
let poleSnidani = [];

/// -------------- Ukol 1 zobrazeni seznamu receptu -------------- ///
//vytvoreni prazdneho seznamu 
//let seznamReceptu = '';
//naplneni seznamu recepty (nekonecne dlouhy string)
/*ulozeneRecepty.forEach((recept)=>{
  seznamReceptu += `
  <div class="recept">
      <div class="recept-obrazek">
        <img src="${recept.img}" alt="Obrazek">
      </div>
 
      <div class="recept-info">
        <h3>"${recept.nadpis}"</h3>
      </div>
  </div>`
})

seznam.innerHTML= seznamReceptu;*/


generateList()

function generateList() {
    seznam.innerHTML = ``;

    vykreslit();

    //const posledniRecept = JSON.parse(localStorage.getItem(lsKey));
    //zobrazitDetailReceptu(posledniRecept);
}

function receptyNaZobrazeni() {
    const vybranaKategorie = document.getElementById("kategorie").value;
    const vyhledavani = document.getElementById("hledat").value.toLowerCase();
    const razeni = document.getElementById("razeni").value;

    return ulozeneRecepty
        .filter(recept => vybranaKategorie === 'vsechno' || recept.kategorie === vybranaKategorie)
        .filter(recept => vyhledavani === '' || recept.nadpis.toLowerCase().indexOf(vyhledavani) > -1)
        .sort((recept1, recept2) => (recept2.hodnoceni - recept1.hodnoceni) * razeni);
}

function vykreslit() {
    seznam.innerHTML = ``;

    const filtrovaneRecepty = receptyNaZobrazeni();

    for (let i = 0; i < filtrovaneRecepty.length; i++) {
        let r = filtrovaneRecepty[i];

        seznam.innerHTML += `<div class="recept" onclick="zobrazitDetailReceptu(${r.id})"> <div class="recept-obrazek"> <img src=${r.img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
      <h3>${r.nadpis}</h3> </div>`;
    }
}

function zobrazitDetailReceptu(idReceptu) {

    if (!idReceptu || idReceptu < 1) {
        return;
    }

    const filtrovane = ulozeneRecepty.filter(r => r.id === idReceptu); // pole receptu, maximalne 1
    const tenJediny = filtrovane.length > 0 ? filtrovane[0] : null;

    if (tenJediny === null) {
        return;
    }

    //localStorage.setItem(lsKey, JSON.stringify(idReceptu));

    let foto = document.getElementById("recept-foto");
    foto.src = ulozeneRecepty[idReceptu-1].img;

    let kategorieReceptu = document.getElementById("recept-kategorie");
    kategorieReceptu.innerHTML = ulozeneRecepty[idReceptu-1].kategorie;

    let hodnoceniReceptu = document.getElementById("recept-hodnoceni");
    hodnoceniReceptu.innerHTML = ulozeneRecepty[idReceptu-1].hodnoceni;

    let nadpisReceptu = document.getElementById("recept-nazev");
    nadpisReceptu.innerHTML = ulozeneRecepty[idReceptu-1].nadpis;

    let popisReceptu = document.getElementById("recept-popis");
    popisReceptu.innerHTML = ulozeneRecepty[idReceptu-1].popis;

}
  