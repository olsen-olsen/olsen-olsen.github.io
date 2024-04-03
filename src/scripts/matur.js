
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  doigia.init(container);
});


const doigia = (() => {
  var text;
  var valueham;
  var j, z;
  var strTala;

  function init(_container) {
    // console.log("hello");
    var items_ham = document.querySelectorAll(".items_ham");
    var items_storham = document.querySelectorAll(".items_storham");
    var items_batur = document.querySelectorAll(".items_batur");
    var batar_left = document.querySelector(".batar_left");
    var batar_right = document.querySelector(".batar_right");
    var items_steikurogfiskur = document.querySelectorAll(".items_SteikurogFiskur");
    var items_samlokur = document.querySelectorAll(".items_samlokur");
    var salat = document.querySelector(".salat");
    var items_salat = document.querySelectorAll(".items_salat");
    var barnamatsedill = document.querySelector(".barnamatsedill");
    var items_barnamatsedill = document.querySelectorAll(".items_barnamatsedill");
    var allasosur = document.querySelectorAll(".allasosur p.verd"); // Select all children inside class allasosur with condition are p or paragraph and with class verd
    var items_replace;

    // console.log(items_ham);
    // console.log(items_ham.length);
    // console.log(items_ham[0].children[2].getAttribute("class") === "verd OH001");
    // console.log(items_ham[0].children[2].textContent);


    // Hamborgarar
    fetch("https:olsenolsen.is/src/data/ham.json" || ".src/data/ham.json")
    // fetch("./src/data/ham.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(typeof data);
        // console.log(data.OH001);
        // console.log(typeof data.OH001);
        // console.log(data.OH001[0]);
        // console.log(Object.keys(data));
        // console.log(Object.keys(data)[0]);
        // console.log(Object.values(data)[0][0]);

        for(var i = 0; i < items_ham.length; i++){
          // console.log(items_ham[i].children[2]);
          // Remove every text price left
          items_ham[i].children[2].textContent = "";
          // Adding new price with
          // text = document.createTextNode("Vantar")
          text = document.createTextNode(punktur(Object.values(data)[i][0]) + " kr.");
          items_ham[i].children[2].appendChild(text);
          // console.log(items_ham[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Stór hamborgarar
    fetch("https:olsenolsen.is/src/data/storham.json" || ".src/data/storham.json")
    // fetch("./src/data/storham.json")
      .then((response) => response.json())
      .then((data) => {
        for(var i = 0; i < items_storham.length; i++){
          // console.log(items_storham[i].children[2]);
          // console.log(items_storham[i].children[2])
          // Remove every text price left
          items_storham[i].children[2].textContent = "";
          // Adding new price with
          // text = document.createTextNode("Vantar")
          text = document.createTextNode(punktur(Object.values(data)[i][0]) + " kr.");
          items_storham[i].children[2].appendChild(text);
          // console.log(items_storham[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));



    // Bátar Left
    fetch("https:olsenolsen.is/src/data/batar_left.json" || ".src/data/batar_left.json")
    // fetch("./src/data/batar_left.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("hello");
        // console.log(data);
        // console.log(items_batur[0]);
        // console.log(items_batur[0].children[1].children[0]);
        // console.log(items_batur[0].children[1].children[1]);
        // console.log(batar_left);
        // console.log(batar_left.children.length*2);
        // console.log(Object.values(data)[0][0]);
        // console.log(batar_left.children[0].children[1].children[0]);
        // console.log(typeof batar_left.children[0].children[1].children[0].textContent);
        j = 0;
        z = 0;


        for(var i=0; i < batar_left.children.length; i++){

          // batar_left > items_batur > verd_storoglitill > verd_litill
          batar_left.children[i].children[1].children[j].textContent = "";
          text = document.createTextNode("6\": " + punktur(Object.values(data)[z][0]) + " kr. ");
          batar_left.children[i].children[1].children[j].appendChild(text);

          z++;
          // batar_left > items_batur > verd_storoglitill > verd_stor
          batar_left.children[i].children[1].children[j+1].textContent = "";
          text = document.createTextNode("12\": " + punktur(Object.values(data)[z][0]) + " kr.");
          batar_left.children[i].children[1].children[j+1].appendChild(text);
          z++;
        }

      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));




    // Bátar Right
    fetch("https:olsenolsen.is/src/data/batar_right.json" || ".src/data/batar_right.json")
    // fetch("./src/data/batar_right.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("hello");
        // console.log(data);
        // console.log(items_batur[0]);
        // console.log(items_batur[0].children[1].children[0]);
        // console.log(items_batur[0].children[1].children[1]);
        // console.log(batar_right);
        // console.log(batar_right.children.length*2);
        // console.log(Object.values(data)[0][0]);
        // console.log(batar_right.children[0].children[1].children[0]);
        // console.log(typeof batar_right.children[0].children[1].children[0].textContent);
        j = 0;
        z = 0;


        for(var i=0; i < batar_right.children.length; i++){

          // batar_right > items_batur > verd_storoglitill > verd_litill
          batar_right.children[i].children[1].children[j].textContent = "";
          text = document.createTextNode("6\": " + punktur(Object.values(data)[z][0]) + " kr. ");
          batar_right.children[i].children[1].children[j].appendChild(text);

          z++;
          // batar_right > items_batur > verd_storoglitill > verd_stor
          batar_right.children[i].children[1].children[j+1].textContent = "";
          text = document.createTextNode("12\": " + punktur(Object.values(data)[z][0]) + " kr.");
          batar_right.children[i].children[1].children[j+1].appendChild(text);
          z++;
        }

      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));





    // Steikur og Fiskur
    fetch("https:olsenolsen.is/src/data/steikurogfiskur.json" || ".src/data/steikurogfiskur.json")
    // fetch("./src/data/steikurogfiskur.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        for(var i = 0; i < items_steikurogfiskur.length; i++){
          // console.log(items_steikurogfiskur[i].children[2]);
          // console.log(items_steikurogfiskur[i].children[2])
          // Remove every text price left
          items_steikurogfiskur[i].children[2].textContent = "";
          // Adding new price with
          // text = document.createTextNode("Vantar")
          text = document.createTextNode(punktur(Object.values(data)[i][0]) + " kr.");
          items_steikurogfiskur[i].children[2].appendChild(text);
          // console.log(items_steikurogfiskur[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));




    // Samlokur
    fetch("https:olsenolsen.is/src/data/samlokur.json" || ".src/data/samlokur.json")
    // fetch("./src/data/samlokur.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        for(var i = 0; i < items_samlokur.length; i++){
          // console.log(items_samlokur[i].children[2]);
          // console.log(items_samlokur[i].children[2])
          // Remove every text price left
          items_samlokur[i].children[2].textContent = "";
          // Adding new price with
          // text = document.createTextNode("Vantar")
          text = document.createTextNode(punktur(Object.values(data)[i][0]) + " kr.");
          items_samlokur[i].children[2].appendChild(text);
          // console.log(items_samlokur[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));



    // Salat
    fetch("https:olsenolsen.is/src/data/salat.json" || ".src/data/salat.json")
    // fetch("./src/data/salat.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("hello");
        // console.log(data);
        // console.log(items_batur[0]);
        // console.log(items_batur[0].children[1].children[0]);
        // console.log(items_batur[0].children[1].children[1]);
        // console.log(batar_right);
        // console.log(batar_right.children.length*2);
        // console.log(Object.values(data)[0][0]);
        // console.log(batar_right.children[0].children[1].children[0]);
        // console.log(typeof batar_right.children[0].children[1].children[0].textContent);
        j = 0;
        z = 0;

        // console.log(salat.children.length);
        // console.log(salat.children[1]);
        // console.log(salat.children[1].children[2]);


        // cai nay chi cho phep neu la matsedill.html vi la tieng bang dao
        if(window.location.href === "https:olsenolsen.is/matsedill.html" || window.location.href === "http://localhost:3000/matsedill.html") {
          // set var i = 1 because the first child i=0 is the menu title
          for(var i=1; i < salat.children.length; i++){

            // items_salat >  verd_storoglitill > verd_litill
            salat.children[i].children[2].children[j].textContent = "";
            text = document.createTextNode("Verð Lítið: " + punktur(Object.values(data)[z][0]) + " kr. ");
            salat.children[i].children[2].children[j].appendChild(text);

            z++;
            // items_salat >  verd_storoglitill > verd_stor
            salat.children[i].children[2].children[j+1].textContent = "";
            text = document.createTextNode("Verð Stórt: " + punktur(Object.values(data)[z][0]) + " kr.");
            salat.children[i].children[2].children[j+1].appendChild(text);
            z++;
          }
        }
        // cai nay chi cho phep neu la enskumatsedill.html vi la tieng anh
        else if(window.location.href === "https:olsenolsen.is/enskumatsedill.html" || window.location.href === "http://localhost:3000/enskumatsedill.html") {
          // set var i = 1 because the first child i=0 is the menu title
          for(var i=1; i < salat.children.length; i++){

            // items_salat >  verd_storoglitill > verd_litill
            salat.children[i].children[2].children[j].textContent = "";
            text = document.createTextNode("Small Salad: " + punktur(Object.values(data)[z][0]) + " kr. ");
            salat.children[i].children[2].children[j].appendChild(text);

            z++;
            // items_salat >  verd_storoglitill > verd_stor
            salat.children[i].children[2].children[j+1].textContent = "";
            text = document.createTextNode("Big Salad: " + punktur(Object.values(data)[z][0]) + " kr.");
            salat.children[i].children[2].children[j+1].appendChild(text);
            z++;
          }

        }



      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Barnamatseðill
    fetch("https:olsenolsen.is/src/data/barnamatsedill.json" || ".src/data/barnamatsedill.json")
    // fetch("./src/data/barnamatsedill.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        z = 0;

        // set var i = 1 because the first child i=0 is the menu title
        for(var i=1; i < barnamatsedill.children.length; i++){
          barnamatsedill.children[i].children[2].textContent = "";
          text = document.createTextNode(punktur(Object.values(data)[z][0]) + " kr.");
          barnamatsedill.children[i].children[2].appendChild(text);
          z++;
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Meðlæti
    fetch("https:olsenolsen.is/src/data/medlaeti.json" || ".src/data/medlaeti.json")
    // fetch("./src/data/medlaeti.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(window.location.href);

        // cai nay chi cho phep neu la matsedill.html vi la tieng bang dao
        if(window.location.href === "https:olsenolsen.is/matsedill.html" || window.location.href === "http://localhost:3000/matsedill.html") {
        // if(window.location.href === "http://localhost:3000/matsedill.html") {
          // franskar
          items_replace = document.querySelector(".franskar > .verd");
          console.log(items_replace);
          console.log(Object.values(data)[0][0]);
          items_replace.textContent = "Lítill: " + punktur(Object.values(data)[0][0]) + " kr. Stór: " + punktur(Object.values(data)[1][0]) + " kr.";

          // krullu franskar
          items_replace = document.querySelector(".krullu > .verd");
          items_replace.textContent = "Lítill: " + punktur(Object.values(data)[2][0]) + " kr. Miðstærð: " + punktur(Object.values(data)[3][0]) + " kr. Stór: " + punktur(Object.values(data)[4][0]) + " kr.";

          // sveita franskar
          items_replace = document.querySelector(".sveita > .verd");
          items_replace.textContent = "Lítill: " + punktur(Object.values(data)[5][0]) + " kr. Miðstærð: " + punktur(Object.values(data)[6][0]) + " kr. Stór: " + punktur(Object.values(data)[7][0]) + " kr.";

          // sæta franskar
          items_replace = document.querySelector(".saeta > .verd");
          items_replace.textContent = "Lítill: " + punktur(Object.values(data)[8][0]) + " kr. Miðstærð: " + punktur(Object.values(data)[9][0]) + " kr. Stór: " + punktur(Object.values(data)[10][0]) + " kr.";

          // laukhringi
          items_replace = document.querySelector(".laukhringi > .verd");
          items_replace.textContent = "Lítill: " + punktur(Object.values(data)[11][0]) + " kr. Stór: " + punktur(Object.values(data)[12][0]) + " kr.";

        }
        // cai nay chi cho phep neu la enskumatsedill.html vi la tieng anh
        else if(window.location.href === "https:olsenolsen.is/enskumatsedill.html" || window.location.href === "http://localhost:3000/enskumatsedill.html") {
        // else if(window.location.href === "http://localhost:3000/enskumatsedill.html") {
          // franskar
          items_replace = document.querySelector(".franskar > .verd");
          console.log(items_replace);
          console.log(Object.values(data)[0][0]);
          items_replace.textContent = "Half portion: " + punktur(Object.values(data)[0][0]) + " kr. Big portion: " + punktur(Object.values(data)[1][0]) + " kr.";

          // krullu franskar
          items_replace = document.querySelector(".krullu > .verd");
          items_replace.textContent = "Half portion: " + punktur(Object.values(data)[3][0]) + " kr. Big portion: " + punktur(Object.values(data)[4][0]) + " kr.";

          // sveita franskar
          items_replace = document.querySelector(".sveita > .verd");
          items_replace.textContent = "Half portion: " + punktur(Object.values(data)[6][0]) + " kr. Big portion: " + punktur(Object.values(data)[7][0]) + " kr.";

          // sæta franskar
          items_replace = document.querySelector(".saeta > .verd");
          items_replace.textContent = "Half portion: " + punktur(Object.values(data)[9][0]) + " kr. Big portion: " + punktur(Object.values(data)[10][0]) + " kr.";

          //laukhringi
          items_replace = document.querySelector(".laukhringi > .verd");
          items_replace.textContent = "Half portion: " + punktur(Object.values(data)[11][0]) + " kr. Big portion: " + punktur(Object.values(data)[12][0]) + " kr.";

        }

        // ostastangir
        items_replace = document.querySelectorAll(".stangir > .verd");
        items_replace[0].textContent = punktur(Object.values(data)[13][0]) + " kr.";
        // jalapeno ostabombur
        items_replace[1].textContent = punktur(Object.values(data)[14][0]) + " kr.";

        // Kjúklingalundir
        items_replace = document.querySelectorAll(".items_brunch");
        items_replace[0].children[2].textContent = punktur(Object.values(data)[15][0]) + " kr.";
        // Buffalo vængir
        items_replace[1].children[2].textContent = punktur(Object.values(data)[16][0]) + " kr.";
        // Buffalo naggar
        items_replace[2].children[2].textContent = punktur(Object.values(data)[17][0]) + " kr.";
        // Tempura rækjur
        items_replace[3].children[2].textContent = punktur(Object.values(data)[18][0]) + " kr.";
        // Blómkálsvængir
        items_replace[4].children[2].textContent = punktur(Object.values(data)[19][0]) + " kr.";
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Sósur
    fetch("https:olsenolsen.is/src/data/sosur.json" || ".src/data/sosur.json")
    // fetch("./src/data/sosur.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(allasosur);
        console.log(allasosur[1]);

        for(var i = 0; i < allasosur.length; i++) {
          allasosur[i].textContent = "";
          text = document.createTextNode(punktur(Object.values(data)[i][0]) + " kr.");
          allasosur[i].appendChild(text);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));










  }

  function punktur(tala) {
    // only work if price is with 4 digit and hope price does not grow more
    tala = tala + "";
    if(tala.length === 4) {
      tala = tala.substring(0,1) + "." + tala.substring(1,4);
    }
    return tala;
  }

  return {
    init: init
  };
})();
