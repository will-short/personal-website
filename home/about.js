document.addEventListener("DOMContentLoaded", (e) => {
  let buttons = document.querySelectorAll("#bottom > #buttons > h4");
  let bottom = document.getElementById("bottom");
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
    return false;
  };
});
