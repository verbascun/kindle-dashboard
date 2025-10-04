// moon.js
var Dashboard = Dashboard || {};

Dashboard.getMoonPhase = function(d) {
  var ref = Date.UTC(2000, 0, 6, 18, 14);
  var now = d.getTime();
  var synodic = 29.530588853;
  var days = (now - ref) / 1000 / 86400;
  var age = days % synodic;
  var phase = age / synodic;

  var phases = [
    { nameEn: 'New Moon', namePl: 'Nów', svg: 'new_moon.svg', start: 0.0, end: 0.03 },
    { nameEn: 'Waxing Crescent', namePl: 'Przybywający sierp', svg: 'waxing_crescent.svg', start: 0.03, end: 0.25 },
    { nameEn: 'First Quarter', namePl: 'Pierwsza kwadra', svg: 'first_quarter.svg', start: 0.25, end: 0.27 },
    { nameEn: 'Waxing Gibbous', namePl: 'Przybywający garb', svg: 'waxing_gibbous.svg', start: 0.27, end: 0.48 },
    { nameEn: 'Full Moon', namePl: 'Pełnia', svg: 'full_moon.svg', start: 0.48, end: 0.52 },
    { nameEn: 'Waning Gibbous', namePl: 'Ubywający garb', svg: 'waning_gibbous.svg', start: 0.52, end: 0.75 },
    { nameEn: 'Last Quarter', namePl: 'Ostatnia kwadra', svg: 'last_quarter.svg', start: 0.75, end: 0.77 },
    { nameEn: 'Waning Crescent', namePl: 'Ubywający sierp', svg: 'waning_crescent.svg', start: 0.77, end: 1.0 }
  ];

  for (var i = 0; i < phases.length; i++) {
    var p = phases[i];
    if (phase >= p.start && phase < p.end || (p.start === 0 && phase > 0.97)) {
      var startDay = p.start * synodic;
      var endDay = p.end * synodic;

      return {
        svg: p.svg,
        labelEn: p.nameEn,
        labelPl: p.namePl,
        since: (age - startDay).toFixed(1),
        until: (endDay - age).toFixed(1)
      };
    }
  }
};

// update moon phase daily (or hourly if needed)
Dashboard.updateMoon = function() {
  var phaseData = Dashboard.getMoonPhase(new Date());
  var container = document.getElementById('moon-phase');
  container.innerHTML = '';
    

  // Timing info since
  var since = document.createElement('h2');
  since.className = 'moonTime';
  since.textContent = '-' + phaseData.since + 'd';
  container.appendChild(since);


  // Image
  var img = document.createElement('img');
  img.className = 'moon';
  img.src = 'icons/moon/' + phaseData.svg;
  img.alt = phaseData.labelEn;
  container.appendChild(img);




  // Timing info until
  var until = document.createElement('h2');
  until.className = 'moonTime';
  until.textContent = '+' + phaseData.until + 'd';
  container.appendChild(until);

  // Labels EN/PL
  var labelEn = document.createElement('h2');
  labelEn.className = 'moonLabel';
  labelEn.textContent = phaseData.labelEn;
  container.appendChild(labelEn);

  var labelPl = document.createElement('h2');
  labelPl.className = 'moonLabel';
  labelPl.textContent = phaseData.labelPl;
  container.appendChild(labelPl);
  }


