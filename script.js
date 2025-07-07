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

// 🌤️ Météo factice mais crédible
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

// Permet d’envoyer le message avec la touche Entrée
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // évite le retour à la ligne
    talkToTaams();
  }
});

// 🧠 Assistant IA local – mots-clés et réponses
function talkToTaams() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "🤔 Je n’ai pas compris, mais je suis toujours là avec toi.";

  if (input.includes("salut") || input.includes("bonjour")) {
    reply = "👋 Salut explorateur temporel ! Prêt pour une nouvelle aventure ?";
  } else if (input.includes("météo")) {
    reply = "🌦️ Aujourd’hui, il fait doux avec des probabilités de code !";
  } else if (input.includes("heure")) {
    reply = "⏰ Je te l’affiche juste au-dessus, voyageur du présent.";
  } else if (input.includes("actu") || input.includes("actualité")) {
    reply = "🗞️ Les titres les plus chauds sont juste là 👆. Spoiler : ça bouge.";
  } else if (input.includes("mot")) {
    reply = "💡 Mot du jour : *Émergence* — ce qui naît quand on combine les bonnes choses.";
  } else if (input.includes("conseil")) {
    reply = "🔮 Conseil Taams du jour : Reste curieux, même quand les réponses sont floues.";
  }

  document.getElementById("taamsReply").textContent = reply;
  speak(reply);
}

// 🎙️ Synthèse vocale (voix Taams)
function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  synth.speak(utter);
}

// 🎤 Reconnaissance vocale (Chrome uniquement)
function startListening() {
  const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  rec.lang = "fr-FR";
  rec.start();
  rec.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById("userInput").value = transcript;
    talkToTaams();
  };
}
