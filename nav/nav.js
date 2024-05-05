const menuCategs = [
    {cim:"Főoldal", page: "index.html"},
    {cim:"Ruházat", page: "ruha.html"},
    {cim:"Írószer", page: "iroszer.html"},
    {cim:"Egyéb termékek", page: "egyeb.html"},
    {cim:"Kosár", page: "kosar.html"}]


$(()=>{
    menuDivCreate();
    menuKeszit();
})

function menuDivCreate(){
    let menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
    document.body.append(menuDiv);
}

function menuKeszit(){
    const menuElem = document.querySelector('#menu');

    for (let index = 0; index < menuCategs.length; index++) {
        const aktualis = menuCategs[index].cim;
        const gombElem  = document.createElement('button');
        gombElem.textContent = aktualis;
        gombElem.classList.add("nav")
        menuElem.append(gombElem);
        
      
    gombElem.addEventListener('click', function(){
      window.location.href = menuCategs[index].page;
    
    })
  }
};


