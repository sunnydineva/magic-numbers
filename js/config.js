// // `baseURL` отново се проверява, защото `config.js` може да не знае къде се намира
// const baseURL = window.location.hostname === "sunnydineva.github.io"
//   ? "https://sunnydineva.github.io/magic-numbers/"
//   : "/";

function loadScript(scriptPath) {
  // let script = document.createElement("script");
  // script.src = baseURL + scriptPath;
  // script.defer = true;
  // // document.head.appendChild(script);
  document.write(`<script src="${baseURL}${scriptPath}"><\/script>`)
}

// $(document).ready(function () {
//   let baseURL = window.location.hostname === "sunnydineva.github.io"
//     ? "https://sunnydineva.github.io/magic-numbers/"
//     : "/";
//
//   function loadScript(scriptPath) {
//     $.getScript(baseURL + scriptPath)
//       .done(function () {
//         console.log(`${scriptPath} зареден успешно.`);
//       })
//       .fail(function () {
//         console.error(`Грешка при зареждане на ${scriptPath}`);
//       });
//   }
//
//   // Зареждане на необходимите скриптове
//   loadScript("js/head-content.js");
//   loadScript("js/navbar.js");
//   loadScript("js/footer.js");
// })
