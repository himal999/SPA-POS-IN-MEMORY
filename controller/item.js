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



//this saveData btn not workinh ?
$("#saveData").click(function(){

          
})



//tempory savedata Btn

$('#ss').click(function() {
    var i = new Item();


    i.setItemCode($('#inItemCode').val());
    i.setItemName($('#inItemName').val())
    i.setItemQty($('#inItemQty').val())
    i.setItemPrice($('#inItemPrice').val())

    item.push(i);


    clearField();
    disable();
})

















     


        

        
    
      
        
 











































// Extra methods


//validation


function btnStatus(){
    var b = valid(); 

    if(b){

      $('#saveData').removeAttr("disabled");
      

    }else{
       $("#saveData").attr("disabled",'disabled')

   
       
    }
}

function valid(){
    if(regItemCode.test($('#inItemCode').val())){
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
                    $('#saveData').focus();
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

//Disable all btn/field

function disable(){
    $('#form-header').text(null);
    $("#form-clear").attr("disabled",'disabled')
    $("#saveData").attr("disabled",'disabled')
    $('#inItemCode').attr('disabled','disabled')
    $('#inItemName').attr('disabled','disabled')
    $('#inItemQty').attr('disabled','disabled')
    $('#inItemPrice').attr('disabled','disabled')
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
    $('#inItemCode').css("border","1px solid #CED4DA")
    $('#inItemName').val("")
    $('#inItemName').css("border","1px solid #CED4DA")
    $('#inItemQty').val("")
    $('#inItemQty').css("border","1px solid #CED4DA")
    $('#inItemPrice').val("")
    $('#inItemPrice').css("border","1px solid #CED4DA")
}