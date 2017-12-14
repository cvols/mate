$(document).ready(function () {

    $('select').material_select();

    $("#submit").click(function () {

        var desiredCurrency = $("#dCurrency").val().trim();
        var currentCurrency = $("#cCurrency").val().trim();
        var desiredAmount = $("#desiredAmount").val().trim();
        var transLocation = $("#transLocation").val().trim();
        var transDate = $("#transDate").val().trim();
        var queryUrl = "http://api.fixer.io/latest?base=" + desiredCurrency + "&symbols=" + currentCurrency

        console.log("desired currency" + " " + desiredCurrency);
        console.log("current currency" + " " + currentCurrency);
        console.log("desired amount" + " " + desiredAmount);
        console.log("transaction location" + " " + transLocation);
        console.log("transaction Date" + " " + transDate);

        $.ajax({
            url: queryUrl,
            method: 'GET',
            dataType: 'json'
        }).done(function (response) {

            var obj = response.rates
            console.log(response.rates);
            for (x in obj) {

                var exchangeRate = obj[x];
                var fee = exchangeRate * desiredAmount
                console.log("exchange rate = " + exchangeRate);
                console.log("total charge " + fee);
            }

            // console.log(response.rates["USD"]);
            //the fee = the amount of your current currency inside of a dolloar of your desired currency * your desired amount of desired currency

            //Problem - how do you get the amount of your current currency inside of dollar of desired currency in a dynamic way. Right now you have to explicitly write the desired currency in dot notation to retrieve the difference.
            // console.log("fee" + " " + response.rates.USD * desiredAmount + " " + currentCurrency);

            $.ajax({
                url: "/reciever",
                method: 'POST',
                dataType: 'json',
                data: {
                    fees: fee,
                    transaction_location: transLocation,
                    // transDate,
                    desired_currency: desiredCurrency,
                    total_money: desiredAmount,
                    exchange_rate: exchangeRate,
                    current_currency: currentCurrency,
                    total_charges: 10,
                    transaction: false
                }
            }).done(function (response) {
                console.log("done");
            });
        });
    });
});