(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-nav-open]"),
    closeModalBtn: document.querySelector("[data-modal-nav-close]"),
    modal: document.querySelector("[data-modal-nav]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
