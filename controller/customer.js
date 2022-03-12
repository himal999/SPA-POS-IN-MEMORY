$("document").ready(function(){
   disable();
   loadTable();
})


//add customer

$("#btnAddCustomer").click(function(){
 
   $("#form-header-customer").text("Add New Customer");
   enable();
   $("#ss-customer").text("Add Customer"); //tempory btn
   $("#inCustomerNic").focus();
   $("#form-clear-customer").removeAttr("disabled")
   $("#form-clear-customer").text("Clear");
   clearField();
});

$("#form-clear-customer").click(function(){

    if($("#form-clear-customer").text == "Cancel"){
            clearField()
            disable();
    }else{
           clearField();
    }
   
})

//search btn
$('#search').on('keyup',function(){
    var value = $(this).val().toLowerCase();
    $('#customerTbl>tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
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

    $('#customerTbl>tr').off();


    var i  = new Customer();

    i.setCustomerNic($("#inCustomerNic").val());
    i.setCustomerName($("#inCustomerName").val());
    i.setCustomerAddress($("#inCustomerAddress").val());
    i.setCustomerSalary($("#inCustomerSalary").val());

    if($("#ss-customer").text() == "Add Customer"){
        customer.push(i);
        loadTable();
        alert("Customer Added success")
        clearField();
        disable();

    }
    else if($("#ss-customer").text() == "Update"){
        for(var s in customer){
            if(customer[s].getCustomerNic() == $('#inCustomerNic').val()){
                customer[s].setCustomerName(i.getCustomerName());
                customer[s].setCustomerAddress(i.getCustomerAddress());
                customer[s].setCustomerSalary(i.getCustomerSalary());

                loadTable();
                alert("Customer Update success")
                disable();
                clearField();
            

            }
        }
    
    
    }else{
        for(var s in customer){
            if(customer[s].getCustomerNic() == $('#inCustomerNic').val()){
             
               if(deleteItem()){
                customer.splice(s,1);

                clearField();
                disable();
                loadTable();
               }
              
             
            }
        }
    }

 

    //update customer

    $("#customerTbl>tr").click(function(){

        clearField();
        enable();
        $('#inCustomerNic').attr('disabled','disabled');
        $("#form-header-customer").text("Update Customer");
        $("#saveData-customer").text("Update");
        $("#form-clear-customer").text("Clear");
        $("#ss-customer").text("Update"); //tempory btn
        $("#inCustomerNic").val($(this).children(':eq(1)').text());
        $("#inCustomerName").val($(this).children(':eq(2)').text());
        $("#inCustomerAddress").val($(this).children(':eq(3)').text());
        $("#inCustomerSalary").val($(this).children(':eq(4)').text())
    })

    //delete customer


    $("#customerTbl>tr").dblclick(function(){

        clearField();
        $("#form-header-customer").text("Delete Customer");
        $("#inCustomerNic").attr("disabled","disabled")
        $("#inCustomerName").attr("disabled","disabled")
        $("#inCustomerAddress").attr("disabled","disabled")
        $("#inCustomerSalary").attr("disabled","disabled")
        $("#form-clear-customer").removeAttr("disabled");
        $("#form-clear-customer").text("Cancel");
        $("#saveData-customer").text("Delete")
        $("#ss-customer").text("Delete")//tempory btn
        $("#saveData-customer").removeAttr("disabled")

        $("#inCustomerNic").val($(this).children(':eq(1)').text());
        $("#inCustomerName").val($(this).children(':eq(2)').text());
        $("#inCustomerAddress").val($(this).children(':eq(3)').text());
        $("#inCustomerSalary").val($(this).children(':eq(4)').text())
    })

  

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


//delete confirm

function deleteItem() {
    if (confirm("Are you sure?")) {
       return true
    }
    return false;
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

    if(customer.length == 0){
        let co = "'color:red;position:relative;left:830px;'"
        let msg = "<tr><td><h5 style="+co+">No Data Available</h5></td></tr>";
        $('#customerTbl').append(msg);

    }else{

        var ref = 1;
         for(var i in customer){
          let rowObj= "<tr><th>"+ref+"</th><td>"+customer[i].getCustomerNic()+"</td><td>"+customer[i].getCustomerName()+"</td><td>"+customer[i].getCustomerAddress()+"</td><td>"+customer[i].getCustomerSalary()+"</td></tr>";
             $('#customerTbl').append(rowObj)
            ref++;
        }
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




