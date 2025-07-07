// Langues
const translations = {
  fr: {
    timeWeather: "🕐 Heure & 🌤️ Météo",
    news: "🗞️ Actualité",
    talk: "💬 Parle à Taams"
  },
  en: {
    timeWeather: "🕐 Time & 🌤️ Weather",
    news: "🗞️ News",
    talk: "💬 Talk to Taams"
  }
};

document.getElementById("langSwitch").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
});

// Heure
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}, 1000);

// Météo
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&lang=fr&appid=${config.weatherApiKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("weather").textContent =
      `${data.weather[0].description} – ${data.main.temp}°C à Paris`;
  });

// Actu
fetch(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=${config.newsApiKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("headline").textContent = data.articles[0].title;
  });

// Assistant IA simple
function talkToTaams() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "🤖 Je réfléchis...";
  if (input.includes("météo")) reply = "🌦️ Il fait doux aujourd’hui à Paris.";
  else if (input.includes("heure")) reply = "🕐 Il est " + new Date().toLocaleTimeString();
  else if (input.includes("salut")) reply = "👋 Salut ! Je suis Taams, ton assistant du futur.";
  document.getElementById("taamsReply").textContent = reply;
  speak(reply);
}

// Voix
function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  synth.speak(utter);
}

// Micro
function startListening() {
  const rec = new webkitSpeechRecognition() || new SpeechRecognition();
  rec.lang = "fr-FR";
  rec.start();
  rec.onresult = (e) => {
    document.getElementById("userInput").value = e.results[0][0].transcript;
    talkToTaams();
  };
}
