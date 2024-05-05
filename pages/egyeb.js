const termekek = [
  {
    id: 0,
    nev: "Sulipóló",
    kep: "polo.png",
    ertekeles: 5,
    kategoria: "ruha",
    ar: 3000,
  },
  {
    id: 1,
    nev: "Sulipulcsi",
    kep: "pulcsi.png",
    ertekeles: 5,
    kategoria: "ruha",
    ar: 5000,
  },
  {
    id: 2,
    nev: "Sulitoll",
    kep: "toll.png",
    ertekeles: 5,
    kategoria: "írószer",
    ar: 500,
  },
  {
    id: 3,
    nev: "Sulifüzet",
    kep: "fuzet.png",
    ertekeles: 5,
    kategoria: "írószer",
    ar: 1000,
  },
  {
    id: 4,
    nev: "Sulibögre",
    kep: "bogre.png",
    ertekeles: 5,
    kategoria: "egyéb",
    ar: 2000,
  },
  {
    id: 5,
    nev: "Sulikulacs",
    kep: "kulacs.png",
    ertekeles: 5,
    kategoria: "egyéb",
    ar: 2500,
  },
];


  
  document.addEventListener("DOMContentLoaded", function (event) {
    titleCreate();
    termekDivCreate();
    feltolt("egyéb")

  });
  
  function titleCreate() {
    let title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Suliáruház";
    document.body.append(title);
  }
  
  function termekDivCreate() {
    let termekDiv = document.createElement("div");
    termekDiv.id = "termekLista";
    document.body.append(termekDiv);
  }
  
  function termekKartyak(id) {
    const termekElem = document.createElement("div");
    termekElem.classList.add("termek");
    const aktualisTermek = termekek[id];
    const aktualisNev = aktualisTermek.nev;
    const aktualisKep = aktualisTermek.kep;
    const aktualisAr = aktualisTermek.ar;
    const aktualisErtekeles = aktualisTermek.ertekeles;
  
    const kep = document.createElement("img");
    const nev = document.createElement("h2");
    const ertekeles = document.createElement("p");
    const ar = document.createElement("h3");
    const gomb = document.createElement("button");
  
    kep.src = "kepek/" + aktualisKep;
    nev.textContent = aktualisNev;
    ertekeles.textContent = "Értékelés: " + aktualisErtekeles + "/5";
    ar.textContent = aktualisAr + " Ft";
    gomb.textContent = "Kosárba";
    gomb.classList.add("kosar");
  
    termekElem.append(kep);
    termekElem.append(nev);
    termekElem.append(ertekeles);
    termekElem.append(ar);
    termekElem.append(gomb);
  
    return termekElem;
  }
  
  function feltolt(kategoria) {
    const talaltak = termekek.filter((aktualis, index) => {
      return aktualis.kategoria == kategoria;
    });
  
    for (let index = 0; index < talaltak.length; index++) {
      const termekListaElem = document.getElementById("termekLista");
      termekListaElem.appendChild(termekKartyak(talaltak[index].id));
    }
  }
  
