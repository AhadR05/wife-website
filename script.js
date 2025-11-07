// Preloaded postcards
const preloadedPostcards = [
  { title: "Month 15", msg: "Every day with you is a gift. Love you forever 💖" }
];
localStorage.setItem('postcards', JSON.stringify(preloadedPostcards));

// Postcards
const pcTitle = document.getElementById('pcTitle');
const pcMsg = document.getElementById('pcMsg');
const saveBtn = document.getElementById('savePostcard');
const postcardsDiv = document.getElementById('postcards');

function loadPostcards() {
  return JSON.parse(localStorage.getItem('postcards') || '[]');
}

function savePostcardsToStorage(arr) {
  localStorage.setItem('postcards', JSON.stringify(arr));
}

function renderPostcards() {
  const arr = loadPostcards();
  postcardsDiv.innerHTML = '';
  arr.forEach((p, i) => {
    const div = document.createElement('div');
    div.textContent = `${p.title}: ${p.msg}`;
    postcardsDiv.appendChild(div);
  });
}

saveBtn.addEventListener('click', () => {
  const arr = loadPostcards();
  arr.push({ title: pcTitle.value, msg: pcMsg.value });
  savePostcardsToStorage(arr);
  renderPostcards();
  pcTitle.value = '';
  pcMsg.value = '';
});

renderPostcards();

// Acrostic generator with preloaded love names
const acroName = document.getElementById('acroName');
const generateBtn = document.getElementById('generateAcrostic');
const acroResult = document.getElementById('acrosticResult');

const acrosticLines = {
  WIFEY: [
    "W — With you, my heart is home.",
    "I — I smile every moment we share.",
    "F — Forever feels right with you.",
    "E — Every day is brighter because of you.",
    "Y — You are my everything."
  ],
  Pookie: [
    "P — Precious moments with you linger.",
    "O — Only you make life sweeter.",
    "O — Our love grows stronger each day.",
    "K — Kindness flows from your heart.",
    "I — I cherish you endlessly.",
    "E — Every thought is of you."
  ],
  "MY LOVE": [
    "M — My world is you.",
    "Y — You complete me.",
    "L — Life is better together.",
    "O — Our love shines bright.",
    "V — Very grateful for every moment.",
    "E — Endless love for you."
  ],
  Hayati: [
    "H — Happiness follows us everywhere.",
    "A — Always thinking of you.",
    "Y — You are my heart.",
    "A — All my love is yours.",
    "T — Together forever.",
    "I — I adore you."
  ]
};

function generateAcrosticLines(name) {
  name = name.toUpperCase().replace(/\s+/g, '');
  if (acrosticLines[name]) return acrosticLines[name];
  // Fallback generic lines
  return name.split('').map((letter,i)=>`${letter} — You are loved and cherished.`);
}

generateBtn.addEventListener('click', () => {
  const name = acroName.value.trim();
  if (!name) return alert('Type a name or nickname');
  const lines = generateAcrosticLines(name);
  acroResult.textContent = lines.join('\n');
});
