document.getElementById("salaryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Eingabewerte abrufen
  const hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
  const workHours = parseFloat(document.getElementById("workHours").value);

  // Initiale Berechnung
  let earnings = 0;
  const secondsPerWeek = workHours * 3600; // Arbeitssekunden pro Woche
  const earningsPerSecond = hourlyWage / 3600;

  // Ausgabe aktualisieren
  const earningsSpan = document.getElementById("earnings");
  setInterval(() => {
    earnings += earningsPerSecond;
    earningsSpan.textContent = earnings.toFixed(2);
  }, 1000);
});
