var btToken,
    btCustomer;
$.get("/process/getClientToken" + ((btCustomer !== undefined) ? '/' + btCustomer : ''), function (token) {
    btToken = token;
});