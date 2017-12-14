$(document).ready(function () {
    
    $("#addVendor").click(function(){
        event.preventDefault();
        console.log("hello");
        // make a newCharacter obj
        var newVendor = {
            // name from name input
            first_name: $("#first_nameV").val().trim(),
            // role from role input
            last_name: $("#last_nameV").val().trim(),
            // age from age input
            email: $("#emailV").val().trim(),
            // points from force-points input
            password: $("#passwordV").val().trim(),

            username: $("#user_nameV").val().trim(),

            phone_number: $("#phone_numberV").val().trim(),

            street_address: $("#addressV").val().trim(),

            city: $("#cityV").val().trim(),

            state: $("#stateV").val().trim(),

            zip_code: $("#zip_codeV").val().trim()
        }  


        $.ajax('/api/newVendor', {
            type: 'POST',
            data: newVendor
        }).then(function () {
            console.log('added new Vendor', newVendor)
            location.reload()
        })
    });
});