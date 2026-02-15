const companies = {
  rahlaoui: {
    name: "مؤسسة رحلاوي ميلود لنقل المسافرين",
    logo: "assets/logos/napoli.jpg",
    drivers: {
      "ميلود رحلاوي": "0668347349",
      "مسعود خرخوش": "0671562720",
      "وليد نابولي": "0671439266",
      "وليد ضحوه": "0671531521"
    }
  },
  chrif: {
    name: "مؤسسة كلفالي عيسى",
    drivers: {
      "حمى سعدية": "0663363332",
      "مصطفى فراجي": "+213671378259"
    }
  },
  mehdi: {
    name: "مؤسسة مهدي للسفر",
    secondaryPhone: "0663271567",
    drivers: {
      "رمضان حنتات": "+213671999403"
    }
  },
  imsbridan: {
    name: "مؤسسة إميسبريذن لنقل المسافرين",
    drivers: {
      "غاني": "0662181772"
    }
  },
  rawahna: {
    name: "مؤسسة رواحنة عبد العزيز",
    drivers: {
      "عبدالله عمراوي": "0664018061"
    }
  }
};

const goTrips = [
  { time: "05:15", driver: "حمى سعدية", company: "chrif" },
  { time: "05:45", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "06:15", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "06:45", driver: "مسعود خرخوش", company: "rahlaoui" },
  { time: "07:15", driver: "مصطفى فراجي", company: "chrif" },
  { time: "07:45", driver: "غاني", company: "imsbridan" },
  { time: "08:15", driver: "وليد نابولي", company: "rahlaoui" },
  { time: "09:00", driver: "رمضان حنتات", company: "mehdi" },
  { time: "09:30", driver: "حمى سعدية", company: "chrif" },
  { time: "10:00", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "10:30", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "11:00", driver: "مسعود خرخوش", company: "rahlaoui" },
  { time: "11:30", driver: "مصطفى فراجي", company: "chrif" },
  { time: "12:00", driver: "غاني", company: "imsbridan" },
  { time: "12:30", driver: "وليد نابولي", company: "rahlaoui" },
  { time: "13:15", driver: "رمضان حنتات", company: "mehdi" },
  { time: "13:45", driver: "حمى سعدية", company: "chrif" },
  { time: "14:15", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "14:45", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "15:15", driver: "مسعود خرخوش", company: "rahlaoui" },
  { time: "15:45", driver: "مصطفى فراجي", company: "chrif" },
  { time: "16:30", driver: "وليد نابولي", company: "rahlaoui" }
];

const backTrips = [
  { time: "05:00", driver: "مصطفى فراجي", company: "chrif" },
  { time: "05:30", driver: "غاني", company: "imsbridan" },
  { time: "06:00", driver: "وليد نابولي", company: "rahlaoui" },
  { time: "06:45", driver: "رمضان حنتات", company: "mehdi" },
  { time: "07:15", driver: "حمى سعدية", company: "chrif" },
  { time: "07:45", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "08:15", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "08:45", driver: "مسعود خرخوش", company: "rahlaoui" },
  { time: "09:15", driver: "مصطفى فراجي", company: "chrif" },
  { time: "09:45", driver: "غاني", company: "imsbridan" },
  { time: "10:15", driver: "وليد نابولي", company: "rahlaoui" },
  { time: "11:00", driver: "رمضان حنتات", company: "mehdi" },
  { time: "11:30", driver: "حمى سعدية", company: "chrif" },
  { time: "12:00", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "12:30", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "13:00", driver: "مسعود خرخوش", company: "rahlaoui" },
  { time: "13:30", driver: "مصطفى فراجي", company: "chrif" },
  { time: "14:00", driver: "غاني", company: "imsbridan" },
  { time: "14:30", driver: "وليد نابولي", company: "rahlaoui" },
  { time: "15:15", driver: "رمضان حنتات", company: "mehdi" },
  { time: "15:45", driver: "حمى سعدية", company: "chrif" },
  { time: "16:15", driver: "وليد ضحوه", company: "rahlaoui" },
  { time: "16:45", driver: "عبدالله عمراوي", company: "rawahna" },
  { time: "17:15", driver: "مسعود خرخوش", company: "rahlaoui" }
];

const state = {
  currentDirection: "go",
  searchTerm: "",
  selectedCompany: "all",
  notifiedTripKey: ""
};

const el = {
  container: document.getElementById("tripContainer"),
  template: document.getElementById("tripTemplate"),
  goBtn: document.getElementById("goBtn"),
  backBtn: document.getElementById("backBtn"),
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  resetBtn: document.getElementById("resetBtn"),
  darkToggle: document.getElementById("darkToggle"),
  countAll: document.getElementById("countAll"),
  countUpcoming: document.getElementById("countUpcoming"),
  nextIn: document.getElementById("nextIn"),
  liveClock: document.getElementById("liveClock"),
  ownerName: document.getElementById("ownerName"),
  companyFilters: document.getElementById("companyFilters"),
  copyNextBtn: document.getElementById("copyNextBtn"),
  shareWhatsAppBtn: document.getElementById("shareWhatsAppBtn"),
  alertBox: document.getElementById("alertBox")
};

function toMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getNowMinutes() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function getCurrentAndNextTrips(list) {
  const nowMin = getNowMinutes();
  let currentTrip = null;
  let nextTrip = null;

  for (const trip of list) {
    const start = toMinutes(trip.time);
    const end = start + 30;
    if (nowMin >= start && nowMin < end) currentTrip = trip;
    if (!nextTrip && start > nowMin) nextTrip = trip;
  }

  return { currentTrip, nextTrip };
}

function getList() {
  return state.currentDirection === "go" ? goTrips : backTrips;
}

function matchesFilters(trip, term) {
  const companyName = companies[trip.company].name;
  const text = `${trip.driver} ${companyName}`.toLowerCase();
  const textMatch = !term || text.includes(term.toLowerCase());
  const companyMatch = state.selectedCompany === "all" || trip.company === state.selectedCompany;
  return textMatch && companyMatch;
}

function getStatusLabel(trip, currentTrip, nextTrip) {
  if (trip === currentTrip) return "الآن";
  if (trip === nextTrip) return "القادمة";
  return "مجدولة";
}

function getCountdown(nextTrip) {
  if (!nextTrip) return "انتهت رحلات اليوم";
  const diff = toMinutes(nextTrip.time) - getNowMinutes();
  if (diff <= 0) return "أقل من دقيقة";
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  return h > 0 ? `${h}س ${m}د` : `${m}د`;
}

function getTripMessage(trip) {
  if (!trip) return "لا توجد رحلة قادمة حالياً.";
  const dir = state.currentDirection === "go" ? "مزيرعة ← بسكرة" : "بسكرة ← مزيرعة";
  return `الرحلة القادمة: ${trip.time} | ${trip.driver} | ${companies[trip.company].name} | الاتجاه: ${dir}`;
}

function updateShareActions(nextTrip) {
  const message = getTripMessage(nextTrip);
  el.copyNextBtn.disabled = !nextTrip;
  el.shareWhatsAppBtn.classList.toggle("hidden", !nextTrip);
  if (nextTrip) {
    el.shareWhatsAppBtn.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
}

async function copyNextTrip(nextTrip) {
  if (!nextTrip) return;
  const message = getTripMessage(nextTrip);
  try {
    await navigator.clipboard.writeText(message);
    showAlert("✅ تم نسخ تفاصيل الرحلة القادمة.", false);
  } catch {
    showAlert("⚠️ لم يتم النسخ تلقائياً، انسخ يدوياً.", false);
  }
}

function showAlert(msg, warning) {
  el.alertBox.textContent = msg;
  el.alertBox.classList.remove("hidden", "warning");
  if (warning) el.alertBox.classList.add("warning");
}

function maybeNotifyBefore10Min(nextTrip) {
  if (!nextTrip) {
    el.alertBox.classList.add("hidden");
    return;
  }

  const diff = toMinutes(nextTrip.time) - getNowMinutes();
  const tripKey = `${state.currentDirection}-${nextTrip.time}-${nextTrip.driver}`;

  if (diff <= 10 && diff >= 9 && state.notifiedTripKey !== tripKey) {
    state.notifiedTripKey = tripKey;
    showAlert(`⏰ تنبيه: تبقى حوالي 10 دقائق على رحلة ${nextTrip.time} مع ${nextTrip.driver}.`, true);
    beep();
  } else if (diff > 10 || diff < 0) {
    el.alertBox.classList.add("hidden");
  }
}

function beep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = 880;
  gain.gain.value = 0.06;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    ctx.close();
  }, 350);
}

function renderCompanyChips(list) {
  const unique = ["all", ...new Set(list.map((t) => t.company))];
  el.companyFilters.innerHTML = "";

  unique.forEach((companyKey) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "company-chip";
    btn.textContent = companyKey === "all" ? "الكل" : companies[companyKey].name;
    btn.classList.toggle("active", state.selectedCompany === companyKey);
    btn.addEventListener("click", () => {
      state.selectedCompany = companyKey;
      render();
    });
    el.companyFilters.appendChild(btn);
  });
}

function render() {
  const list = getList();
  const { currentTrip, nextTrip } = getCurrentAndNextTrips(list);
  const filtered = list.filter((trip) => matchesFilters(trip, state.searchTerm));

  renderCompanyChips(list);
  el.countAll.textContent = String(filtered.length);
  el.countUpcoming.textContent = String(list.filter((trip) => toMinutes(trip.time) >= getNowMinutes()).length);
  el.nextIn.textContent = getCountdown(nextTrip);
  updateShareActions(nextTrip);
  maybeNotifyBefore10Min(nextTrip);

  el.container.innerHTML = "";
  if (!filtered.length) {
    el.container.innerHTML = '<p class="empty">لا توجد نتائج مطابقة 🔎</p>';
    return;
  }

  filtered.forEach((trip) => {
    const clone = el.template.content.cloneNode(true);
    const card = clone.querySelector(".trip-card");

    if (trip === currentTrip) card.classList.add("current");
    if (trip === nextTrip) card.classList.add("next");

    clone.querySelector(".trip-time").textContent = trip.time;
    clone.querySelector(".status").textContent = getStatusLabel(trip, currentTrip, nextTrip);
    clone.querySelector(".driver").textContent = trip.driver;
    const companyData = companies[trip.company];
    clone.querySelector(".company").textContent = companyData.name;

    const logoEl = clone.querySelector(".company-logo");
    if (companyData.logo) {
      logoEl.src = companyData.logo;
      logoEl.classList.remove("hidden");
      logoEl.onerror = () => logoEl.classList.add("hidden");
    }

    const phone = companies[trip.company].drivers[trip.driver];
    const actions = clone.querySelector(".actions");
    actions.innerHTML = phone ? `<a class="call-btn" href="tel:${phone}">اتصال مباشر</a>` : "";

    if (trip.company === "mehdi" && companies.mehdi.secondaryPhone) {
      actions.innerHTML += ` <a class="call-btn" href="tel:${companies.mehdi.secondaryPhone}">رقم إضافي</a>`;
    }

    el.container.appendChild(clone);
  });
}

function setDirection(dir) {
  state.currentDirection = dir;
  state.selectedCompany = "all";
  el.goBtn.classList.toggle("active", dir === "go");
  el.backBtn.classList.toggle("active", dir === "back");
  render();
}

function applyDarkModePreference() {
  const saved = localStorage.getItem("dark-mode");
  if (saved === "on") {
    document.body.classList.add("dark");
    el.darkToggle.textContent = "☀️";
  }
}

function bindEvents() {
  el.goBtn.addEventListener("click", () => setDirection("go"));
  el.backBtn.addEventListener("click", () => setDirection("back"));

  el.searchBtn.addEventListener("click", () => {
    state.searchTerm = el.searchInput.value.trim();
    render();
  });

  el.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.searchTerm = el.searchInput.value.trim();
      render();
    }
  });

  el.resetBtn.addEventListener("click", () => {
    state.searchTerm = "";
    state.selectedCompany = "all";
    el.searchInput.value = "";
    render();
  });

  el.copyNextBtn.addEventListener("click", () => {
    const { nextTrip } = getCurrentAndNextTrips(getList());
    copyNextTrip(nextTrip);
  });

  el.darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    el.darkToggle.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("dark-mode", dark ? "on" : "off");
  });
}

function updateClock() {
  const now = new Date();
  el.liveClock.textContent = `الوقت الآن: ${now.toLocaleTimeString("ar-DZ", { hour: "2-digit", minute: "2-digit" })}`;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}

function init() {
  applyDarkModePreference();
  el.ownerName.textContent = "Ziad Mounaouli";
  bindEvents();
  updateClock();
  render();
  registerServiceWorker();
  setInterval(() => {
    updateClock();
    render();
  }, 60000);
}

init();
