$("document").ready(function(){
   disable();
})


//add customer

$("#btnAddCustomer").click(function(){
   $("#form-header-customer").text("Add New Customer");
   enable();
   $("#inCustomerNic").focus();
   $("#form-clear-customer").removeAttr("disabled")
});

$("#form-clear-customer").click(function(){
    clearField();
})

$("#inCustomerNic").keyup(function(){
    btnStatus();
})













//extra methods

var disable = function(){
    $("#form-header-customer").text(null);
    $("#inCustomerNic").attr("disabled","disabled")
    $("#inCustomerName").attr("disabled","disabled")
    $("#inCustomerAddress").attr("disabled","disabled")
    $("#inCustomerSalary").attr("disabled","disabled")
    $("#form-clear-customer").attr("disabled","disabled")
    $("#saveData-customer").attr("disabled","disabled")
}

var enable = function(){
    
    $("#inCustomerNic").removeAttr("disabled")
    $("#inCustomerName").removeAttr("disabled")
    $("#inCustomerAddress").removeAttr("disabled")
    $("#inCustomerSalary").removeAttr("disabled")
}

//clear all field

var clearField = function(){
    $("#inCustomerNic").val('')
    $("#inCustomerName").val('')
    $("#inCustomerAddress").val('')
    $("#inCustomerSalary").val('')
}


//btn disble or enable check

var btnStatus = function(){
    if(valid){
        $("#saveData-customer").removeAttr("disabled")
    }else{
        $("#saveData-customer").attr('disabled',"disabled")
    }
}

// validation


var valid = function(){
    if("")
}