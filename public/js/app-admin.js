$(document).ready(function() {

// $.ajax("/admin" {
//     type:'GET'
// }).then(function(data) {
//     var rowsToAdd = [];
//     for(var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createTransactionRow(data[i]));
//     }
//     renderTransactionList(rowsToAdd);
//     nameInput.val("");


//        var newTr = $("<tr>");
//     newTr.data("Transaction", data);
//     newTr.append("<td>" + data.Customers.first_name + "</td>");
//     newTr.append("<td>" + data.Customers.last_name + "</td>");
//     newTr.append("<td>" + data.createdAt + "</td>");
//     newTr.append("<td>" + data.desired_currency + "</td>");
//     newTr.append("<td>" + data.total_money + "</td>");
//     return newTr; 
// })



var transactionContainer = $(".transaction-container")

var transactions = [];

// getTransactions();

function initializeRows(){
    transactionContainer.empty();
    var rowsToAdd = [];
    for (var i=0; i < transactions.length; i++) {
        rowsToAdd.push(createNewRow(transactions[i]));
    }
    transactionContainer.prepend(rowsToAdd)
}

function getTransactions(){
    $.get("/admin/", function(data){
        transactions = data;
        console.log(transactions);
        initializeRows();
    });
}

function createNewRow(transactions) {
    var newTr = $("<tr>");
    newTr.data("Transaction", transactions);
    newTr.append("<td>" + transactions.Customers.first_name + "</td>");
    newTr.append("<td>" + transactions.Customers.last_name + "</td>");
    newTr.append("<td>" + transactions.createdAt + "</td>");
    newTr.append("<td>" + transactions.desired_currency + "</td>");
    newTr.append("<td>" + transactions.total_money + "</td>");
    return newTr;
}





//     var transactionList = $("tbody");
//     var transactionContainer = $(".transaction-container");

// getTransactions();

// function createTransactionRow(getTransactions) {
//     var newTr = $("<tr>");
//     newTr.data("Transaction", getTransactions);
//     newTr.append("<td>" + getTransactions.Customers.first_name + "</td>");
//     newTr.append("<td>" + getTransactions.Customers.last_name + "</td>");
//     newTr.append("<td>" + getTransactions.createdAt + "</td>");
//     newTr.append("<td>" + getTransactions.desired_currency + "</td>");
//     newTr.append("<td>" + getTransactions.total_money + "</td>");
//     return newTr;
// }

//     function getTransactions() {
//         $.ajax("/admin" {
//             type:'GET'
//         }).then(function(data) {
//             var rowsToAdd = [];
//             for(var i = 0; i < data.length; i++) {
//                 rowsToAdd.push(createTransactionRow(data[i]));
//             }
//             renderTransactionList(rowsToAdd);
//             nameInput.val("");
//         });
//     }

//     function renderTransactionList(rows) {
//         transactionList.children().not(":last").remove();
//         transactionContainer.children(".alert").remove();
//         if (rows.length) {
//           console.log(rows);
//           transactionList.prepend(rows);
//         }
//         else {
//           renderEmpty();
//         }
//       }

})