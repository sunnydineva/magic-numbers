//  извиква head-content.html - съдържание на <head> - за лесно преизползване
//  където се ползва е необходимо <div id="head-container"></div>, където съдържанието да се налее
document.addEventListener("DOMContentLoaded", function () {
  fetch("head-content.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("head-container").innerHTML = data;
    });
});
