const routesman = [
  {
    id: "card1",
    name: "Готовы наслаждаться",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "card2",
    name: "Готовы наслаждаться",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
  {
    id: "card3",
    name: "Готовы наслаждаться",
    price: "70$",
    li1: "До 2 часов записи",
    li2: "Основное редактирование",
    li3: "Использование стандартного оборудования",
    li4: "Скидка 10% на следующее посещение",
    nameDet: "Базовый",
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
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
    Det: "Наша студия предоставляет уникальную возможность записывать и слушать музыку высочайшего качества. Присоединяйтесь к нам и станьте частью музыкального сообщества.",
  },
];

function displayManResultsById(manId) {
  const resultsContainer = document.getElementById("searchResultsMan");

  const man = routesman.find((man) => man.id === manId);

  if (man) {
    const manDetails = document.createElement("div");
    manDetails.classList.add("overlay");
    manDetails.innerHTML = `
                    <div class="card-top" >
     <div class="cart-tt"> <h2>${man.name}</h2>
      <p class="price-top">${man.price}</p>
      <ul class="features-top">
          <li>${man.li1}</li>
          <li>${man.li2}</li>
          <li>${man.li3}</li>
          <li>${man.li4}</li>
      </ul></div>
      <div class="cart-tt2"> <h2>${man.nameDet}</h2>
        
        <ul class="features-top2">
            <p>
             ${man.Det} </p>
        </ul></div>
     
  </div>
                `;

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
