document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  changeImage.init(container);
});
const changeImage = (() => {
  let container;
  let parents;
  var arrayNumberOfParent = [];
  var arrayNumberOfImage = [];
  var images;
  var imageList;
  var i;
  /*************************
     *
     * Main function
     * @param container : place where we modified
     * @return nothing
     *
     ************************/
  function init(_container) {
    container = _container;
    // parent                  > children                > grandchildren
    // div.menu_image and more > images + buttonList     > buttons inside buttonList
    parents = container.children;
    console.log(parents);
    scanPage(parents);
    console.log(arrayNumberOfParent); // [0, 3, 5, 10] menu_image or container.children[0], container.children[3], container.children[5], container.children[10]
    console.log(arrayNumberOfImage); // [3, 1, 1, 1] imageList or menu_image.children[0]
    // animationFunction();
    imageList = parents[arrayNumberOfParent[0]].children[0];
    for(var k=0; k<imageList.children.length; k++) {
      imageList.children[k].style.display = 'none';
      imageList.children[k].style.width = '100%';
    }
    console.log(imageList);
    var images = imageList.children;
    animationFunction(images);
  }

  function animationFunction(images) {
    i = 0;
    setInterval(() => {
      if(i == 0) {
        images[i].style.display = 'block';
      } else if(i == images.length ) {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
      } else {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
      }

      i++;
    },2000);
  }

  // function runImages(j, imageList) {
  //   if(j === 0) {
  //     imageList.children[j].style.display = '';
  //     console.log(j);
  //   }
  //   else if(j === imageList.children.length) {
  //     imageList.children[j-1].style.display = 'none';
  //     imageList.children[0].style.display = '';
  //     j = 0;
  //     console.log(j);
  //   }
  //   else {
  //     imageList.children[j-1].style.display = 'none';
  //     imageList.children[j].style.display = '';
  //     console.log(j);
  //   }
  //   j++;

  // }
  /*************************
     *
     * scanPage: scan whole page to see if there are any Children with class img, purpose is to self generate buttons if adding more picture to page on unsigned locations.
     * @param childrenList : list of all children of the page.
     * @return nothing
     *
     ************************/
  function scanPage(childrenList) {
    for(var k=0; k<childrenList.length; k++) {
      // if parent number k has class = .menu_image and the first child of that parent has class = .imageList
      if((childrenList[k].getAttribute('class') === 'menu_image') && (childrenList[k].children[0].getAttribute('class') === 'imageList')) {
        arrayNumberOfParent.push(k);
        // push in array the number of image that is inside div.imageList
        arrayNumberOfImage.push(childrenList[k].children[0].childElementCount);
      }
    }
  }
  return {
    init: init
  };
})();
