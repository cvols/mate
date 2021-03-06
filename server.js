// dependencies
var express = require('express')
var passport = require("./config/passport");
var passportV = require("./config/vendorPassport");
var flash = require('connect-flash')
var session = require('express-session')

// setting up the express app
var app = express()
var port = process.env.PORT || 3030

// setting up methodOverride
//var methodOverride = require('method-override')
//app.use(methodOverride('_method'))

// Cookie Parser
//var cookieParser = require('cookie-parser')

// Express Validator
// var expressValidator = require('express-validator')
// app.use(expressValidator({
//     errorFormatter: function (param, msg, value) {
//         var namespace = param.split('.')
//             , root = namespace.shift()
//             , formParam = root;

//         while (namespace.length) {
//             formParam += '[' + namespace.shift() + ']';
//         }
//         return {
//             param: formParam,
//             msg: msg,
//             value: value
//         }
//     }
// }))

// Connect Flash

app.use(flash())

// Express Session

// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }))

// // Passport Init
// var passport = require('./config/passport')
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())

app.use(session({ secret: "keyboard dog", resave: true, saveUninitialized: true }));
app.use(passportV.initialize())
app.use(passportV.session())



//var LocalStrategy = require('passport-local').Strategy

// requiring models folder for syncing
var db = require('./models')
//require("./config/passport.js")(passport, db.Customer)

// static directory
 //app.use(express.static('public'))
 var path = require ('path');
 app.use(express.static(path.join(__dirname + '/public/')));

// setting up express app to handle data parsing
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
//app.use(cookieParser())

// setting up express handlebars
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
require('./controllers/xchange_controller.js')(app)
//app.use('/', routes)

//syncing our sequelize models and then starting the express app
db.sequelize.sync({}).then(function () {
    app.listen(port, function () {
        console.log('app listening on port: ' + port)
    })
})