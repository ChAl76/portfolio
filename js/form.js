const MODAL_ACTIVE_CLASS_NAME = "modal-active";

document.addEventListener("DOMContentLoaded", () => {
  const formModal = document.querySelector("#form-modal");
  const successModal = document.querySelector("#success-modal");
  const form = document.querySelector("#form");
  const form_2 = document.querySelector("#form_2");

  const openFormModalBtn = document.querySelector("#open-form-modal-btn");
  const launchBtn = document.querySelector("#launch-btn");
  const closeBtns = document.querySelectorAll(".close-btn");

  openFormModalBtn.addEventListener("click", () => {
    formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
  });

  const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  };

  const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  };

  const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
  };

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeFormModal();
      closeSuccessModal();
    });
  });

  function clearFormFields() {
    const modalFiends = formModal.querySelectorAll("input");

    modalFiends.forEach((field) => {
      field.value = "";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
          closeFormModal();
          setTimeout(openSuccessModal, 300);
          setTimeout(closeSuccessModal, 2500);
          clearFormFields();
        }, 1000);
      })
      .catch((error) => console.log("Sending form failed"));
  });

  form_2.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form_2);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
          setTimeout(openSuccessModal, 300);
          setTimeout(closeSuccessModal, 2500);
          clearFormFields();
        }, 1000);
      })
      .catch((error) => console.log("Sending form failed"));
  });
});
