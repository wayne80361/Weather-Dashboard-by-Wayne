var weather = document.getElementById("day1");
var searchButton = document.getElementById("search-button");

function getApi() {
  var APIkey = "65f56530c5f9bdea6f890b62a4e12ea8";

  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIkey}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
      console.log(" \\\\\\\\\\ this is whole log \\\\\\\\\\ ");
      console.log(data);

      var today = document.getElementById("todays-weather");
      console.log(" \\\\\\\\\\ this is City Name log \\\\\\\\\\ ");
      console.log(data.city.name);
      today.innerHTML = `<h2><small>In </small>${data.city.name}</h2>`;
      console.log(" \\\\\\\\\\ this is closest log \\\\\\\\\\ ");
      console.log(data.list[0]);
      console.log(" \\\\\\\\\\ this is closest log with TIME \\\\\\\\\\ ");
      console.log(data.list[0].dt);
      console.log(data.list[0].dt_txt);
      //   console.log(dayjs.unix(1693893600)).format("MMM D, YYYY, hh:mm a");
      console.log(" \\\\\\\\\\ this is 2 log \\\\\\\\\\ ");
      console.log(data.list[0]);
      console.log(" \\\\\\\\\\ this is 3 log \\\\\\\\\\ ");
      console.log(data.list[1]);
      console.log(" \\\\\\\\\\ this is furthest log \\\\\\\\\\ ");
      console.log(data.list[39]);
    });
}

searchButton.addEventListener("click", getApi);

var APIkey = "1234567890";
console.log("this is ", `${APIkey}`, " the key");
