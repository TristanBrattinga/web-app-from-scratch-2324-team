# Team opdracht informatie
## Leden
- Tristan Brattinga
- Bart Spons
- Martijn Kooijman
- Ferhat Kool
- Klaudia Dobrzelewska

## Thema
Ons team heeft het thema films gekozen voor de teamapp. Elk teamlid heeft vijf films moeten kiezen die zij beschouwen als hun favorieten. Bovendien hebben we lijsten samengesteld van onze favoriete helden en schurken, waarmee we dieper ingaan op het filmthema. De nummer één held van elk teamlid wordt gebruikt als hun avatar. Al deze informatie, inclusief de linkjes naar onze persoonlijke apps, is zichtbaar en gesorteerd per teamlid binnen onze app.

## Idee
Zoals hierboven genoemd is ons algemene thema films. Om deze informatie overzichtelijk te presenteren aan de gebruikers, hebben wij besloten om verschillende functionaliteiten erin te verwerken. Denk hierbij aan filtreren, sorteren en zoeken. Op deze manier kunnen gebruikers snel de gewenste informatie vinden. De zichtbare informatie komt uit de JSON-data van de teamleden. Deze wordt vervolgens opgehaald en getoond binnen de app. Op deze manier kunnen gebruikers onze teamleden beter leren kennen aan de hand van onze gedeelde interesse.

## Taakverdeling
- Tristan
    - code
- Bart 
    - hulp bij code 
    - process
    - schetsen
    - digitale schets
- Klaudia
    - readme
- Ferhat
    - Domein & hosting
- Martijn
    - responsiveness

# Process
## Schetsen
Hieronder zijn onze schetsen te zien. Het idee is dat er op de pagina 5 buttons staan met allemaal een eigen avatar. Deze buttons draaien allemaal in een rondje. Het idee is dat deze om een planeet heendraaien.

De avatar van de button wordt uit het JSON bestand ingeladen. Iedereen heeft een eigen avatar. Als de gebruiker op een van deze buttons klikt wordt er een pop-up scherm geopend met allemaal info over een van onze teamleden.

<img src="./public/images/schets.png" alt="schets" width="500"><br>

## Digitale schetsen

<img src="./public/images/figma1.png" alt="schets" width="500"><br>

<img src="./public/images/figma2.png" alt="schets" width="500"><br>

## Mappenstructuur
```
web-app-from-scratch-team
|--- images
|--- node_modules
|--- public
    |--- css
        |--- style.css
    |--- images
    |--- scripts
        |-- script.js
|--- views
    |--- pages
        |--- index.ejs
    |--- partials
        |--- avatar.ejs
        |--- footer.ejs
        |--- head.ejs
        |--- header.ejs
        |--- searchbar.ejs
package-lock.json
package.json
README.md
server.js
team.json
yarn.lock

```
## Code
### index.ejs is de hoofdpagina
De pagina index.ejs wordt gebruikt als hoofdpagina. In plaats van een index.html pagina wordt gebruik gemaakt van ejs. Omdat alle data te veel is om in één bestand te zetten wordt er gebruik gemaakt van partials. Dit zijn aparte componenten die worden ingeladen om één pagina. Voor een aantal onderdelen zijn standaard partials aangemaakt:
- head
- header
- footer

In de main staan er meer dan één. Hiervoor is meer te lezen in het volgende kopje.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Team WAFS</title>
    <%- include('../partials/head'); %>
</head>
<body>
<div class="space"></div>
<header>
    <%- include('../partials/header'); %>
</header>

<main>
    <%- include('../partials/searchbar'); %>
        <%- include('../partials/cards'); %>
    <%- include('../partials/avatars'); %>
    <button id="goCrazy">GO CRAZY</button>
</main>

<footer>
    <%- include('../partials/footer'); %>
</footer>
<script src='/scripts/script.js'></script>
</body>
</html>
```
<hr>

### Partials inladen
#### Avatars.ejs
In avatars.ejs wordt alle data van onze teamleden ingeladen en weergegeven. Natuurlijk hoeven we niet alle data te laten zien maar bepaalde keys.

Wat we gebruiken op onze team website:
- naam
- leeftijd
- werk
- stad
- studie
- favoriete films
- foto avatar
- top 5 helden
- top 5 schruken

```html
<section class="planet container">
    <ul class="circle-wrapper">
        <% members.map((member, index) => { %>
            <li class="circle">
                <dialog class="dialog">
                    <form method="dialog">
                        <h2>Hero passport</h2>
                        <img src="/images/person.png" alt="" />
                        <h3><%= member.name %></h3>
                        <ul>
                            <li><%= member.age %></li>
                            <li><%= member.job %></li>
                            <li><%= member.city %></li>
                            <li><%= member.study %></li>
                        </ul>
                        <p><%= member.bio %></p>
                        <ul>
                            <% member.favouriteMovies.map((movie) => { %>
                                <li><%= movie %></li>
                            <% }) %>
                        </ul>
                        <button class="closeCardButton">
                            <span></span>
                            <span></span>
                        </button>
                    </form>
                </dialog>
                <button class="avatarButton">
                    <img src="<%= member.avatar.url %>" alt="" />
                </button>
            </li>
        <% }) %>
    </ul>

</section>
```

<hr>

#### Team.json 
Hier staat link in naar iedereen zijn/haar persoonlijke json met data

```JSON
{
  "teamName": "Heroes & Villains",
  "members": [
    {
      "name" : "Tristan Brattinga",
      "personalPage" : "https://pad/naar/de/app/van/teamlid-1"
    },
    {
      "name" : "Bart Spons",
      "personalPage" : "https://bart-spons.github.io/web-app-from-scratch-2324/"
    },
    {
      "name" : "Ferhat Kool",
      "personalPage" : "https://ferhatkool.github.io/web-app-from-scratch-2324/"
    },
    {
      "name" : "Klaudia Dobrzelewska",
      "personalPage" : "https://sonozakis.github.io/web-app-from-scratch-2324/"
    },
    {
      "name" : "Martijn Kooijman",
      "personalPage" : "https://martino538.github.io/web-app-from-scratch-2324/"
    }
  ],
}
```

<hr>

#### Server.js 
Dit bestand wordt gebruikt om data van het team te fetchen. Eerst een aantal standaard dingen die gebeuren.
- dotenv inladen
- express gebruiken
- localhost:3000 om de website op de liveserver te testen

```javascript
require('dotenv').config()
const express = require('express')
const app     = express()
const port    = process.env.PORT || 3000

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

const teamMembers = [
  "https://bart-spons.github.io/web-app-from-scratch-2324/json/bart.json",
  "https://raw.githubusercontent.com/ferhatkool/web-app-from-scratch-2324/master/docs/json/data.json",
  "https://tristanbrattinga.github.io/wafs/data.json",
  "https://martino538.github.io/web-app-from-scratch-2324/assets/dataset/dataset-Martijn.json",
  "https://sonozakis.github.io/web-app-from-scratch-2324/scripts/info.json"
]

let memberData = []

const fetchTeamData = () => {
  {teamMembers.map(member => {
    fetch(member).then((res) => {
        if (!res.ok) {
          throw new Error
          (`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        memberData.push(data)
        console.log(memberData)
        return memberData
      })
      .catch((e) => console.error('Unable to fetch team data:', e))
  })}
}

fetchTeamData()

// index page
app.get('/', (req, res) => {
    res.render('pages/index', { members: memberData })
})

// Error handling for not-existing pages
app.use((req, res) => {
  res.status(404).send('We`re sorry, we were not able to find the page you were looking for')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`)
})
```

<hr>

## Host
Ferhat (server)

## Responsive 
Martijn



