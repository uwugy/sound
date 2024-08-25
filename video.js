const routesman = [
  // Существующий массив для podcast
  {
    id: "video1",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video2",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video3",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video4",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video5",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video6",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video7",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "video8",
    video: "https://www.youtube.com/embed/MCG7S2fGUeU",
    name: "Готовы наслаждаться",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "card1",
    name: "Базовый",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества...",
  },
  {
    id: "card2",
    name: "Базовый",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества...",
  },
  {
    id: "card3",
    name: "Базовый",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества...",
  },
  {
    id: "card4",
    name: "Базовый",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества...",
  },
];

function displayManResultsById(manId) {
  const resultsContainer = document.getElementById("searchResultsMan");

  // Очистить предыдущие результаты, если есть
  resultsContainer.innerHTML = "";

  const man = routesman.find((man) => man.id === manId);

  if (man) {
    const manDetails = document.createElement("div");
    manDetails.classList.add("overlay");

    // Определить разметку в зависимости от типа данных
    if (man.video) {
      manDetails.innerHTML = `
          <div class="video-top">
  <div class="video-wrapper">
   <div class="close-man">&times;</div>
    <div class="video-container">
      <iframe
          width="auto"
          height="auto"
          src="${man.video}"
          frameborder="0"
          allowfullscreen
        ></iframe>
    </div>
    </div>
    <div class="video-text">
    <h1 class="">${man.name} </h1>
<p class="">${man.Det}</p>
</div>

</div>
        `;
    } else {
      manDetails.innerHTML = `
          <div class="card-top">
            <div class="cart-tt">
            <div class="close-man">&times;</div>
              <h2>${man.name}</h2>
              <p class="price-top">${man.price}</p>
              <ul class="features-top">
                <li>${man.li1}</li>
                <li>${man.li2}</li>
                <li>${man.li3}</li>
                <li>${man.li4}</li>
              </ul>
            </div>
            <div class="cart-tt2">
              <h2>${man.nameDet}</h2>
              <ul class="features-top2">
                <p>${man.Det}</p>
              </ul>
            </div>
          </div>
        `;
    }

    resultsContainer.appendChild(manDetails);

    // Добавить событие для кнопки закрытия
    manDetails
      .querySelector(".close-man")
      .addEventListener("click", function () {
        resultsContainer.removeChild(manDetails);
      });
  } else {
    const notFoundMessage = document.createElement("p");
    notFoundMessage.textContent = "Маршрут не найден.";
    resultsContainer.appendChild(notFoundMessage);
  }
}

// Назначение обработчиков событий
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("video1Button")
    .addEventListener("click", function () {
      displayManResultsById("video1");
    });

  document
    .getElementById("video2Button")
    .addEventListener("click", function () {
      displayManResultsById("video2");
    });

  document
    .getElementById("video3Button")
    .addEventListener("click", function () {
      displayManResultsById("video3");
    });

  document
    .getElementById("video4Button")
    .addEventListener("click", function () {
      displayManResultsById("video4");
    });
  document
    .getElementById("video5Button")
    .addEventListener("click", function () {
      displayManResultsById("video5");
    });

  document
    .getElementById("video6Button")
    .addEventListener("click", function () {
      displayManResultsById("video6");
    });

  document
    .getElementById("video7Button")
    .addEventListener("click", function () {
      displayManResultsById("video7");
    });

  document
    .getElementById("video8Button")
    .addEventListener("click", function () {
      displayManResultsById("video8");
    });

  document.getElementById("card1Button").addEventListener("click", function () {
    displayManResultsById("card1");
  });

  document.getElementById("card2Button").addEventListener("click", function () {
    displayManResultsById("card2");
  });

  document.getElementById("card3Button").addEventListener("click", function () {
    displayManResultsById("card3");
  });

  document.getElementById("card4Button").addEventListener("click", function () {
    displayManResultsById("card4");
  });
});
