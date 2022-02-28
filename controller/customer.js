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

$("#inCustomerNic").keyup(function(event){
    if(checkCustomerNic()){
        if(event.key == "Enter"){
            $("#inCustomerName").focus();
        }
    }else{
        $("#inCustomerNic").focus();
    }
   
})

$("#inCustomerName").keyup(function(event){
    if(checkCustomerName()){
        if(event.key == "Enter"){
            $("#inCustomerAddress").focus();
        }
    }else{
        $("#inCustomerName").focus();
    }
})













//extra methods


//nic validation
regNIc = /^[0-9]{9,9}(v)$/

var checkCustomerNic = function(){
    if(regNIc.test($("#inCustomerNic").val())){
       $("#inCustomerNic").css("border","1px solid green")
       $("#errorNic-customer").text("")
       return true
      
    }else{
        $("#inCustomerNic").css("border","1px solid red")
        $("#errorNic-customer").text("Worng NIC")
        return false
    }
}

//name validation

var regName = /^[A-z,0-9]{3,}$/

var checkCustomerName = function(){
    if(regName.test($("#inCustomerName").val())){
       $("#inCustomerName").css("border","1px solid green")
       $("#errorName-customer").text("")
       return true
      
    }else{
        $("#inCustomerName").css("border","1px solid red")
        $("#errorName-customer").text("Min cha 3 and dont use space")
        return false
    }
}



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


// var valid = function(){
//     if("")
// }