document.getElementById("salaryForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Eingabewerte abrufen
  const monthlySalary = parseFloat(document.getElementById("monthlySalary").value);
  const startBalance = parseFloat(document.getElementById("startBalance").value);

  // Berechnungen
  const secondsPerMonth = 30 * 24 * 60 * 60; // durchschnittliche Sekunden pro Monat
  const earningsPerSecond = monthlySalary / secondsPerMonth;

  // Startguthaben setzen
  let earnings = startBalance;

  // Ausgabe anzeigen und Formular ausblenden
  document.getElementById("output").style.display = "block";
  document.getElementById("salaryForm").style.display = "none";

  // Anzeige aktualisieren
  const earningsSpan = document.getElementById("earnings");
  setInterval(() => {
    earnings += earningsPerSecond;
    earningsSpan.textContent = earnings.toFixed(2); // Auf zwei Dezimalstellen begrenzen
  }, 1000);
});
