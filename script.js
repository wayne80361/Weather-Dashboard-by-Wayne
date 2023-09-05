var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=65f56530c5f9bdea6f890b62a4e12ea8";

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
      console.log(" \\\\\\\\\\ this is City Name log \\\\\\\\\\ ");
      console.log(data.city.name);
      console.log(" \\\\\\\\\\ this is closest log \\\\\\\\\\ ");
      console.log(data.list[0]);
      console.log(" \\\\\\\\\\ this is closest log with TIME \\\\\\\\\\ ");
      console.log(data.list[0].dt);
      console.log(data.list[0].dt_txt);
      console.log(dayjs.unix(1693893600)).format("MMM D, YYYY, hh:mm:ss a");
      console.log(" \\\\\\\\\\ this is 2 log \\\\\\\\\\ ");
      console.log(data.list[0]);
      console.log(" \\\\\\\\\\ this is 3 log \\\\\\\\\\ ");
      console.log(data.list[1]);
      console.log(" \\\\\\\\\\ this is furthest log \\\\\\\\\\ ");
      console.log(data.list[39]);
    });
}

fetchButton.addEventListener("click", getApi);
