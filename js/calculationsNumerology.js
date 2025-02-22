function resourceUrl() {
    return window.location.hostname === "sunnydineva.github.io"
        ? "https://sunnydineva.github.io/magic-numbers/"
        // : "/";
        : "./";
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
    let description = "";
    switch (nameNumber) {
        case 1:
            description = "\n" +
                "Хората с Число на Името 1 са естествени лидери, пълни с решителност и самоувереност. Те обичат да бъдат първи във всичко и често заемат ръководни позиции. Амбицията и независимостта им ги тласкат към успеха, но могат да бъдат нетърпеливи и понякога твърде доминиращи.\n" +
                "Те са иноватори, обичат да поемат инициативата и не се страхуват от предизвикателства. Въпреки това, е важно да се научат на търпение и да работят с другите, вместо да се опитват да правят всичко сами.\n";
            break;
        case 2:
            description = "\n" +
                "Това са хора с вродена чувствителност, дипломатичност и желание за хармония. Те са отлични слушатели и винаги се стремят да поддържат баланс в отношенията си. Силно интуитивни и съпричастни, те разбират добре емоциите на другите.\n" +
                "Често намират успех в партньорства и екипна работа, но трябва да внимават да не станат твърде зависими от чуждото мнение. Изграждането на самоувереност е ключът към техния успех.\n" +
                "\n";
            break;
        case 3:
            description = "\n" +
                "Тези хора са креативни, харизматични и социални. Обичат да изразяват себе си чрез изкуство, писане, музика или ораторство. Техният ентусиазъм и оптимизъм ги правят любими в компанията.\n" +
                "Те имат нужда от свобода и разнообразие, но трябва да се научат на дисциплина, за да реализират пълния си потенциал. Понякога могат да бъдат разсеяни или прекалено емоционални, но ако насочат енергията си правилно, ще постигнат изключителен успех.\n";
            break;
        case 4:
            description = "Хората с Число на Името 4 са надеждни, организирани и обичат реда. Те са практични и трудолюбиви, винаги подхождат с логика и реалистичност към живота.\n" +
                "Тяхната стабилност и устойчивост ги правят изключително ценни в работната среда, но понякога могат да бъдат твърде консервативни или упорити. Ако се научат да приемат промените с повече гъвкавост, ще постигнат по-големи висоти.\n";
            break;
        case 5:
            description = "Тези хора обожават приключенията, пътуванията и новите преживявания. Те са адаптивни, комуникативни и винаги в движение. Не обичат ограниченията и монотонността, затова често сменят интересите си.\n" +
                "Понякога могат да бъдат непостоянни или импулсивни, но ако намерят начин да канализират енергията си конструктивно, ще постигнат изключителни резултати. Животът им е изпълнен с възможности, стига да се научат да ги използват разумно.\n";
            break;
        case 6:
            description = "Хората с това число са родени да се грижат за другите. Те са отговорни, любящи и често поемат ролята на подкрепа в семейството и обществото.\n" +
                "Те са естествени учители, съветници и лечители. Обичат хармонията и мира, но понякога могат да се натоварят твърде много с чуждите проблеми. Важно е да намерят баланс между даването и грижата за самите себе си.\n" +
                "\n";
            break;
        case 7:
            description = "Тези хора са мислители, които винаги търсят по-дълбокия смисъл в живота. Обичат самотата и анализирането, а философията и науката ги привличат особено.\n" +
                "Те често имат силна интуиция и духовно осъзнаване. Въпреки това, трябва да избягват прекалената изолация и да работят върху комуникацията с другите, за да не изглеждат твърде дистанцирани.\n";
            break;
        case 8:
            description = "Хората с Число на Името 8 са родени за успех. Те са амбициозни, решителни и имат силен усет за бизнес. Винаги се стремят към финансова стабилност и материален просперитет.\n" +
                "Въпреки това, трябва да внимават да не станат твърде обсебени от властта и парите. Истинският успех идва, когато балансират силата си с етика и честност.\n";
            break;
        case 9:
            description = "Тези хора са състрадателни, алтруистични и винаги готови да помогнат. Те мислят за доброто на цялото човечество и често се посвещават на каузи.\n" +
                "Обикновено са много мъдри и имат богат житейски опит. Най-голямото им предизвикателство е да не се раздават прекалено, без да се грижат за себе си. Ако намерят баланс, могат да постигнат изключителни неща.\n";
            break;
        default:
            description = "Неопределено число.";
    }

            // изписва Число на името и Описание, заредено от ресурсни файлове, според стойността на nameNumber
            // ако ресурсен файл за съответното число липсва - изписва съобщение за грешка, вместо 404
            // fetch(`resourceUrl()+../../resources/name/${nameNumber}.txt`)
            //   .then(response => {
            //     if (!response.ok) {
            //       throw new Error(`Файлът не е намерен (${response.status})`);
            //     }
            //     return response.text();
            //   })
            //   .then(description => {
            //     // document.getElementById('result').innerHTML = `
            //     //       <p><strong>Число на името:</strong> ${nameNumber}</p>
            //     //   `;
            //     document.getElementById('description').innerHTML = `
            //           <p class='italic-text'><strong>Описание:</strong> ${description}</p>
            //       `;
            //   })
            //   .catch(error => {
            //     console.error("Грешка при зареждането на файла:", error);
            //     document.getElementById('description').innerHTML = "<p class='italic-text'>Няма налично описание за това число.</p>";
            //   });

            // **Фетч за изображение**
            let imgElement = document.getElementById('result-img');

            // Задава ново изображение спрямо nameNumber
            // imgElement.innerHTML = `<img src=../../resources/result-img/${nameNumber}.jpg" alt="Изображение за число ${nameNumber}" class="img-result" id="img-result">`;
            imgElement.innerHTML = `<img src="${resourceUrl()}resources/result-img/${nameNumber}.jpg" alt="Изображение за число ${nameNumber}" class="img-result" id="img-result">`;
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
          document.getElementById('description').innerHTML = `
              <p><strong>Описание:</strong> ${description}</p>
          `;
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

            let description = "";

            switch (destinyNumber) {
                case 1:
                    description = "Хората с Път на живота 1 са родени лидери. Те са независими, решителни и имат силен стремеж към успех. Често са иноватори, които не се страхуват да поемат рискове. Тяхната кармична задача е да се научат да разчитат на себе си и да не се страхуват от предизвикателства. Трябва да развиват търпение, защото понякога могат да бъдат нетърпеливи и егоцентрични. Те са двигатели на прогреса, но е важно да не се изолират в желанието си за самостоятелност.";
                    break;
                case 2:
                    description = "Това са хора, които ценят хармонията, дипломацията и сътрудничеството. Те са отлични партньори и имат силна интуиция. Често предпочитат да работят в екип и са изключително чувствителни към нуждите на другите. Понякога могат да се страхуват от конфликти и да избягват конфронтации, но тяхната сила е в умението да намират компромиси.";
                    break;
                case 3:
                    description = "Тези хора са творчески настроени, комуникативни и обичат да изразяват себе си. Те са естествени артисти, писатели и оратори. Оптимистични и енергични, но понякога могат да бъдат разпилени и да не завършват започнатото.";
                    break;
                case 4:
                    description = "Хората с Число на съдбата 4 са практични, дисциплинирани и надеждни. Те обичат реда и стабилността. Изключително трудолюбиви, но понякога могат да бъдат прекалено стриктни и да се затварят в своите убеждения.";
                    break;
                case 5:
                    description = "Тези хора са родени изследователи, които не понасят ограничения и рутината. Те са комуникативни, любознателни и обичат да пътуват. Кармичният им урок е да се научат да управляват свободата си мъдро и да не се страхуват от ангажименти. Ако успеят да намерят баланс между желанието за независимост и нуждата от стабилност, могат да постигнат големи успехи."
                    break;
                case 6:
                    description = "Грижовни, отговорни и семейно ориентирани личности. Те се стремят към хармония и справедливост. Често поемат ролята на защитници в обществото, но могат да бъдат прекалено ангажирани с проблемите на другите.";
                    break;
                case 7:
                    description = "Мъдри, аналитични и философски настроени хора. Те обичат самотата и търсят дълбоките истини в живота. Въпреки това, трябва да внимават да не се изолират прекалено.";
                    break;
                case 8:
                    description = "Амбициозни, уверени и целеустремени. Те са естествени лидери и имат силен усет за финансите. Понякога могат да бъдат твърде фокусирани върху материалния успех.";
                    break;
                case 9:
                    description = "Алтруисти, които винаги мислят за доброто на другите. Те са духовно осъзнати и имат дълбоко чувство за хуманност. Понякога могат да бъдат твърде саможертвени.";
                    break;
                default:
                    description = "Няма налично описание за това число.";
                    break;
            }

        document.getElementById('description').innerHTML = `
                <p><strong>Описание:</strong> ${description}</p>
                    `;


        // // изписва Число на името и Описание, заредено от ресурсни файлове, според стойността на nameNumber
        // // ако ресурсен файл за съответното число липсва - изписва съобщение за грешка, вместо 404
        // fetch(`resourceUrl()+../../resources/destiny/${destinyNumber}.txt`)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error(`Файлът не е намерен (${response.status})`);
        //         }
        //         return response.text();
        //     })
        //     .then(description => {
        //         document.getElementById('description').innerHTML = `
        //     <p class='italic-text'><strong>Описание:</strong> ${description}</p>
        // `;
        //     })
        //     .catch(error => {
        //         console.error("Грешка при зареждането на файла:", error);
        //         document.getElementById('description').innerHTML = "<p class='italic-text'>Няма налично описание за това число.</p>";
        //     });

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

    function clearResultDescription() {
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
    }