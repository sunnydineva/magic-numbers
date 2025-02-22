//  извиква footer.html
//  където се ползва е необходимо <div id="footer-container"></div>, където съдържанието да се налее
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
