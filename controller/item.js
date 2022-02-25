$("document").ready(function(){
 disable();
    
})


$('#btnAdd').click(function(){
    clearField();
    $('#form-header').text("Add New Item");
    $("#saveData").text("Add Item")
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



$('#inItemCode').on('keyup',function(event){
    btnStatus();
    
    if(event.key == "Enter"){


        if(!checkItemCode($('#inItemCode').val())){
            $('#inItemCode').css("border","1px solid  green");
            $('#errorCode').text("");
            $('#inItemName').focus();
        }else{
            $('#inItemCode').css("border","1px solid red")
            $('#errorCode').text("Alredy Exists Item Code")
            $('#inItemCode').focus();
           
        }
    }
    
})




$('#inItemName').on('keyup',function(event){
    btnStatus();

     if(event.key == "Enter"){

        
      
            $('#inItemQty').focus();
      
      
    }
})

$('#inItemQty').on('keyup',function(event){
    btnStatus();
    if(event.key == "Enter"){
    
            $('#inItemPrice').focus();
     
       
    }
})
$('#inItemPrice').on('keyup',function(event){
    btnStatus();
    if(event.key == "Enter"){
        $('#saveData').focus();
  
    }
})



//this saveData btn not workinh ?
$("#saveData").click(function(){

          
})



//tempory savedata/update Btn

$('#ss').click(function() {

    var i = new Item();

    i.setItemCode($('#inItemCode').val());
    i.setItemName($('#inItemName').val())
    i.setItemQty($('#inItemQty').val())
    i.setItemPrice($('#inItemPrice').val())


   if($("#ss").text() == "save"){
   

   
  

    item.push(i);

    loadTable();

    clearField();
    disable();

   }else{
       
        for(var s in item){
            if(item[s].getItemCode() == $('#inItemCode').val()){
        
              item[s].setItemName(i.getItemName());
              item[s].setItemQty(i.getItemQty()) ;
              item[s].setItemPrice(i.getItemPrice());
              loadTable();
              clearField();
              disable();
            }
        }
   }





  

    //update data

    $("#itemTbl>tr").click(function(){

         clearField();
         enable();
         $('#form-header').text("Update Item");
         $('#saveData').text("Update");
         $('#ss').text("Update"); //TEMPORY BTN
         $("#inItemCode").attr("disabled","true");
         $('#inItemCode').val($(this).children(':eq(1)').text()) 
         $('#inItemName').val($(this).children(':eq(2)').text()) 
         $('#inItemQty').val($(this).children(':eq(3)').text()) 
         $('#inItemPrice').val($(this).children(':eq(4)').text()) 

   })

    
})






















     


        

        
    
      
        
 











































// Extra methods








//load Table

function loadTable() {

    $("#itemTbl>tr").remove();
  
    let ref = 1;
    let up = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    let del = '<i class="fa-solid fa-trash"></i>';
    
    for(var i in item){
       
        
        let rowObj= "<tr><th>"+ref+"</th><td>"+item[i].itemCode+"</td><td>"+item[i].itemName+"</td><td>"+item[i].itemQty+"</td><td>"+item[i].itemPrice+"</td><td>"+up + "__or__" + del+"</td></tr>";
        $('#itemTbl').append(rowObj);
        ref++;
    }

}

// check item Code

function checkItemCode(itemCode){
    for(let i in item){
 
        if(item[i].itemCode == itemCode){
           
            return true
        }
    }
   
    return false;
}


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
      
            if(regItemName.test($('#inItemName').val())){
                $('#inItemName').css("border","1px solid  green")
                $('#errorName').text("")
               
                if(regItemQty.test($('#inItemQty').val())){
                    $('#inItemQty').css("border","1px solid  green")
                    $('#errorQty').text("")
                    
                  
                    if(regItemPrice.test($('#inItemPrice').val())){
                        $('#inItemPrice').css("border","1px solid  green")
                        $('#errorPrice').text("")
                      
                        return true;
                    }else{
                        $('#inItemPrice').css("border","1px solid red")
                        $('#errorPrice').text("Please enter .x or .xx ")
                        
                        
                    }
                }else{
                    $('#inItemQty').css("border","1px solid red")
                    $('#errorQty').text("Please enter valid Item Qty")
                  
                 
                }
            }else{
                $('#inItemName').css("border","1px solid red")
                $('#errorName').text("Please don't using @ , / , \ , ' , ; , . , $ , % ,# and etc")
             
          
            }
    
 
    }else{
        $('#inItemCode').css("border","1px solid red")
        $('#errorCode').text("Please enter valid Item Code")
       
      
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