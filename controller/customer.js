$("document").ready(function(){
   disable();
})




//extra methods

var disable = function(){
    $("#form-header-customer").text(null);
    $("#inCustomerNic").attr("disabled","disabled")
    $("#inCustomerName").attr("disabled","disabled")
    $("#inCustomerAddress").attr("disabled","disabled")
    $("#inCustomerSalary").attr("disabled","disabled")
}

var enable = function(){
    
    $("#inCustomerNic").removeAttr("disabled")
    $("#inCustomerName").removeAttr("disabled")
    $("#inCustomerAddress").removeAttr("disabled")
    $("#inCustomerSalary").removeAttr("disabled")
}