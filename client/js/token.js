function getBraintreeClientToken(btCustomer) {
    $.get("/process/getClientToken" + ((btCustomer !== undefined) ? '/' + btCustomer : ''), function (token) {
        /*global braintreeRender*/
        braintreeRender(token);
    });
}
