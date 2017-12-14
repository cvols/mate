$(function () {

    $('.collapsible').collapsible();

    $('.select-reciever').on('click', function (e) {
        e.preventDefault()

        $('.highlight').hide()
        $('.popout').show()

        var id = $(this).data('id')

        $.ajax('/api/vendor/' + id, {
            type: 'GET'
        }).then(function (data) {
            $('#first_name').html(data.first_name)
            $('#last_name').html(data.last_name)
            $('#phone_number').html(data.phone_number)
            $('#email').html(data.email)
            $('#user_rating').html(data.user_rating)
        })
    })

    $('#vendor-back-btn').on('click', function (e) {
        e.preventDefault()

        $.ajax('/vendor/back', {
            type: 'GET'
        }).then(function () {
            location.reload()
        })
    })
})