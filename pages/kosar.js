document.addEventListener("DOMContentLoaded", function (event) {
  titleCreate();
  kosarListaCreate();
  kosarEsemeny();
  kosarbaTolt();
  //console.log(kosarElemek)
});

function titleCreate() {
  let title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Kosár";
  document.body.append(title);
}

function kosarListaCreate() {
  let lista = document.createElement("ul");
  lista.id = "kosarLista";
  document.body.append(lista);
}

let kosarElemek = []

export function kosarEsemeny() {
  const kosarbaGomb = document.querySelectorAll(".kosar");
  kosarbaGomb.forEach(function (gomb) {
    gomb.addEventListener("click", function () {
      const nev = this.parentElement.querySelector("h2").textContent;
      const ar = this.parentElement.querySelector("h3").textContent;
      //const kosarElem = document.createElement("li");
      const kosarElem = nev + " - " + ar;
      kosarElemek.push(kosarElem)
      console.log(kosarElemek)
      //document.getElementById("kosarLista").appendChild(kosarElem);
    });
  });
}

function kosarbaTolt() {
 for (let index = 0; index < kosarElemek.length; index++) {
    const termek = kosarElemek[index];
    const listaElem = document.createElement("li")
    listaElem.textContent = termek
    document.getElementById("kosarLista").appendChild(listaElem);
    
 }
}