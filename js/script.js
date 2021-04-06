'use strict';

const FIT_PRODUCTS = [
  {
    id: '10020',
    src: 'img/bracelet-fitting.png',
    type: 'bracelet',
    width: 322,
    top: 488,
    left: 146
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
  }
];

let products = document.querySelectorAll('.fitting__goods-img');

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
        }
      }
    }
  })
}
