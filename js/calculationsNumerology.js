
function resourceUrl() {
  return window.location.hostname === "sunnydineva.github.io"
      ? "https://sunnydineva.github.io/magic-numbers/"
      : "/";
  // document.write(`<script src="${baseURL}js/config.js"><\/script>`);
}


function calculateNameNumber() {
  if (!validateFullName()) {
    return; // Спира изпълнението, ако името не е валидно
  }
  let name = document.getElementById('name').value.toUpperCase();

  if (!name) {
    document.getElementById('result').innerHTML = '<p>Моля, попълнете своето име.</p>';
    return;
  }

  showResultContainer();

  // Число на името (по Питагоровата система)
  const numerologyTable = {
    'А': 1, 'Б': 2, 'В': 3, 'Г': 4, 'Д': 5, 'Е': 6, 'Ж': 7, 'З': 8, 'И': 9,
    'Й': 1, 'К': 2, 'Л': 3, 'М': 4, 'Н': 5, 'О': 6, 'П': 7, 'Р': 8, 'С': 9,
    'Т': 1, 'У': 2, 'Ф': 3, 'Х': 4, 'Ц': 5, 'Ч': 6, 'Ш': 7, 'Щ': 8, 'Ъ': 9,
    'Ь': 1, 'Ю': 2, 'Я': 3, '-': 0
  };

  let nameNumber = name.split('').reduce((sum, letter) => {
    return sum + (numerologyTable[letter] || 0);
  }, 0);
  while (nameNumber > 9) {
    nameNumber = String(nameNumber).split('').reduce((sum, num) => sum + parseInt(num), 0);
  }

  document.getElementById('result').innerHTML = `
                <p><strong>Число на името:</strong> ${nameNumber}</p>
            `;
  // let description = "";
  // switch (nameNumber) {
  //   case 1:
  //     description = "Енергичен и амбициозен лидер.";
  //     break;
  //   case 2:
  //     description = "Дипломатичен, търпелив и състрадателен.";
  //     break;
  //   case 3.txt:
  //     description = "Креативен, изразителен и оптимистичен.";
  //     break;
  //   case 4:
  //     description = "Стабилен, организиран и надежден.";
  //     break;
  //   case 5:
  //     description = "Свободолюбив, приключенски настроен и комуникативен.";
  //     break;
  //   case 6:
  //     description = "Грижовен, семеен и отговорен.";
  //     break;
  //   case 7:
  //     description = "Интелектуален, аналитичен и духовен.";
  //     break;
  //   case 8:
  //     description = "Амбициозен, материалистичен и силен лидер.";
  //     break;
  //   case 9:
  //     description = "Хуманитарен, алтруистичен и състрадателен.";
  //     break;
  //   default:
  //     description = "Неопределено число.";

  // изписва Число на името и Описание, заредено от ресурсни файлове, според стойността на nameNumber
  // ако ресурсен файл за съответното число липсва - изписва съобщение за грешка, вместо 404
  fetch(`resourceUrl()+../../resources/name/${nameNumber}.txt`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Файлът не е намерен (${response.status})`);
      }
      return response.text();
    })
    .then(description => {
      // document.getElementById('result').innerHTML = `
      //       <p><strong>Число на името:</strong> ${nameNumber}</p>
      //   `;
      document.getElementById('description').innerHTML = `
            <p class='italic-text'><strong>Описание:</strong> ${description}</p>
        `;
    })
    .catch(error => {
      console.error("Грешка при зареждането на файла:", error);
      document.getElementById('description').innerHTML = "<p class='italic-text'>Няма налично описание за това число.</p>";
    });

  // **Фетч за изображение**
  let imgElement = document.getElementById('result-img');

  // Задава ново изображение спрямо nameNumber
  // imgElement.innerHTML = `<img src=../../resources/result-img/${nameNumber}.jpg" alt="Изображение за число ${nameNumber}" class="img-result" id="img-result">`;
  imgElement.innerHTML = `<img src=${resourceUrl()}resources/result-img/${nameNumber}.jpg" alt="Изображение за число ${nameNumber}" class="img-result" id="img-result">`;
  formatResultImg();

  // Проверка дали изображението съществува
  let testImage = new Image();
  testImage.src = `resourceUrl()+../../resources/result-img/${nameNumber}.jpg`;
  testImage.onload = function () {
    imgElement.innerHTML = `<img src="${resourceUrl()}resources/result-img/${nameNumber}.jpg" alt="Изображение за число ${nameNumber}" class="img-result">`;
  };
  testImage.onerror = function () {
    imgElement.innerHTML = "<p class='italic-text'>Няма налично изображение за това число.</p>";
  };


  // document.getElementById('result').innerHTML = `
  //       <p><strong>Число на името:</strong> ${nameNumber}</p>
  //   `;
  //
  //   document.getElementById('description').innerHTML = `
  //       <p><strong>Описание:</strong> ${description}</p>
  //   `;
  // }
}

function validateFullName() {
  let fullName = document.getElementById('name').value.trim();

  // поне два интервала (три имена)
  if ((fullName.split(" ").length - 1) < 2) {
    alert("Моля, въведете три имена.");
    return false;
  }
  return true;
}


function calculateDestinyNumber() {
  let birthdate = document.getElementById('birthdate').value;

  if (!birthdate) {
    document.getElementById('result').innerHTML = '<p>Моля, изберете дата от календара.</p>';
    return;
  }


  showResultContainer();

  // Число на съдбата (сума на цифрите в датата)
  let destinyNumber = birthdate.replace(/-/g, '').split('').reduce((sum, num) => sum + parseInt(num), 0);
  while (destinyNumber > 9) {
    destinyNumber = String(destinyNumber).split('').reduce((sum, num) => sum + parseInt(num), 0);
  }

  document.getElementById('result').innerHTML = `
                <p><strong>Число на съдбата:</strong> ${destinyNumber}</p>
            `;

  // изписва Число на името и Описание, заредено от ресурсни файлове, според стойността на nameNumber
  // ако ресурсен файл за съответното число липсва - изписва съобщение за грешка, вместо 404
  fetch(`resourceUrl()+../../resources/destiny/${destinyNumber}.txt`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Файлът не е намерен (${response.status})`);
        }
        return response.text();
      })
      .then(description => {
        document.getElementById('description').innerHTML = `
            <p class='italic-text'><strong>Описание:</strong> ${description}</p>
        `;
      })
      .catch(error => {
        console.error("Грешка при зареждането на файла:", error);
        document.getElementById('description').innerHTML = "<p class='italic-text'>Няма налично описание за това число.</p>";
      });

  // **Фетч за изображение**
  let imgElement = document.getElementById('result-img');

  // Задава ново изображение спрямо nameNumber
  imgElement.innerHTML = `<img src="${resourceUrl()}resources/result-img/${destinyNumber}.jpg" alt="Изображение за число ${destinyNumber}" class="img-result" id="img-result">`;
  formatResultImg();

  // Проверка дали изображението съществува
  let testImage = new Image();
  testImage.src = `resourceUrl()+../../resources/result-img/${destinyNumber}.jpg`;
  testImage.onload = function () {
    imgElement.innerHTML = `<img src="${resourceUrl()}resources/result-img/${destinyNumber}.jpg" alt="Изображение за число ${destinyNumber}" class="img-result">`;
  };
  testImage.onerror = function () {
    imgElement.innerHTML = "<p class='italic-text'>Няма налично изображение за това число.</p>";
  };
}

function clearResultDescription()
{
  document.getElementById('result').innerHTML = '';
  document.getElementById('description').innerHTML = '';
  hideResultContainer();
}

function showResultContainer() {
  let element = document.getElementById("numerology-result-container");
  element.style.display = "flex"; // Променя display: none; на block
}

function hideResultContainer() {
  let element = document.getElementById("numerology-result-container");
  element.style.display = "none"; // Променя display: none; на block
}


function formatResultImg() {
  let element = document.getElementById("img-result");
  element.style.borderRadius = "20px";
  // element.style.transform = "scale(1.6)";
  // element.style.transition = "transform 0.5s ease-in-out, color 0.3s ease-in-out;";
  // element.style.boxShadow = "0 0 15px rgba(61, 80, 95, 0.64)";
}


// transform: scale(1.2); /* увеличава заглавието при ховър */
// color: #3d3e47; /* променя цвета на текста на златист */
// transition: transform 0.5s ease-in-out, color 0.3s ease-in-out;
// box-shadow: 0 0 15px rgba(61, 80, 95, 0.64);
