var weather = document.getElementById("day1");
var searchButton = document.getElementById("search-button");

function getApi() {
  var APIkey = "65f56530c5f9bdea6f890b62a4e12ea8";

  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&cnt&appid=${APIkey}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        // var listItem = document.createElement("li");
        // listItem.textContent = data[i].html_url;
        // repoList.appendChild(listItem);
      }
      console.log(" \\\\\\\\\\ this is whole log \\\\\\\\\\ ");
      console.log(data);

      var today = document.getElementById("todays-weather");
      // console.log(" \\\\\\\\\\ this is City Name log \\\\\\\\\\ ");
      // console.log(data.city.name);
      today.innerHTML = `<h2><small>In </small>${data.city.name}</h2>`;
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
      console.log(dateOnly);
      var date0 = document.createElement("p");
      date0.innerHTML = dateOnly;
      today.appendChild(date0);

      console.log(" \\\\\\\\\\ this is 2nd day log \\\\\\\\\\ ");
      console.log(data.list[10]);
      // date
      var day1 = document.getElementById("day1");
      var timeInText = data.list[10].dt_txt;
      var dateOnly1 = timeInText.substr(0, 10);
      console.log(dateOnly1);
      var date1 = document.createElement("p");
      date1.classList.add("date");
      date1.innerHTML = `<strong>${dateOnly1}</strong>`;
      day1.appendChild(date1);

      console.log(" \\\\\\\\\\ this is 3rd day log \\\\\\\\\\ ");
      console.log(data.list[18]);
      // date
      var day2 = document.getElementById("day2");
      var timeInText = data.list[18].dt_txt;
      var dateOnly2 = timeInText.substr(0, 10);

      var date2 = document.createElement("p");
      date2.classList.add("date");
      date2.innerHTML = `<strong>${dateOnly2}</strong>`;
      day2.appendChild(date2);

      console.log(" \\\\\\\\\\ this is 4th day log \\\\\\\\\\ ");
      console.log(data.list[26]);
      // date
      var day3 = document.getElementById("day3");
      var timeInText = data.list[26].dt_txt;
      var dateOnly3 = timeInText.substr(0, 10);

      var date3 = document.createElement("p");
      date3.classList.add("date");
      date3.innerHTML = `<strong>${dateOnly3}</strong>`;
      day3.appendChild(date3);

      console.log(" \\\\\\\\\\ this is 5th day log \\\\\\\\\\ ");
      console.log(data.list[34]);
      // date
      var day4 = document.getElementById("day4");
      var timeInText = data.list[34].dt_txt;
      var dateOnly4 = timeInText.substr(0, 10);

      var date4 = document.createElement("p");
      date4.classList.add("date");
      date4.innerHTML = `<strong>${dateOnly4}</strong>`;
      day4.appendChild(date4);

      console.log(" \\\\\\\\\\ this is 6th day log \\\\\\\\\\ ");
      console.log(data.list[39]);
      var day5 = document.getElementById("day5");
      var timeInText = data.list[39].dt_txt;
      var dateOnly5 = timeInText.substr(0, 10);

      var date5 = document.createElement("p");
      date5.classList.add("date");
      date5.innerHTML = `<strong>${dateOnly5}</strong>`;
      day5.appendChild(date5);
    });
}

searchButton.addEventListener("click", getApi);
