// const productsCardBtn = document.querySelectorAll('.products-card-btn');
// const productsBackdrop = document.querySelector('.products-backdrop');

// productsCardBtn.forEach(el => {
//   el.addEventListener('click', e => {
//     let path = e.currentTarget.getAttribute('data-path');
//     productsBackdrop.classList.add('products-backdrop--vissible');
//     document
//       .querySelector('[data-target = "$ {path}"]')
//       .classList.add('products-modal--vissible');
//   });
// });

(() => {
  const refs = {
    openProductsModalPinkBtn: document.querySelector(
      '[data-products-modal-pink-open]'
    ),
    closeProductsModalPinkBtn: document.querySelector(
      '[data-products-modal-pink-close]'
    ),
    productsModalPink: document.querySelector('[data-products-modal-pink]'),
  };

  refs.openProductsModalPinkBtn.addEventListener(
    'click',
    toggleProductsModalPink
  );
  refs.closeProductsModalPinkBtn.addEventListener(
    'click',
    toggleProductsModalPink
  );

  function toggleProductsModalPink() {
    refs.productsModalPink.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openProductsModalYellowBtn: document.querySelector(
      '[data-products-modal-yellow-open]'
    ),
    closeProductsModalYellowBtn: document.querySelector(
      '[data-products-modal-yellow-close]'
    ),
    productsModalYellow: document.querySelector('[data-products-modal-yellow]'),
  };

  refs.openProductsModalYellowBtn.addEventListener(
    'click',
    toggleProductsModalYellow
  );
  refs.closeProductsModalYellowBtn.addEventListener(
    'click',
    toggleProductsModalYellow
  );

  function toggleProductsModalYellow() {
    refs.productsModalYellow.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openProductsModalGreenBtn: document.querySelector(
      '[data-products-modal-green-open]'
    ),
    closeProductsModalGreenBtn: document.querySelector(
      '[data-products-modal-green-close]'
    ),
    productsModalGreen: document.querySelector('[data-products-modal-green]'),
  };

  refs.openProductsModalGreenBtn.addEventListener(
    'click',
    toggleProductsModalGreen
  );
  refs.closeProductsModalGreenBtn.addEventListener(
    'click',
    toggleProductsModalGreen
  );

  function toggleProductsModalGreen() {
    refs.productsModalGreen.classList.toggle('is-hidden');
  }
})();
