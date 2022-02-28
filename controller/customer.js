$("document").ready(function(){
   disable();
   loadTable();
})


//add customer

$("#btnAddCustomer").click(function(){
 
   $("#form-header-customer").text("Add New Customer");
   enable();
   $("#inCustomerNic").focus();
   $("#form-clear-customer").removeAttr("disabled")
   clearField();
});

$("#form-clear-customer").click(function(){
    clearField();
})

$("#inCustomerNic").keyup(function(event){
    btnStatus();
    
    if(checkCustomerNic()){
        if(checkNic()){
            return
        }else{
            if(event.key == "Enter"){
            
                $("#inCustomerName").focus();
            }
        }
        
    }else{
        $("#inCustomerNic").focus();
    }
   
})




$("#inCustomerName").keyup(function(event){
    btnStatus();
    if(checkCustomerName()){
       
        if(event.key == "Enter"){
           
            $("#inCustomerAddress").focus();
        }
    }else{
        $("#inCustomerName").focus();
    }
})

$("#inCustomerAddress").keyup(function(event){
    btnStatus();
    if(checkCustomerAddress()){
     
        if(event.key == "Enter"){
            
            $("#inCustomerSalary").focus();
        }
    }else{
        $("#inCustomerAddress").focus();
    }
})

$("#inCustomerSalary").keyup(function(event){
    btnStatus();
    if(checkCustomerSalary()){
        
        if(event.key == "Enter"){
            
            $('#saveData-customer').focus()
        }
    }else{
        $("#inCustomerSalary").focus();
    }
})


//save customer



//button not working ?
$("#saveData-customer").click(function(){
 
})

//tempory btn using

$("#ss-customer").click(function(){
    var i  = new Customer();

    i.setCustomerNic($("#inCustomerNic").val());
    i.setCustomerName($("#inCustomerName").val());
    i.setCustomerAddress($("#inCustomerAddress").val());
    i.setCustomerSalary($("#inCustomerSalary").val());

    customer.push(i);
    loadTable();
    clearField();
    disable();

})











//extra methods

//check alredy exit id


var checkNic = function(){
    for(var i in customer){
        
        if(customer[i].getCustomerNic() == $("#inCustomerNic").val()){
        
            $("#inCustomerNic").css("border","1px solid red")
            $("#errorNic-customer").text("Alredy Exists ID")
            threeFieldDisable();
              return true
        }
    }
    enable();
    $('#saveData-customer').removeAttr("disabled");
    return false
   
}

//nic validation
var regNIc = /^[0-9]{9,9}(v)$/

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

//address validation

var regAddress = /^[A-z,0-9]{3,}$/

var checkCustomerAddress = function(){
    if(regAddress.test($("#inCustomerAddress").val())){
       $("#inCustomerAddress").css("border","1px solid green")
       $("#errorAddress-customer").text("")
       return true
      
    }else{
        $("#inCustomerAddress").css("border","1px solid red")
        $("#errorAddress-customer").text("Please Enter Valid Address")
        return false
    }
}

//salary validation

var regSalary = /^[0-9]{4,}[.][0-9]{1,2}$/

var checkCustomerSalary = function(){
    if(regSalary.test($("#inCustomerSalary").val())){
       $("#inCustomerSalary").css("border","1px solid green")
       $("#errorSalary-customer").text("")
       return true
      
    }else{
        $("#inCustomerSalary").css("border","1px solid red")
        $("#errorSalary-customer").text("Please Enter Valid Slary")
        return false
    }
}

//btn disble or enable check

var btnStatus = function(){
    if(valid()){
        $("#saveData-customer").removeAttr("disabled")
    }else{
        $("#saveData-customer").attr('disabled',"disabled")
    }
}





var valid = function(){
    if(checkCustomerNic()){
        if(checkCustomerName()){
            if(checkCustomerAddress()){
                if(checkCustomerSalary()){
                    return true
                }else{
                    $("#inCustomerSalary").focus();
                    return false; 
                }
            }else{
                $("#inCustomerAddress").focus();
                return false;
            }
        }else{
            $("#inCustomerName").focus();
            return false;
        }
    }else{
        $("#inCustomerNic").focus();
        return false;
    }
}

//load data from array



var loadTable = function(){

    $('#customerTbl>tr').remove();

    var ref = 1;
    for(var i in customer){
        let rowObj= "<tr><th>"+ref+"</th><td>"+customer[i].getCustomerNic()+"</td><td>"+customer[i].getCustomerName()+"</td><td>"+customer[i].getCustomerAddress()+"</td><td>"+customer[i].getCustomerSalary()+"</td></tr>";
         $('#customerTbl').append(rowObj)
         ref++;
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


//disable alredy id enter

var threeFieldDisable = function(){
    $("#inCustomerName").attr("disabled","disabled")
    $("#inCustomerAddress").attr("disabled","disabled")
    $("#inCustomerSalary").attr("disabled","disabled")
    $("#saveData-customer").attr("disabled","disabled")
}

//clear all field

var clearField = function(){
    $('#inCustomerNic').val("")
    $('#inCustomerNic').css("border","1px solid #CED4DA")
    $('#inCustomerName').val("")
    $('#inCustomerName').css("border","1px solid #CED4DA")
    $('#inCustomerAddress').val("")
    $('#inCustomerAddress').css("border","1px solid #CED4DA")
    $('#inCustomerSalary').val("")
    $('#inCustomerSalary').css("border","1px solid #CED4DA")
}




