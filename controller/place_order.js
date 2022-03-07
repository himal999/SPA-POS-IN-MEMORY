$("document").ready(function(){
   
    disablePlace();
})

$("#place-order").click(function(){
    loadItemCodeFormItem();
})

//buy qty
$("#place-order-item-buyQty").keyup(function(){
    checkValidQty();
})




//extra methods



//check valida qty

function checkValidQty(){
    if($('#place-order-item-qty').val() >= $('#place-order-item-buyQty').val().trim() &&   $('#place-order-item-buyQty').val().trim()>0){
      
        $('#error-buy-qty').text("");
        $("#place-item-add").removeAttr("disabled");
       
        
    }else{
      
        $('#error-buy-qty').text("Enter Valid Qty");
        $("#place-item-add").attr("disabled","disabled");
    }
}

//load item code

function loadItemCodeFormItem(){
    $("#place-item-code>option").remove();
    
    for(var i in item){
     
      let code =   item[i].getItemCode();
      let app = `<option>${code}</option>`;
      $("#place-item-code").append(app);

    
    }

    $("#place-item-code>option").click(function(){
        selectionData($(this).text());
    })
  
}


//LOAD DATA  SELECTION

function selectionData(){
    for(var i in item){
        if(item[i].getItemCode() == arguments[0]){
            $("#place-order-item-name").val(item[i].getItemName());
            $("#place-order-item-price").val(item[i].getItemPrice());
            $("#place-order-item-qty").val(item[i].getItemQty());
            $("#place-order-item-buyQty").removeAttr("disabled");
          
        }
    }
}


 function disablePlace(){
   
    $("#place-order-item-name").attr("disabled","disabled");
    $("#place-order-item-price").attr("disabled","disabled");
    $("#place-order-item-qty").attr("disabled","disabled");
    $("#place-order-item-buyQty").attr("disabled","disabled");
    $("#place-order-cust-name").attr("disabled","disabled");
    $("#place-item-add").attr("disabled","disabled");
    $("#place-item").attr("disabled","disabled");
    $("#place-t-price").attr("disabled","disabled");
    $("#place-disscount").attr("disabled","disabled");
    $("#place-s-total").attr("disabled","disabled");
    $("#place-btn-purchase").attr("disabled","disabled");
    $("#place-btn-cancel").attr("disabled","disabled");
 
}