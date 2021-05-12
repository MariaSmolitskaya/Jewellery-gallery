'use strict';

const FIT_PRODUCTS = [
  {
    id: '10020',
    src: 'img/bracelet-fitting.png',
    type: 'bracelet',
    width: 322,
    top: 488,
    left: 148
  },
  {
    id: '10021',
    src: 'img/fitting-bracelet2.png',
    type: 'bracelet',
    width: 334,
    top: 472,
    left: 148
  },
  {
    id: '20020',
    src: 'img/fitting-ring.png',
    type: 'ring',
    width: 122,
    top: 240,
    left: 186,
    transform: 'rotate(348deg)'
  },
  {
    id: '20021',
    src: 'img/fitting-ring2.png',
    type: 'ring',
    width: 122,
    top: 240,
    left: 186,
    transform: 'rotate(348deg)'
  },
  {
    id: '30020',
    src: 'img/fitting-ring-falange.png',
    type: 'falange',
    width: 116,
    top: 140,
    left: 168,
    transform: 'rotate(348deg)'
  },
  {
    id: '10022',
    src: 'img/fitting-bracelet3.png',
    type: 'bracelet',
    width: 267,
    top: 511,
    left: 179
  },
  {
    id: '20022',
    src: 'img/fitting-ring3.png',
    type: 'ring',
    width: 125,
    top: 226,
    left: 179,
    transform: 'rotate(348deg)'
  },
  {
    id: '20023',
    src: 'img/fitting-ring4.png',
    type: 'ring',
    width: 199,
    top: 185,
    left: 143,
    transform: 'rotate(348deg)'
  },
  {
    id: '20024',
    src: 'img/fitting-ring5.png',
    type: 'ring',
    width: 122,
    top: 234,
    left: 186,
    transform: 'rotate(348deg)'
  },
  {
    id: '40020',
    src: 'img/fitting-necklace1.png',
    type: 'necklace',
    width: 297,
    top: 297,
    left: 156
  },
  {
    id: '40021',
    src: 'img/fitting-necklace2.png',
    type: 'necklace',
    width: 509,
    top: 52,
    left: 59
  },
  {
    id: '40022',
    src: 'img/fitting-necklace3.png',
    type: 'necklace',
    width: 323,
    top: 289,
    left: 142
  },
  {
    id: '40023',
    src: 'img/fitting-necklace4.png',
    type: 'necklace',
    width: 278,
    top: 293,
    left: 155,
    transform: 'rotate(5deg)'
  },
  {
    id: '40024',
    src: 'img/fitting-necklace5.png',
    type: 'necklace',
    width: 488,
    top: 83,
    left: 67
  },
  {
    id: '40025',
    src: 'img/fitting-necklace6.png',
    type: 'necklace',
    width: 488,
    top: 83,
    left: 67
  },
  {
    id: '50021',
    src: 'img/fitting-earring1.png',
    type: 'earring',
    width: 430,
    top: 274,
    left: 216
  },
  {
    id: '50022',
    src: 'img/fitting-earring2.png',
    type: 'earring',
    width: 409,
    top: 345,
    left: 176
  },
  {
    id: '50023',
    src: 'img/fitting-earring3.png',
    type: 'earring',
    width: 250,
    top: 320,
    left: 226
  },
  {
    id: '50024',
    src: 'img/fitting-earring4.png',
    type: 'earring',
    width: 180,
    top: 348,
    left: 264
  },
  {
    id: '50025',
    src: 'img/fitting-earring5.png',
    type: 'earring',
    width: 321,
    top: 309,
    left: 264
  },
  {
    id: '50026',
    src: 'img/fitting-earring6.png',
    type: 'earring',
    width: 224,
    top: 317,
    left: 247
  },
  {
    id: '50027',
    src: 'img/fitting-earring7.png',
    type: 'earring',
    width: 224,
    top: 317,
    left: 247
  },
  {
    id: '50028',
    src: 'img/fitting-earring8.png',
    type: 'earring',
    width: 224,
    top: 338,
    left: 247
  },
  {
    id: '50029',
    src: 'img/fitting-earring9.png',
    type: 'earring',
    width: 265,
    top: 327,
    left: 223
  }
];

let products = document.querySelectorAll('.fitting__goods-img');

const btnRing = document.querySelector('.fitting__btn-ring');
const btnNecklace = document.querySelector('.fitting__btn-necklace');
const btnEarring = document.querySelector('.fitting__btn-earring');
const fittingPhoto = document.querySelector('.fitting__photo-img img');
const fittingBracelet = document.querySelector('.fitting__bracelet-img img');
const fittingRing = document.querySelector('.fitting__ring-img img');
const fittingFalange = document.querySelector('.fitting__falange-img img');
const fittingNecklace = document.querySelector('.fitting__necklace-img img');
const fittingEarring = document.querySelector('.fitting__earring-img img');
const btnImgLoad = document.querySelector('.fitting__img-upload');
const btnZoomIn = document.querySelector('.fitting__zoom-in');
const btnZoomOut = document.querySelector('.fitting__zoom-out');

/*function fitProduct() {
  let products = document.querySelectorAll('.fitting__goods-img');
  let fittingProductBracelet = document.querySelector('.fitting__bracelet-img img');
  let fittingProductRing = document.querySelector('.fitting__ring-img img');
  let fittingProductFalange = document.querySelector('.fitting__falange-img img');

  for (let product of products) {
    product.addEventListener('click', function (evt) {
      if (this.classList.contains('fitting__goods-img--bracelet')) {
        let productImgSrc = this.querySelector('img.img-fit').getAttribute('src');
        if (fittingProductBracelet.src == productImgSrc) {
          fittingProductBracelet.src = '';
        } else {
          fittingProductBracelet.src = productImgSrc;
        }
      } else if (this.classList.contains('fitting__goods-img--ring')) {
        let productImgSrc = this.querySelector('img.img-fit').getAttribute('src');
        if (fittingProductRing.src == productImgSrc) {
          fittingProductRing.src = '';
        } else {
          fittingProductRing.src = productImgSrc;
        }
      } else if (this.classList.contains('fitting__goods-img--falange')) {
        let productImgSrc = this.querySelector('img.img-fit').getAttribute('src');
        if (fittingProductFalange.src == productImgSrc) {
          fittingProductFalange.src = '';
        } else {
          fittingProductFalange.src = productImgSrc;
        }
      }
    })
  }
};

fitProduct();*/


for (let product of products) {
  product.addEventListener('click', function () {
    for (let i = 0; i < FIT_PRODUCTS.length; i++) {
      if (this.id == FIT_PRODUCTS[i].id) {
        switch (FIT_PRODUCTS[i].type) {
          case "bracelet":
            let fittingBracelet = document.querySelector('.fitting__bracelet-img');
            let fittingBraceletImg = document.querySelector('.fitting__bracelet-img img');
            fittingBraceletImg.src = FIT_PRODUCTS[i].src;
            fittingBracelet.style.width = FIT_PRODUCTS[i].width + 'px';
            fittingBracelet.style.top = FIT_PRODUCTS[i].top + 'px';
            fittingBracelet.style.left = FIT_PRODUCTS[i].left + 'px';
            break;
          case "ring":
            let fittingRing = document.querySelector('.fitting__ring-img');
            let fittingRingImg = document.querySelector('.fitting__ring-img img');
            fittingRingImg.src = FIT_PRODUCTS[i].src;
            fittingRing.style.width = FIT_PRODUCTS[i].width + 'px';
            fittingRing.style.top = FIT_PRODUCTS[i].top + 'px';
            fittingRing.style.left = FIT_PRODUCTS[i].left + 'px';
            fittingRing.style.transform = FIT_PRODUCTS[i].transform;
            break;
          case "falange":
            let fittingFalange = document.querySelector('.fitting__falange-img');
            let fittingFalangeImg = document.querySelector('.fitting__falange-img img');
            fittingFalangeImg.src = FIT_PRODUCTS[i].src;
            fittingFalangeImg.style.width = FIT_PRODUCTS[i].width + 'px';
            fittingFalange.style.top = FIT_PRODUCTS[i].top + 'px';
            fittingFalange.style.left = FIT_PRODUCTS[i].left + 'px';
            fittingFalange.style.transform = FIT_PRODUCTS[i].transform;
            break;
          case "necklace":
            let fittingNecklace = document.querySelector('.fitting__necklace-img');
            let fittingNecklaceImg = document.querySelector('.fitting__necklace-img img');
            fittingNecklaceImg.src = FIT_PRODUCTS[i].src;
            fittingNecklaceImg.style.width = FIT_PRODUCTS[i].width + 'px';
            fittingNecklace.style.top = FIT_PRODUCTS[i].top + 'px';
            fittingNecklace.style.left = FIT_PRODUCTS[i].left + 'px';
            fittingNecklace.style.transform = FIT_PRODUCTS[i].transform;
            break;
          case "earring":
            let fittingEarring = document.querySelector('.fitting__earring-img');
            let fittingEarringImg = document.querySelector('.fitting__earring-img img');
            fittingEarringImg.src = FIT_PRODUCTS[i].src;
            fittingEarringImg.style.width = FIT_PRODUCTS[i].width + 'px';
            fittingEarring.style.top = FIT_PRODUCTS[i].top + 'px';
            fittingEarring.style.left = FIT_PRODUCTS[i].left + 'px';
            fittingEarring.style.transform = FIT_PRODUCTS[i].transform;
            break;
        }
      }
    }
  })
}

btnRing.addEventListener('click', function () {
  fittingPhoto.src = 'img/woman-hand.png';
  fittingNecklace.src = '';
  fittingEarring.src = '';
});

btnNecklace.addEventListener('click', function () {
  fittingPhoto.src = 'img/neck.jpg';
  fittingRing.src = '';
  fittingFalange.src = '';
  fittingBracelet.src = '';
  fittingEarring.src = '';
});

btnEarring.addEventListener('click', function () {
  fittingPhoto.src = 'img/photo-ear.jpg';
  fittingNecklace.src = '';
  fittingRing.src = '';
  fittingFalange.src = '';
  fittingBracelet.src = '';
});


// btnZoomIn.addEventListener('click', function (){
//   let currWidth = fittingPhoto.clientWidth;
//   fittingPhoto.style.width = (currWidth + 50) + "px";
// });
//
//
// btnZoomOut.addEventListener('click', function (){
//   let currWidth = fittingPhoto.clientWidth;
//   fittingPhoto.style.width = (currWidth - 50) + "px";
// });
//
// document.onkeydown=function(){
//   fittingPhoto.style.left = (parseInt(myimg.style.left) + myevent(0)) + "px";
//   fittingPhoto.style.top = (parseInt(myimg.style.top) + myevent(1)) + "px";
// }
// function myevent(e){
//   return Math.round(Math.sin((event.keyCode - 2 - e) / 2 * Math.PI));
// }
