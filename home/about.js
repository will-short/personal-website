document.addEventListener("DOMContentLoaded", (e) => {
  let buttons = document.querySelectorAll("#bottom > #buttons > h4");
  let port = document.getElementById("portfolio");
  let contact = document.getElementById("contact");
  buttons[0].addEventListener("click", () => {
    if (!buttons[0].className) {
      contact.style.zIndex = "-1";
      port.style.zIndex = "1";
      buttons[0].className = "clicked";
      buttons[1].className = "";
    }
  });
  buttons[1].addEventListener("click", () => {
    if (!buttons[1].className) {
      contact.style.zIndex = "1";
      port.style.zIndex = "-1";
      buttons[1].className = "clicked";
      buttons[0].className = "";
    }
  });

  document.querySelector("#contact-form").onsubmit = (e) => {
    e.target.submit();
    e.target.reset();
    let alert = document.getElementById("submit");
    alert.className = "fade";
    setTimeout(() => (alert.className = "fadeOut"), 2500);
    return false;
  };
});
