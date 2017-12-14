// dependencies
var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

// import models
var db = require('../models');

// redirect to landing page
router.get('/', function (req, res) {
    res.redirect('/index')
})

router.get('/index', function (req, res) {
    res.render('./index');
})

router.post('/newCustomer', function (req, res) {
    db.Customer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        transaction: false
    }).then(function() {
        // res.redirect('/custLogin')
    })
})

router.get('/custLogin', function(req, res) {
    res.render('./custLogin')
})

router.get('/custLogin-btn/:password', function (req, res) {
    db.Customer.findOne({
        where: {
            email: req.params.email,
            password: req.params.password
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer)
    })
})

// gets all customers from table and prints to screen
router.get('/vendor', function (req, res) {
    db.Customer.findAll({
        include: [db.Transaction]
    }).then(function (data) {
        var hbsObject = {
            customers: data
        }
        res.render('./vendor', hbsObject)
    })
})

// when you click on a specific customer, print that specific customer to the screen
router.get('/api/vendor/:id', function (req, res) {
    var id = req.params.id

    db.Customer.findOne({
        where: {
            id: id
        }
    }).then(function (dbVendor) {
        res.json(dbVendor)
    })
})

router.get('/vendor/back', function (req, res) {
    res.redirect('/vendor')
})

router.get('/reciever', function (req, res) {
    res.render('./reciever')
})

router.post('/reciever', function (req, res) {
    console.log(req.body);
    res.json("hi");
    db.Transaction.create(req.body)
        .then(function (dbTransaction) {
            console.log(dbTransaction);
        });
})

router.get('/admin', function (req, res) {
    db.Transaction.findAll({
        include: [db.Customer]
    })
        .then(function (data) {
            var hbsObject = {
                transaction: data
            }
            res.render('./admin', hbsObject)
        })
})


module.exports = router