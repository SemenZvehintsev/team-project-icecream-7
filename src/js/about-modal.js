(() => {
  const refs = {
    openaboutModalBtn: document.querySelector("[data-about-modal-open]"),
    closeaboutModalBtn: document.querySelector("[data-about-modal-close]"),
    modal: document.querySelector("[data-about-modal]"),
  };

  refs.openaboutModalBtn.addEventListener("click", toggleModal);
  refs.closeaboutModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();