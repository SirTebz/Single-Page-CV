document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".dropdown-trigger");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault(); 

      const wrapper = event.target.closest(".dropdown-wrapper");
      const content = wrapper.querySelector(".dropdown-content");

      content.classList.toggle("show");

      closeOtherDropdowns(wrapper);
    });
  });

  function closeOtherDropdowns(currentWrapper) {
    document
      .querySelectorAll(".dropdown-content.show")
      .forEach(function (openDropdown) {
        if (openDropdown.closest(".dropdown-wrapper") !== currentWrapper) {
          openDropdown.classList.remove("show");
        }
      });
  }

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".dropdown-trigger") &&
      !event.target.closest(".dropdown-content")
    ) {
      document
        .querySelectorAll(".dropdown-content.show")
        .forEach(function (openDropdown) {
          openDropdown.classList.remove("show");
        });
    }
  });
});
