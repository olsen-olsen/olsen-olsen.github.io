document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  changeImage.init(container);
});


/*************************
   *
   * changeImage: main function that will give animation when clicked on buttons.
   * @param
   * @return nothing
   *
   ************************/
const changeImage = (() => {
  let container;
  let parents;
  var imageList;
  var image;
  var imageArray = [];
  var clicked = -1;
  var buttonList;
  var buttons;
  var button;
  var arrayNumberOfParent = [];
  var arrayNumberOfImage = [];

  function init(_container) {
    container = _container;
    // parent                  > children                > grandchildren
    // div.menu_image and more > images + buttonList     > buttons inside buttonList
    parents = container.children;
    console.log(parents);
    // console.log(container.children[3]);
    // console.log(container.children[3].getAttribute('class') === 'menu_image');
    // console.log(container.children);
    //
    // Here we want to scan the hole page to find the child with img attribute,
    // when finish scanning we put value into 2 arrays,
    // arrayNumberOfParent which include number of parent nth-number with .menu_image class in .container.
    // arrayNumberOfImage which include number of all childrens inside .menu_image class.
    scanPage(parents);
    // We want to hide or stack all image onto each other from beginning, we use z-index.
    // stackImage(arrayNumberOfParent, arrayNumberOfImage);
    console.log(arrayNumberOfParent);
    console.log(arrayNumberOfImage);
    // and when we find that child, we wanna find how many image inside that child
    // than we wanna add as much number of button so it equal to number of image.
    // so tree has depth of 3, div.container > div.menu_img > img
    generateButtons(arrayNumberOfParent, arrayNumberOfImage);
    // Now first button will call out first image and then second button will call out second image and so on and so forth
    // Now we want to click on button to call out the image
    clickImage();
  }

  /*************************
     *
     * stackImage: Stack image over other image.
     * @param numberOfBI: number of buttons and images
     * @param chidrenArray : Array of numbers children of div.menu_image
     * @return nothing
     *
     ************************/
  function clickImage() {
    // for(var i = 0; i<arrayNumberOfImage.length; i++) {
    //   imageList = parents[arrayNumberOfParent[i]].children[0];
    //   // buttonList = parents[arrayNumberOfParent[i]].children[1];
    //   image = imageList.children;
    //   // buttons = buttonList.children;
    //   for(var j=0; j<image.length; j++) {
    //     imageArray.push(image[j].getAttribute('src'));
    //   }
    // }
    // console.log(imageArray);
    // for(var a=0; a<arrayNumberOfImage.length; a++) {
    //   buttonList = parents[arrayNumberOfParent[a]].children[1];
    //   buttons = buttonList.children;
    //   console.log(buttons);
    //   buttons[a].
    // }


    console.log(arrayNumberOfImage.length);
    for(var i=0; i<arrayNumberOfImage.length; i++) {
      imageList = parents[arrayNumberOfParent[i]].children[0];
      buttonList = parents[arrayNumberOfParent[i]].children[1];
      for(var j=0; j<arrayNumberOfImage[i]; j++) {
        image = imageList.children[j];
        buttons = buttonList.children[j];
        // console.log(image);
        // console.log(i);
        // isButtonClicked(imageList);
        buttonClick(buttons,image, imageList, j);
      }
    }
  }

  // function isButtonClicked(imageList) {
  //   for(var i=0; i<imageList.children.length; i++) {
  //     if(imageList.children[i].getAttribute('display') === ('none')) {
  //       console.log(true);
  //     }
  //     else console.log(false);
  //   }
  // }
  function buttonClick(buttons,image, imageList, j) {
    buttons.addEventListener('click', () => {
      // image.style.display = 'none';
      // console.log(image);
      // console.log(imageList);
      // console.log(imageList.children.length);
      // isButtonClicked(imageList);

      for(var i=0; i<imageList.children.length; i++) {
        if(i!==j && clicked === -1) {
          imageList.children[i].style.display = 'none';
          console.log('none');
          break;
        }
        if(clicked !== -1) {
          imageList.children[clicked].style.display = '';
          imageList.children[i].style.display = 'none';
          console.log('revert');
          clicked = -1;
          break;
        }
        clicked = j;
      }
    });
  }

  /*************************
     *
     * stackImage: Stack image over other image.
     * @param parentArray : Array of nth-number of div.menu_image
     * @param chidrenArray : Array of numbers children of div.menu_image
     * @return nothing
     *
     ************************/
  // function stackImage(parentArray, childrenArray) {
  //   console.log(parentArray);
  //   console.log(childrenArray);
  //   console.log(parents[parentArray[0]].children[0]);

  //   for (var b = 0; b < parentArray.length; b++) {
  //     imageList = parents[parentArray[b]].children[0];
  //     imageList.setAttribute('position', 'relative');
  //     for(var c = 0; c < imageList.children.length; c++) {
  //       if(c+1===imageList.children.length) {
  //         imageList.children[c].setAttribute('position', 'relative');
  //       }
  //       else {
  //         imageList.children[c].setAttribute('position', 'absolute');
  //       }
  //       imageList.children[c].style.zIndex = c;
  //       console.log(imageList.children[c]);
  //     }
  //   }
  // }

  /*************************
     *
     * createAttribute: create attribute to image
     * @param nodeNR : node parent
     * @param zindex : z-index number
     * @return image with attribute
     *
     ************************/
  function createAttribute(nodeNR, zindex) {
    // youngChildNode.setAttribute('position', 'absolute');
    // youngChildNode.setAttribute('z-index', zindex);
    // nodeNR.appendChild(youngChildNode);
    // console.log(youngChildNode);
    // return nodeNR;
  }

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

  /*************************
     *
     * generateButtons: Create as much click buttons as possible so the buttons number is equal to number of image
     * @param parent : Array with nth-number of parent.
     * @param children : Array with number of images inside .menu_image (parent).
     * @return nothing
     *
     ************************/
  function generateButtons (parent, children) {
    // var buttonList = parents.querySelector('.buttonList')
    for(var l=0; l<parent.length; l++) {
      for(var n=0; n<children[l]; n++) {
        button = document.createElement('button');
        button.setAttribute('class', 'buttons');
        //.menu_image > .buttonList appendChild button to that.
        parents[parent[l]].querySelector('.buttonList').appendChild(button);
      }
    }
  }
  return {
    init: init
  };
})();
