// dependencies
//var express = require('express');
//var router = express.Router();
//var passport = require('passport')
//var LocalStrategy = require('passport-local').Strategy


// import models
var db = require('../models');
var passport = require("../config/passport");
var passportV = require("../config/vendorPassport")

module.exports = function (app) {
    // redirect to landing page
    app.get('/', function (req, res) {
        res.redirect('/index')
    })

    app.get('/index', function (req, res) {
        res.render('./index');
    })

    /*app.post("/custLogin", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        console.log("success")
        res.redirect("/reciever");
    });*/

    app.post('/custLogin', 
        passport.authenticate('local', {
            successRedirect: '/reciever',
            failureFlash: true
        })
    );

    app.post('/vendLogin', 
        passportV.authenticate('local',{
            successRedirect: '/vendor',
            failureFlash: true
        })
    );

    app.get('/reciever', function (req, res) {
        console.log("here")
        res.render('reciever')
    })

    app.get('/vendor', function (req, res) {
        console.log("here")
        res.render('vendor')
    })

    app.post('/newCustomer', function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            phone_number:req.body.phone_number,
            street_address: req.body.street_address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            transaction: req.body.transaction
            
        }).then(function () {
            res.redirect(307, '/custLogin');
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    app.post('/newVendor', function (req, res) {
        console.log(req.body);
        db.Vendor.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            phone_number:req.body.phone_number,
            street_address: req.body.street_address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            transaction: req.body.transaction
        }).then(function () {
            res.redirect(307, '/vendLogin');
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    
}

// router.get('/newCustomer', function(req, res){
//     res.render()
// })

// router.post('/newCustomer', function (req, res) {
//     db.Customer.findOne({
//         where: {
//             email: req.params.email,
//         }
//     }).then(function(dbCustomer) {
//         if(dbCustomer){
//             res.redirect('/sign-in')
//         }
//         else{
//             db.Customer.create({
//                 first_name: req.body.first_name,
//                 last_name: req.body.last_name,
//                 username: req.body.username,
//                 password: req.body.password,
//                 email: req.body.email,
//                 phone_number: req.body.phone_number,
//                 street_address: req.body.street_address,
//                 city: req.body.city,
//                 state: req.body.state,
//                 zip_code: req.body.zip_code,
//                 transaction: false
//             }).then(function() {
//                 // res.redirect('/custLogin')
//             })
//         }
//         res.json(dbCustomer)
//     })

// })

// router.post("/newCustomer", passport.authenticate('local-signup', 
//     {
//    successRedirect :"/reciever",
//    failureRedirect :"/index" 
//     })
// )



// router.post('/custLogin', passport.authenticate('local-signin', {
//     successRedirect: "/reciever",
//     failureRedirect: '/'
// }

// ));
// router.get("/newCustomer", isLoggedIn, function(req, res){
//     console.log("hello")
//     res.render('reciever')
// });


// router.get("/reciever", isLoggedIn, function(req, res){
//     res.render('reciever')
// });


// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();

//     res.redirect("/reciever");
// }

// router.get('/custLogin-btn/:password', function (req, res) {
//     db.Customer.findOne({
//         where: {
//             email: req.params.email,
//             password: req.params.password
//         }
//     }).then(function(dbCustomer) {
//         res.json(dbCustomer)
//     })
// })

// // gets all customers from table and prints to screen
// router.get('/vendor', function (req, res) {
//     db.Customer.findAll({
//         include: [db.Transaction]
//     }).then(function (data) {
//         var hbsObject = {
//             customers: data
//         }
//         res.render('./vendor', hbsObject)
//     })
// })

// // when you click on a specific customer, print that specific customer to the screen
// router.get('/api/vendor/:id', function (req, res) {
//     var id = req.params.id

//     db.Customer.findOne({
//         where: {
//             id: id
//         }
//     }).then(function (dbVendor) {
//         res.json(dbVendor)
//     })
// })

// router.get('/vendor/back', function (req, res) {
//     res.redirect('/vendor')
// })

// router.get('/reciever', function (req, res) {
//     res.render('./reciever')
// })

// router.post('/reciever', function (req, res) {
//     console.log(req.body);
//     res.json("hi");
//     db.Transaction.create(req.body)
//         .then(function (dbTransaction) {
//             console.log(dbTransaction);
//         });
// })

// router.get('/admin', function (req, res) {
//     db.Transaction.findAll({
//         include: [db.Customer]
//     })
//         .then(function (data) {
//             var hbsObject = {
//                 transaction: data
//             }
//             res.render('./admin', hbsObject)
//         })
// })


//module.exports = router