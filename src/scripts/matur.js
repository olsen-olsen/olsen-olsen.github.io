
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  doigia.init(container);
});


const doigia = (() => {
  var text;
  var valueham;
  var j, z;

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

    // console.log(items_ham);
    // console.log(items_ham.length);
    // console.log(items_ham[0].children[2].getAttribute("class") === "verd OH001");
    // console.log(items_ham[0].children[2].textContent);


    // Hamborgarar
    // fetch("../data/ham.json")
    fetch("http://localhost:3000/src/data/ham.json")
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
          text = document.createTextNode(Object.values(data)[i][0] + " kr.");
          items_ham[i].children[2].appendChild(text);
          // console.log(items_ham[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Stór hamborgarar
    // fetch("../data/storham.json")
    fetch("http://localhost:3000/src/data/storham.json")
      .then((response) => response.json())
      .then((data) => {
        for(var i = 0; i < items_storham.length; i++){
          // console.log(items_storham[i].children[2]);
          // console.log(items_storham[i].children[2])
          // Remove every text price left
          items_storham[i].children[2].textContent = "";
          // Adding new price with
          // text = document.createTextNode("Vantar")
          text = document.createTextNode(Object.values(data)[i][0] + " kr.");
          items_storham[i].children[2].appendChild(text);
          // console.log(items_storham[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));



    // Bátar Left
    // fetch("../data/batar_left.json")
    fetch("http://localhost:3000/src/data/batar_left.json")
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
          text = document.createTextNode("6\": " + Object.values(data)[z][0] + " kr. ");
          batar_left.children[i].children[1].children[j].appendChild(text);

          z++;
          // batar_left > items_batur > verd_storoglitill > verd_stor
          batar_left.children[i].children[1].children[j+1].textContent = "";
          text = document.createTextNode("12\": " + Object.values(data)[z][0] + " kr.");
          batar_left.children[i].children[1].children[j+1].appendChild(text);
          z++;
        }

      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));




    // Bátar Right
    // fetch("../data/batar_right.json")
    fetch("http://localhost:3000/src/data/batar_right.json")
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
          text = document.createTextNode("6\": " + Object.values(data)[z][0] + " kr. ");
          batar_right.children[i].children[1].children[j].appendChild(text);

          z++;
          // batar_right > items_batur > verd_storoglitill > verd_stor
          batar_right.children[i].children[1].children[j+1].textContent = "";
          text = document.createTextNode("12\": " + Object.values(data)[z][0] + " kr.");
          batar_right.children[i].children[1].children[j+1].appendChild(text);
          z++;
        }

      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));





    // Steikur og Fiskur
    // fetch("../data/steikurogfiskur.json")
    fetch("http://localhost:3000/src/data/steikurogfiskur.json")
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
          text = document.createTextNode(Object.values(data)[i][0] + " kr.");
          items_steikurogfiskur[i].children[2].appendChild(text);
          // console.log(items_steikurogfiskur[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));




    // Samlokur
    // fetch("../data/samlokur.json")
    fetch("http://localhost:3000/src/data/samlokur.json")
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
          text = document.createTextNode(Object.values(data)[i][0] + " kr.");
          items_samlokur[i].children[2].appendChild(text);
          // console.log(items_samlokur[i].children[2].textContent);
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));



    // Salat
    // fetch("../data/salat.json")
    fetch("http://localhost:3000/src/data/salat.json")
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

        // set var i = 1 because the first child i=0 is the menu title
        for(var i=1; i < salat.children.length; i++){

          // items_salat >  verd_storoglitill > verd_litill
          salat.children[i].children[2].children[j].textContent = "";
          text = document.createTextNode("Verð Lítið: " + Object.values(data)[z][0] + " kr. ");
          salat.children[i].children[2].children[j].appendChild(text);

          z++;
          // items_salat >  verd_storoglitill > verd_stor
          salat.children[i].children[2].children[j+1].textContent = "";
          text = document.createTextNode("Verð Stórt: " + Object.values(data)[z][0] + " kr.");
          salat.children[i].children[2].children[j+1].appendChild(text);
          z++;
        }

      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


    // Barnamatseðill
    // fetch("../data/barnamatsedill.json")
    fetch("http://localhost:3000/src/data/barnamatsedill.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        z = 0;

        // set var i = 1 because the first child i=0 is the menu title
        for(var i=1; i < barnamatsedill.children.length; i++){
          barnamatsedill.children[i].children[2].textContent = "";
          text = document.createTextNode(Object.values(data)[z][0] + " kr.");
          barnamatsedill.children[i].children[2].appendChild(text);
          z++;
        }
      })
      .catch((error) =>
        console.error("Unable to fetch data:", error));


  }

  return {
    init: init
  };
})();
