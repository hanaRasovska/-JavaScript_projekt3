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



const ulozeneRecepty = recepty; //ulozeni druheho js-souboru do promenne
const seznam = document.getElementById("recepty"); 
const kategorieSeznam = document.getElementById("recepty");

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

//console.log(ulozeneRecepty);
seznam.innerHTML= ``;
for (let i = 0; i < ulozeneRecepty.length; i++) {
  seznam.innerHTML += `<div class="recept"> <div class="recept-obrazek"> <img src=${ulozeneRecepty[i].img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
  <h3>${ulozeneRecepty[i].nadpis}</h3> </div>`;
}


/// -------------- Ukol 3 filtrovani dle kategorie -------------- ///

// budu chtít procházet pole uložených receptů a kontrolovat prvek kategorie ulozeny do promenne
// budu chtít tento prvek kontrolovat na příslušnost do jedné z 3 kategorií a podle toho, co je v kategorii ho šoupat do polí

let poleDezertu=[];
let poleHlavni=[];
let poleSnidani=[];

function filtrKategorie(){
    let vybranaKategorie = document.getElementById("kategorie").value;

    for (let i = 0; i < ulozeneRecepty.length; i++) {
      let aktualniRecept = ulozeneRecepty[i];
      let kategorieReceptu = ulozeneRecepty[i].kategorie;
 
      if (kategorieReceptu==="Dezert"){
        poleDezertu.push(aktualniRecept);
      } else if (kategorieReceptu==="Snídaně"){
        poleSnidani.push(aktualniRecept);
      } else {
        poleHlavni.push(aktualniRecept);
      }
  
      if (vybranaKategorie==="Dezert") {
        //console.log(ulozeneRecepty[i].kategorie);
        //let kategorieSeznam = ``;
        for (let i = 0; i < poleDezertu.length; i++) {
          seznam.innerHTML += `<div class="recept"> <div class="recept-obrazek"> <img src=${poleDezertu[i].img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
        <h3>${poleDezertu[i].nadpis}</h3> </div>`;
        }
      } else if (vybranaKategorie==="Snídaně") {
        for (let i = 0; i < poleSnidani.length; i++) {
          seznam.innerHTML += `<div class="recept"> <div class="recept-obrazek"> <img src=${poleSnidani[i].img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
        <h3>${poleSnidani[i].nadpis}</h3> </div>`;
        }
      } else if (vybranaKategorie==="Hlavní jídlo"){
        for (let i = 0; i < poleHlavni.length; i++) {
          seznam.innerHTML += `<div class="recept"> <div class="recept-obrazek"> <img src=${poleHlavni[i].img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
        <h3>${poleHlavni[i].nadpis}</h3> </div>`;
        }
      } else{
        for (let i = 0; i < ulozeneRecepty.length; i++) {
          seznam.innerHTML += `<div class="recept"> <div class="recept-obrazek"> <img src=${ulozeneRecepty[i].img}" alt="Obrazek"> </div> <div class="recept-info" id="infoReceptu">
          <h3>${ulozeneRecepty[i].nadpis}</h3> </div>`;
        }
      }
    }
}

filtrKategorie();

/// -------------- Ukol 5 zobrazeni detailu receptu -------------- ///
// po kliknuti na seznam receptu se musi nejak poznat, ktery recept byl vybran
// na zaklade tohoto indexu se musi zobrazit spravny recept s prislusnostmi ktere budu resit pozdeji, pro zacatek staci jen obrazek treba

for (let i = 0; i < ulozeneRecepty.length; i++) {
  let indexReceptu = ulozeneRecepty.indexOf([i]);
  console.log(indexReceptu);
}


function zobrazitDetail(){









}