Dashboard.updateWeather = function() {
  var lat = DASHBOARD_CONFIG.latitude;
  var lon = DASHBOARD_CONFIG.longitude;
  var tz  = DASHBOARD_CONFIG.timezone;

  var apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat +
               '&longitude=' + lon + '&current_weather=true&timezone=' + tz;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        var data = JSON.parse(xhr.responseText);
        var weather = data.current_weather;

        console.log (data)

        var temp = document.getElementById('current-temperature');
        if (temp) temp.textContent = weather.temperature + '°C';

        var wind = document.getElementById('current-wind-speed');
        if (wind) wind.textContent = weather.windspeed + ' km/h';

        var icon = document.getElementById('weather-icon');
        if (icon) icon.src = '/icons/weather/' + weather.weathercode + '.svg';
      } catch (e) {
        console.error('Weather parse error:', e);
      }
    }
  };
  xhr.send();
};
