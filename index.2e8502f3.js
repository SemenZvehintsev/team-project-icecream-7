(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),$(".multiple-items").slick({autoplay:!0,autoplaySpeed:2e3,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),(()=>{const e={openModalBtn:document.querySelector("[data-modal-contacts-open]"),closeModalBtn:document.querySelector("[data-modal-contacts-close]"),modal:document.querySelector("[data-modal-contacts]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openProductsModalPinkBtn:document.querySelector("[data-products-modal-pink-open]"),closeProductsModalPinkBtn:document.querySelector("[data-products-modal-pink-close]"),productsModalPink:document.querySelector("[data-products-modal-pink]")};function o(){e.productsModalPink.classList.toggle("is-hidden")}e.openProductsModalPinkBtn.addEventListener("click",o),e.closeProductsModalPinkBtn.addEventListener("click",o)})(),(()=>{const e={openProductsModalYellowBtn:document.querySelector("[data-products-modal-yellow-open]"),closeProductsModalYellowBtn:document.querySelector("[data-products-modal-yellow-close]"),productsModalYellow:document.querySelector("[data-products-modal-yellow]")};function o(){e.productsModalYellow.classList.toggle("is-hidden")}e.openProductsModalYellowBtn.addEventListener("click",o),e.closeProductsModalYellowBtn.addEventListener("click",o)})(),(()=>{const e={openProductsModalGreenBtn:document.querySelector("[data-products-modal-green-open]"),closeProductsModalGreenBtn:document.querySelector("[data-products-modal-green-close]"),productsModalGreen:document.querySelector("[data-products-modal-green]")};function o(){e.productsModalGreen.classList.toggle("is-hidden")}e.openProductsModalGreenBtn.addEventListener("click",o),e.closeProductsModalGreenBtn.addEventListener("click",o)})(),(()=>{const e={openaboutModalBtn:document.querySelector("[data-about-modal-open]"),closeaboutModalBtn:document.querySelector("[data-about-modal-close]"),modal:document.querySelector("[data-about-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openaboutModalBtn.addEventListener("click",o),e.closeaboutModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.2e8502f3.js.map