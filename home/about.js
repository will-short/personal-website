document.addEventListener("DOMContentLoaded", (e) => {
  let buttons = document.querySelectorAll("#bottom > #buttons > h4");
  let portButtons = document.querySelectorAll("#pbuttons > li > button");
  let port = document.getElementById("portfolio");
  let contact = document.getElementById("contact");
  let alert = document.getElementById("submit");

  alert.className = "";
  contact.style.display = "none";

  buttons[0].addEventListener("click", () => {
    if (!buttons[0].className) {
      contact.style.display = "none";
      port.style.removeProperty("display");
      buttons[0].className = "clicked";
      buttons[1].className = "";
    }
  });
  buttons[1].addEventListener("click", () => {
    if (!buttons[1].className) {
      contact.style.removeProperty("display");
      port.style.display = "none";
      buttons[1].className = "clicked";
      buttons[0].className = "";
    }
  });
  console.log(portButtons[1]);

  portButtons[0].addEventListener("click", (e) => {
    let img = document.querySelector("#pcontent > img");
    img.src = "../pics/placeholder.png";
    portButtons[0].className = "highlight";
    portButtons[1].className = "";
    portButtons[2].className = "";
    portButtons[3].className = "";
  });

  portButtons[1].addEventListener("click", (e) => {
    let img = document.querySelector("#pcontent > img");
    img.src = "../pics/facebook-3-256.ico";
    portButtons[0].className = "";
    portButtons[1].className = "highlight";
    portButtons[2].className = "";
    portButtons[3].className = "";
  });
  portButtons[2].addEventListener("click", (e) => {
    let img = document.querySelector("#pcontent > img");
    img.src = "../pics/red_square.png";
    portButtons[0].className = "";
    portButtons[1].className = "";
    portButtons[2].className = "highlight";
    portButtons[3].className = "";
  });
  portButtons[3].addEventListener("click", (e) => {
    let img = document.querySelector("#pcontent > img");
    img.src = "../pics/red_square.png";
    portButtons[0].className = "";
    portButtons[1].className = "";
    portButtons[2].className = "";
    portButtons[3].className = "highlight";
  });

  document.querySelector("#contact-form").onsubmit = (e) => {
    e.target.submit();
    e.target.reset();
    alert.className = "fade";
    return false;
  };
});
