document.addEventListener("DOMContentLoaded", (e) => {
  let projectsText = document.getElementById("type-text");
  typingAnimation(projectsText);
  let headerText = document.querySelector("#home > h2");
  headerText.className = "active";
});

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

async function typingAnimation(el) {
  let text = "Check out my projects!";
  el.className = "blink";
  await wait(2200);
  el.className = "";
  for (let i = 0; i <= text.length; i++) {
    el.innerText = text.slice(0, i);
    await wait(120);
  }
  el.className = "blink";
  return new Promise((res) => res);
}
