// time.js
//var Dashboard = Dashboard || {};

Dashboard.tzOffset = 0; // updated by DST check

// DST check
Dashboard.checkDST = function() {
  var now = new Date();
  var year = now.getUTCFullYear();

  var march = new Date(Date.UTC(year, 2, 31));
  var lastSundayMarch = 31 - march.getUTCDay();

  var oct = new Date(Date.UTC(year, 9, 31));
  var lastSundayOct = 31 - oct.getUTCDay();

  var dstStart = new Date(Date.UTC(year, 2, lastSundayMarch, 1, 0, 0));
  var dstEnd = new Date(Date.UTC(year, 9, lastSundayOct, 1, 0, 0));

  Dashboard.tzOffset = (now >= dstStart && now < dstEnd) ?
    DASHBOARD_CONFIG.dstOffset : DASHBOARD_CONFIG.standardOffset;
};

// Clock update
Dashboard.updateClock = function() {
  var now = new Date();
  var hours = now.getUTCHours() + Dashboard.tzOffset;
  if (hours >= 24) hours -= 24;

  var minutes = now.getUTCMinutes();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;

  document.getElementById('clock').innerHTML = hours + ':' + minutes;
};