//JamesK 


$(document).ready(function () {

    $('#customer-login').hide()

    $("#addCustomer").on('click', function (event) {
        event.preventDefault();

        var newCustomer = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            username: $("#user_name").val().trim(),
            phone_number: $("#phone_number").val().trim(),
            street_address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip_code: $("#zip_code").val().trim(),
            transaction: false
        }
//on the submit we want to redirect . does that code happen here in an if statement?
        $.ajax('/newCustomer', {
            type: 'POST',
            data: newCustomer
        }).then(function () {
            console.log('added new Customer', newCustomer)
            // $('.hide-index').hide()
            //  $('#customer-login').show()
        })
    });

    $('#sign-in').on('click', function(event) {
        event.preventDefault()

        $.ajax('/custLogin-btn/:password', {
            type: 'GET'
        }).then(function(data) {

        })
    })
});