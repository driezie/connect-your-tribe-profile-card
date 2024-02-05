// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal data op uit de FDND API, ga pas verder als de data gedownload is
const data = await fetchJson('https://fdnd.directus.app/items/person/46')
console.log(JSON.parse(data.data.custom)); // uncomment om de opgehaalde data te checken

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een GET route voor de index
app.get('/', function (request, response) {
  // Haalt de custom data op die ik heb aangemaakt in de FDND API
  const custom = JSON.parse(data.data.custom)
  // Render index.ejs uit de views map en geef uit FDND API opgehaalde data mee
  response.render('index', {data: data.data, custom})
})

// Maak een POST route voor de index
app.post('/', function (request, response) {
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`-----`)
  console.log(``)
  console.log(`Applicatie is gestart via link http://localhost:${app.get('port')}`)
  console.log(``)
  console.log(`Deze applicatie is gemaakt door Jelte Cost`)
  console.log(``)
  console.log(`-----`)
})
