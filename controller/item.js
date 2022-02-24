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
var regItemName = /^[A-z,0-9,-]{4,100}$/
var regItemQty = /^[0-9]{1,}$/
var regItemPrice = /^[0-9]{1,}(.)[0-9]{1,2}$/



$('#inItemCode').on('keyup',function(){
    btnStatus();
})

$('#inItemName').on('keyup',function(){
    btnStatus();
})

$('#inItemQty').on('keyup',function(){
    btnStatus();
})
$('#inItemPrice').on('keyup',function(){
    btnStatus();
})







function btnStatus(){
    var b = valid(); 

    if(b){
        $("#form-add").removeAttr("disabled")
    }else{
        $("#form-add").attr("disabled",'true')
    }
}

function valid(){
    if( regItemCode.test($('#inItemCode').val())){
        $('#inItemCode').css("border","1px solid  green");
        $('#errorCode').text("");
        $('inItemName').focus();
        if(regItemName.test($('#inItemName').val())){
            $('#inItemName').css("border","1px solid  green")
            $('#errorName').text("")
            $('inItemQty').focus();
            if(regItemQty.test($('#inItemQty').val())){
                $('#inItemQty').css("border","1px solid  green")
                $('#errorQty').text("")
                $('inItemPrice').focus();
                if(regItemPrice.test($('#inItemPrice').val())){
                    $('#inItemPrice').css("border","1px solid  green")
                    $('#errorPrice').text("")
                    return true;
                }else{
                    $('#inItemPrice').css("border","1px solid red")
                    $('#errorPrice').text("Please enter .x or .xx ")
                    $('#inItemPrice').focus();
                    return false;
                }
            }else{
                $('#inItemQty').css("border","1px solid red")
                $('#errorQty').text("Please enter valid Item Qty")
                $('#inItemQty').focus();
                return false;
            }
        }else{
            $('#inItemName').css("border","1px solid red")
            $('#errorName').text("Please don't using @ , / , \ , ' , ; , . , $ , % ,# and etc")
            $('#inItemName').focus();
            return false;
        }
    }else{
        $('#inItemCode').css("border","1px solid red")
        $('#errorCode').text("Please enter valid Item Code")
        $('#inItemCode').focus();
        return false;
    }
}






































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