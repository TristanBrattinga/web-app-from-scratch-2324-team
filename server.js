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
  "https://tristanbrattinga.github.io/wafs/data/data.json",
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