//  извиква navbar.html - съдържание на <head> - за лесно преизползване
//  където се ползва е необходимо <div id="navbar-container"></div>, където съдържанието да се налее
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
