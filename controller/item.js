$("document").ready(function(){
 disableItem();
 loadTableItem();
    
})


$('#btnAdd').click(function(){
    clearFieldItem();
    $('#form-header').text("Add New Item");
    $("#saveData").text("Add Item")
    $("#form-clear").text("Clear")
    $("#ss").text("Add Item") //tempory btn
    enableItem();
})

$('#form-clear').click(function(){

  
   
    if($("#saveData").text() == "Add Item"){

        clearFieldItem();

    }else if($("#saveData").text() == "Update"){
       
        clearUpdateFieldItem();
    }else{
        clearFieldItem();
        disableItem();
    }
  
})


//Validation

var regItemCode = /^(I-)[0-9]{3,4}$/;
var regItemName = /^[A-z,0-9,-]{4,100}$/
var regItemQty = /^[0-9]{1,}$/
var regItemPrice = /^[0-9]{1,}(.)[0-9]{1,2}$/



$('#inItemCode').on('keyup',function(event){
    btnStatusItem();
    
    if(event.key == "Enter"){

        $('#inItemName').focus();
       
    }
    
})

$('#inItemCode').blur(function(){
    if(!checkItemCode($('#inItemCode').val())){
        $('#inItemCode').css("border","1px solid  green");
        $('#errorCode').text("");
        $('#inItemName').focus();
        $("#saveData").removeAttr('disabled');
        $('#inItemName').removeAttr("disabled")
        $('#inItemQty').removeAttr("disabled")
        $('#inItemPrice').removeAttr("disabled")
     
    }else{
        $('#inItemCode').css("border","1px solid red")
        $('#errorCode').text("Alredy Exists Item Code")
        $('#inItemCode').focus();
        $("#saveData").attr("disabled","disabled")
        $('#inItemName').attr("disabled","disabled")
        $('#inItemQty').attr("disabled","disabled")
        $('#inItemPrice').attr("disabled","disabled")
        clearUpdateFieldItem();
       
       
    }
})




$('#inItemName').on('keyup',function(event){
    btnStatusItem();

     if(event.key == "Enter"){

        
      
            $('#inItemQty').focus();
      
      
    }
})

$('#inItemQty').on('keyup',function(event){
    btnStatusItem();
    if(event.key == "Enter"){
    
            $('#inItemPrice').focus();
     
       
    }
})
$('#inItemPrice').on('keyup',function(event){
    btnStatusItem();
    if(event.key == "Enter"){
        $('#saveData').focus();
  
    }
})



//this saveData btn not workinh ?
$("#saveData").click(function(){

          
})



//tempory savedata/update/delete btn

$('#ss').click(function() {


    $("#itemTbl>tr").off();


    var i = new Item();

    i.setItemCode($('#inItemCode').val());
    i.setItemName($('#inItemName').val())
    i.setItemQty($('#inItemQty').val())
    i.setItemPrice($('#inItemPrice').val())


   if($("#ss").text() == "Add Item"){
   
        item.push(i);

        alert("Item Added Successfully")

        loadTableItem();

        clearFieldItem();
        
        disableItem();

   }else if($("#ss").text() == "Update"){
       
        for(var s in item){
            if(item[s].getItemCode() == $('#inItemCode').val()){
        
              item[s].setItemName(i.getItemName());
              item[s].setItemQty(i.getItemQty()) ;
              item[s].setItemPrice(i.getItemPrice());
              loadTableItem();
              clearFieldItem();
              disableItem();
            }
        }
   }
   else{

        if(deleteItem()){
            for(var s in item){
                if(item[s].getItemCode() == $('#inItemCode').val()){
                     item.splice(s,1);
                     loadTableItem();
                     clearFieldItem();
                     disableItem();
                     
                 }
            }
        }

        clearFieldItem();
        disableItem();
     
   }


    //delete data

    $("#itemTbl>tr").dblclick(function(){
        clearFieldItem();
        
        $('#form-header').text("Delete Item");
        $('#saveData').text("Delete");
        $("#saveData").removeAttr("disabled")
        $('#form-clear').text("Cancel");
        $("#form-clear").removeAttr("disabled")
        $('#ss').text("Delete"); //TEMPORY BTN
        $("#inItemCode").attr("disabled","true");
        $("#inItemName").attr("disabled","true");
        $("#inItemQty").attr("disabled","true");
        $("#inItemPrice").attr("disabled","true");
        $('#inItemCode').val($(this).children(':eq(1)').text()) 
        $('#inItemName').val($(this).children(':eq(2)').text()) 
        $('#inItemQty').val($(this).children(':eq(3)').text()) 
        $('#inItemPrice').val($(this).children(':eq(4)').text()) 
    })


  

    //update data

    $("#itemTbl>tr").click(function(){

         clearFieldItem();
         enableItem();
         $('#form-header').text("Update Item");
         $('#form-clear').text("Clear");
     
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


//delete confirm

function deleteItem() {
    if (confirm("Are you sure?")) {
       return true
    }
    return false;
}

//load Table

function loadTableItem() {

    $("#itemTbl>tr").remove();


    if(item.length == 0){
        let co = "'color:red;position:relative;left:830px;'"
        let msg = "<tr><td><h5 style="+co+">No Data Available</h5></td></tr>";
        $('#itemTbl').append(msg);

    }else{
  
       let ref = 1;
    
    
      for(var i in item){
       
        
        let rowObj= "<tr><th>"+ref+"</th><td>"+item[i].getItemCode()+"</td><td>"+item[i].getItemName()+"</td><td>"+item[i].getItemQty()+"</td><td>"+item[i].getItemPrice()+"</td></tr>";
        $('#itemTbl').append(rowObj);
        
        ref++;
     }

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


function btnStatusItem(){
    var b = validItem(); 

    if(b){

      $('#saveData').removeAttr("disabled");
      

    }else{
       $("#saveData").attr("disabled",'disabled')

   
       
    }
}

function validItem(){
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

function disableItem(){
    $('#form-header').text(null);
    $("#form-clear").attr("disabled",'disabled')
    $("#saveData").attr("disabled",'disabled')
    $('#inItemCode').attr('disabled','disabled')
    $('#inItemName').attr('disabled','disabled')
    $('#inItemQty').attr('disabled','disabled')
    $('#inItemPrice').attr('disabled','disabled')
}

//Enable all btn/field

function enableItem(){
    
    $("#form-clear").removeAttr("disabled")
    $('#inItemCode').removeAttr('disabled')
    $('#inItemName').removeAttr('disabled')
    $('#inItemQty').removeAttr('disabled')
    $('#inItemPrice').removeAttr('disabled')
}

// Clear Field 

function clearFieldItem(){

    $('#inItemCode').val("")
    $('#inItemCode').css("border","1px solid #CED4DA")
    $('#inItemName').val("")
    $('#inItemName').css("border","1px solid #CED4DA")
    $('#inItemQty').val("")
    $('#inItemQty').css("border","1px solid #CED4DA")
    $('#inItemPrice').val("")
    $('#inItemPrice').css("border","1px solid #CED4DA")
}

// clear field update

function clearUpdateFieldItem(){
    
    $('#inItemName').val("")
    $('#inItemName').css("border","1px solid #CED4DA")
    $('#inItemQty').val("")
    $('#inItemQty').css("border","1px solid #CED4DA")
    $('#inItemPrice').val("")
    $('#inItemPrice').css("border","1px solid #CED4DA")
}

//search item

$("#btnSearch").click(function(){
 
    let charctor = $("#search").val();
    for(var i in item){
        if(item[i].getItemCode() == charctor){
            console.log("sit")
        }
    }
})