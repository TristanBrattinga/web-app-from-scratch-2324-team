# Mijn ReadME om progress bij te houden

Week 1:

Op maandag ben ik met mijn groepje begonnen met de ideegeneratie voor onze team app. Wij willen een 
web app gaan bouwen waar je ieders favoriete helden en schurken uit films, series, cartoons en anime's 
kan zien. In de app moet de functionaliteit zitten om of te kunnen filteren, sorteren of zoeken. Het 
duurde best even voordat we het concept van de opdracht begrepen, maar dat is uiteindelijk helemaal 
duidelijk geworden. Ieder bouwt zijn eigen one page web app, waar we data moeten ophalen. Uiteindelijk is 
het dan de bedoeling dat deze data wordt weergegeven in onze app. De teamapp zal een overkoepelende app 
zijn waar al onze data in zal worden opgehaald. Op de eerste dag heb ik getest met het fetchen van data uit 
een JSON-bestand. Dit ging heel gemakkelijk. Verder heb ik op maandag een basis webapp template opgezet, 
bestaande uit de volgende mappenstructuur:
```
wafs/
├── docs/
│   ├── styles/
│   │   ├── style.css
│   └── index.html
└── README.md
```
Op dinsdag ben ik wat verder gaan werken aan mijn front-end. Ik heb wat Javascript geïntroduceerd om een 
mobiel hamburger menu te kunnen gebruiken. Dit is mijn eerste stap richting responsiveness. Verder hebben 
we later op de dag de keuze gekregen om een workshop bij te wonen. Oud-student/docent Bas de Greeuw gaf een
workshop over het inzetten van Oauth voor het gebruik van een Spotify API. We hebben hier zoals geleerd,
in blok tech een basic Node.js server opgezet, met het gebruik van een Express back-end. Dit ging voor mij
allemaal redelijk simpel. Hieronder zijn wat screenshots te zien van de code:

### server.js
<img src="readme-images/carbon.png" alt="">

Hieronder de mappenstructuur van mijn webapp op dit moment:
```
wafs/
├── data/
│   └── data.json
├── images/
├── public/
├── scripts/
│   └── server.js
├── styles/
│   └── style.css
├── views/
│   ├── pages/
│   │   └── index.ejs
│   └── partials/
│       ├── footer.ejs
│       ├── head.ejs
│       └── header.ejs
├── .env
├── .gitignore
├── .yarnnrc.yml
├── server.js
├── package.json
├── README.md
├── index.html
└── yarn.lock
```
Op woensdag ben ik begonnen met het deployen op Vercel. Ik wil mijn back-end en front-end in hetzelfde 
project gaan deployen...... hie rnog meer neerzetten

# Bronnenlijst
- https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/