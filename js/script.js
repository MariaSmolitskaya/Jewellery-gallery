'use strict';

function fitProduct() {
  let product = document.querySelector('.fitting__products-img img');
  let fittingProduct = document.querySelector('.fitting__bracelet-img img');

  product.addEventListener('click', function (evt) {
    let productImgSrc = this.getAttribute('src');
    if (fittingProduct.src ==  productImgSrc) {
      fittingProduct.src = '';
    }
    fittingProduct.src = productImgSrc;
  });
}

fitProduct();
