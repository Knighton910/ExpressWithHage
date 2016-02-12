var express = require('express')
var http = require('http')
var app = express()

app.set('view engine', 'jade')
app.set('views', './views')

app.use(app.router)
app.use(express.static('./public'))
app.locals.pretty = true

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Superheros',
    message: 'The champs are back!'
    html_message: 'The <b>champs</b> are back!'
  })
})

app.get('/', function(req,res) {
  res.render('index', {
    title: 'Superheros',
    heroes: [
      {name: 'Fooman', role: 'capt', skills: ['dancing','fencing']},
    ]
  })
})

http.createServer(app).listen(3000,function() {
  console.log('App started, Running @ *3000*')
})
