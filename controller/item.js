$("document").ready(function(){
   disable();
})


$('#btnAdd').click(function(){

    $('#form-header').text("Add New Item");
    enable();
   
    
})

$('#form-clear').click(function(){
    clearField();
  
})


//Validation

var regItemCode = /^(I-)[0-9]{3,4}$/;
var regItemName = /^[A-z,0-9]{4,100}$/
var regItemQty = /^[0-9]{1,}$/
var regItemPrice = /^[0-9]{1,}(.)[0-9]{1,2}$/

$('#inItemCode').keyup(function(){
    if(regItemCode.test($('#inItemCode').val())){
        $('#inItemCode').css("border","1px solid  green")
    }else{
        $('#inItemCode').css("border","1px solid red")
    }
})

$('#inItemName').keyup(function(){
    if(regItemName.test($('#inItemName').val())){
        $('#inItemName').css("border","1px solid  green")
    }else{
        $('#inItemName').css("border","1px solid red")
    }
})
$('#inItemQty').keyup(function(){
    if(regItemQty.test($('#inItemQty').val())){
        $('#inItemQty').css("border","1px solid  green")
    }else{
        $('#inItemQty').css("border","1px solid red")
    }
})
$('#inItemPrice').keyup(function(){
    if(regItemPrice.test($('#inItemPrice').val())){
        $('#inItemPrice').css("border","1px solid  green")
    }else{
        $('#inItemPrice').css("border","1px solid red")
    }
})



//methods

//Disable all btn/field

function disable(){
    $('#form-header').text(null);
    $("#form-clear").attr("disabled",'true')
    $("#form-add").attr("disabled",'true')
    $('#inItemCode').attr('disabled','true')
    $('#inItemName').attr('disabled','true')
    $('#inItemQty').attr('disabled','true')
    $('#inItemPrice').attr('disabled','true')
}

//Enable all btn/field

function enable(){
    
    $("#form-clear").removeAttr("disabled")
    $('#inItemCode').removeAttr('disabled')
    $('#inItemName').removeAttr('disabled')
    $('#inItemQty').removeAttr('disabled')
    $('#inItemPrice').removeAttr('disabled')
}

// Clear Field

function clearField(){

    $('#inItemCode').val("")
    $('#inItemName').val("")
    $('#inItemQty').val("")
    $('#inItemPrice').val("")
}