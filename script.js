{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Postcards\
const pcTitle = document.getElementById('pcTitle');\
const pcMsg = document.getElementById('pcMsg');\
const saveBtn = document.getElementById('savePostcard');\
const postcardsDiv = document.getElementById('postcards');\
\
function loadPostcards() \{\
  return JSON.parse(localStorage.getItem('postcards') || '[]');\
\}\
\
function savePostcardsToStorage(arr) \{\
  localStorage.setItem('postcards', JSON.stringify(arr));\
\}\
\
function renderPostcards() \{\
  const arr = loadPostcards();\
  postcardsDiv.innerHTML = '';\
  arr.forEach((p, i) => \{\
    const div = document.createElement('div');\
    div.textContent = `$\{p.title\}: $\{p.msg\}`;\
    postcardsDiv.appendChild(div);\
  \});\
\}\
\
saveBtn.addEventListener('click', () => \{\
  const arr = loadPostcards();\
  arr.push(\{ title: pcTitle.value, msg: pcMsg.value \});\
  savePostcardsToStorage(arr);\
  renderPostcards();\
  pcTitle.value = '';\
  pcMsg.value = '';\
\});\
\
renderPostcards();\
\
// Acrostic generator\
const acroName = document.getElementById('acroName');\
const generateBtn = document.getElementById('generateAcrostic');\
const acroResult = document.getElementById('acrosticResult');\
\
function generateLine(letter, idx) \{\
  const templates = [\
    `$\{letter\} \'97 Always the calm I didn't know I needed.`,\
    `$\{letter\} \'97 I find a reason to smile every time I think of you.`,\
    `$\{letter\} \'97 You make ordinary things feel like home.`,\
    `$\{letter\} \'97 I keep you with me in the quiet and loud.`,\
    `$\{letter\} \'97 My favorite part of every plan is you in it.`,\
  ];\
  return templates[(idx + letter.charCodeAt(0)) % templates.length];\
\}\
\
generateBtn.addEventListener('click', () => \{\
  const name = acroName.value.trim().toUpperCase();\
  if (!name) return alert('Type a name or nickname');\
  const lines = [];\
  for (let i = 0; i < name.length; i++) \{\
    lines.push(generateLine(name[i], i));\
  \}\
  acroResult.textContent = lines.join('\\n');\
\});\
}