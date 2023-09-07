var weather = document.getElementById("day1");
var searchButton = document.getElementById("search-button");
var historyContainer = document.getElementById("history-container");

function getApi() {
  var APIkey = "65f56530c5f9bdea6f890b62a4e12ea8";

  var city = document.querySelector(".search-navbar input").value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt&appid=${APIkey}`;

  if (city === "") return;

  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        alert("Please make sure the City name is correct");
      }
    })
    .then(function (data) {
      // localStorage.getItem("searchHistory");

      localStorage.setItem("searchHistory", city);
      // for (var i = 0; i < data.length; i++)
      {
      }
      var historyContainer = document.getElementById("history-container");

      var historyButton = document.createElement("button");
      historyButton.innerHTML = city;
      historyButton.classList.add("history-button");
      historyContainer.append(historyButton);

      // var listItem = document.createElement("li");
      // listItem.textContent = data[i].html_url;
      // repoList.appendChild(listItem);

      console.log(" \\\\\\\\\\ this is whole log \\\\\\\\\\ ");
      console.log(data);

      var today = document.getElementById("todays-weather");
      // console.log(" \\\\\\\\\\ this is City Name log \\\\\\\\\\ ");
      // console.log(data.city.name);
      today.innerHTML = `<h2><small> Currently in </small>${data.city.name}</h2>`;
      // console.log(" \\\\\\\\\\ this is closest time log \\\\\\\\\\ ");
      // console.log(data.list[0].main.temp);
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[0].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;

      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[0].main.temp - 273.15)}°C`;
      today.appendChild(tempF);
      today.appendChild(tempC);

      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[0].main.humidity + "%";
      today.appendChild(humidity);

      var wind = document.createElement("p");
      wind.innerHTML = (data.list[0].wind.speed * 0.621371).toFixed(2) + " mph";
      today.appendChild(wind);

      console.log(" \\\\\\\\\\ this is closest log with TIME \\\\\\\\\\ ");
      var timeInText = data.list[0].dt_txt;
      var dateOnly = timeInText.substr(0, 10);
      var date0 = document.createElement("p");
      date0.innerHTML = `<strong>${dateOnly}</strong>`;
      today.appendChild(date0);

      // 2nd day log ------------------------------------------------
      console.log(" \\\\\\\\\\ this is 2nd day log \\\\\\\\\\ ");
      console.log(data.list[10]);
      // --- date
      var day1 = document.getElementById("day1");
      var timeInText = data.list[10].dt_txt;
      var dateOnly1 = timeInText.substr(0, 10);
      // var date1 = document.createElement("p");
      // day1.classList.add("date");
      day1.classList.add("show");
      day1.innerHTML = `<p class="date"><strong>${dateOnly1}</strong></p>`;
      // day1.appendChild(day1);

      // --- temp  F
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[10].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;
      // --- temp  C
      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[10].main.temp - 273.15)}°C`;
      day1.appendChild(tempF);
      day1.appendChild(tempC);
      // --- humidity
      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[10].main.humidity + "%";
      day1.appendChild(humidity);
      // --- wind speed
      var wind = document.createElement("p");
      wind.innerHTML =
        (data.list[10].wind.speed * 0.621371).toFixed(2) + " mph";
      day1.appendChild(wind);

      // 3rd day log ------------------------------------------------
      console.log(" \\\\\\\\\\ this is 3rd day log \\\\\\\\\\ ");
      console.log(data.list[18]);
      // --- date
      var day2 = document.getElementById("day2");
      var timeInText = data.list[18].dt_txt;
      var dateOnly2 = timeInText.substr(0, 10);
      // var date2 = document.createElement("p");
      // date2.classList.add("date");
      day2.classList.add("show");
      day2.innerHTML = `<p class="date"><strong>${dateOnly2}</strong></p>`;
      // day2.appendChild(date2);

      // --- temp  F
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[18].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;
      // --- temp  C
      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[18].main.temp - 273.15)}°C`;
      day2.appendChild(tempF);
      day2.appendChild(tempC);
      // --- humidity
      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[18].main.humidity + "%";
      day2.appendChild(humidity);
      // --- wind speed
      var wind = document.createElement("p");
      wind.innerHTML =
        (data.list[18].wind.speed * 0.621371).toFixed(2) + " mph";
      day2.appendChild(wind);
      // 4th day log ------------------------------------------------
      console.log(" \\\\\\\\\\ this is 4th day log \\\\\\\\\\ ");
      console.log(data.list[26]);
      // date
      var day3 = document.getElementById("day3");
      var timeInText = data.list[26].dt_txt;
      var dateOnly3 = timeInText.substr(0, 10);
      // var date3 = document.createElement("p");
      // date3.classList.add("date");
      day3.classList.add("show");
      day3.innerHTML = `<p class="date"><strong>${dateOnly3}</strong></p>`;
      // day3.appendChild(date3);

      // --- temp  F
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[26].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;
      // --- temp  C
      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[26].main.temp - 273.15)}°C`;
      day3.appendChild(tempF);
      day3.appendChild(tempC);
      // --- humidity
      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[26].main.humidity + "%";
      day3.appendChild(humidity);
      // --- wind speed
      var wind = document.createElement("p");
      wind.innerHTML =
        (data.list[26].wind.speed * 0.621371).toFixed(2) + " mph";
      day3.appendChild(wind);

      // 5th day log ------------------------------------------------
      console.log(" \\\\\\\\\\ this is 5th day log \\\\\\\\\\ ");
      console.log(data.list[34]);
      // date
      var day4 = document.getElementById("day4");
      var timeInText = data.list[34].dt_txt;
      var dateOnly4 = timeInText.substr(0, 10);
      // var date4 = document.createElement("p");
      // date4.classList.add("date");
      day4.classList.add("show");
      day4.innerHTML = `<p class="date"><strong>${dateOnly4}</strong></p>`;
      // day4.appendChild(date4);

      // --- temp  F
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[34].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;
      // --- temp  C
      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[34].main.temp - 273.15)}°C`;
      day4.appendChild(tempF);
      day4.appendChild(tempC);
      // --- humidity
      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[34].main.humidity + "%";
      day4.appendChild(humidity);
      // --- wind speed
      var wind = document.createElement("p");
      wind.innerHTML =
        (data.list[34].wind.speed * 0.621371).toFixed(2) + " mph";
      day4.appendChild(wind);

      // 6th day log ------------------------------------------------
      console.log(" \\\\\\\\\\ this is 6th day log \\\\\\\\\\ ");
      console.log(data.list[39]);
      var day5 = document.getElementById("day5");
      var timeInText = data.list[39].dt_txt;
      var dateOnly5 = timeInText.substr(0, 10);

      // var date5 = document.createElement("p");
      // date5.classList.add("date");
      day5.classList.add("show");
      day5.innerHTML = `<p class="date"><strong>${dateOnly5}</strong></p>`;
      // day5.appendChild(date5);

      // --- temp  F
      var tempF = document.createElement("p");
      tempF.innerHTML = ` ${parseInt(
        ((data.list[39].main.temp - 273.15) * 9) / 5 + 32
      )}°F`;
      // --- temp  C
      var tempC = document.createElement("p");
      tempC.innerHTML = ` ${parseInt(data.list[39].main.temp - 273.15)}°C`;
      day5.appendChild(tempF);
      day5.appendChild(tempC);
      // --- humidity
      var humidity = document.createElement("p");
      humidity.innerHTML = data.list[39].main.humidity + "%";
      day5.appendChild(humidity);
      // --- wind speed
      var wind = document.createElement("p");
      wind.innerHTML =
        (data.list[39].wind.speed * 0.621371).toFixed(2) + " mph";
      day5.appendChild(wind);
    });

  // Save search item into local storage
  // if (response.ok) {
  //   localStorage.setItem("searchHistory", city);
  // } else return;
  generateWeatherIcon();
}

function readLocalStorage() {
  var savedInfo = localStorage.getItem("searchHistory") || [];
  if (savedInfo !== null) {
    var historyContainer = document.getElementById("history-container");
    var historyButton = document.createElement("button");

    // localStorage.setItem("searchHistory", history);
    // var appendItem = document.createElement("button");
    historyButton.innerHTML = savedInfo;
    historyButton.classList.add("history-button");
    historyContainer.appendChild(historyButton);
  }
}

searchButton.addEventListener("click", getApi);
readLocalStorage();

function generateWeatherIcon() {
  var city = document.querySelector(".search-navbar input").value;
  var weatherIconUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65f56530c5f9bdea6f890b62a4e12ea8`;

  if (city === "") return;

  fetch(weatherIconUrl)
    .then(function (response) {
      if (response.ok) return response.json();
    })
    .then(function (data) {
      // localStorage.setItem("searchHistory", city);
      // console.log(data.weather[0].icon);

      var iconToday = document.querySelector("#icon");
      var iconNumber = data.weather[0].icon;
      iconToday.innerHTML = `<img src="./Assets/${iconNumber}@2x.png" alt="weather icon" />`;
    });
}
