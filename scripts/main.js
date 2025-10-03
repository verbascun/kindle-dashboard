(function() {
    
  // Initial run
  if (Dashboard.checkDST) Dashboard.checkDST();
  if (Dashboard.updateClock) Dashboard.updateClock();
  if (Dashboard.updateWeather) Dashboard.updateWeather();
  if (Dashboard.updateMoon) Dashboard.updateMoon();

  // Intervals
  if (Dashboard.updateClock) setInterval(Dashboard.updateClock, 30*1000);        // clock every 30 sec
  if (Dashboard.checkDST) setInterval(Dashboard.checkDST, 60*60*1000);           // DST every hour
  if (Dashboard.updateWeather) setInterval(Dashboard.updateWeather, 30*60*1000); // weather every 30 min
  if (Dashboard.updateMoon) setInterval(Dashboard.updateMoon, 60*60*1000);       // moon hourly
})();
