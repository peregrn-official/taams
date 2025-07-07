// 🕰️ Heure locale en temps réel
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString("fr-FR", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById("clock").textContent = `Il est ${time} ⏳`;
}, 1000);

// 🌤️ Météo simulée
const fakeWeather = [
  "☁️ Ciel voilé – 22°C à Paris",
  "🌤️ Éclaircies avec vent léger – 24°C",
  "🌧️ Pluie fine – 19°C, prends un parapluie !",
  "☀️ Ensoleillé et doux – 23°C",
  "⛅ Temps variable avec nuages dispersés – 21°C"
];
document.getElementById("weather").textContent =
  fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

// 📰 Actu simulée dynamique
const fakeHeadlines = [
  "📣 La crypto Pi franchit les 50 millions d’utilisateurs !",
  "🚀 Un nouveau record pour le réseau décentralisé Taams !",
  "🌍 Journée mondiale de l’innovation communautaire célébrée dans 58 pays.",
  "🤖 L’IA de compagnie fait son entrée dans les écoles françaises.",
  "🪐 Découverte : la planète PiX-42 aurait des conditions habitables."
];
document.getElementById("headline").textContent =
  fakeHeadlines[Math.floor(Math.random() * fakeHeadlines.length)];
