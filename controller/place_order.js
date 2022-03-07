$("document").ready(function(){
   cleaerFieldsPlaceOrder();
    disablePlace();
})

$("#place-order").click(function(){
    loadItemCodeFormItem();
})

//buy qty
$("#place-order-item-buyQty").keyup(function(){
    checkValidQty();
})

//ADD CHOOSE ITEM

$("#place-item-add").click(function(){



    let chooseItem = `<tr><td>${$('#chooseTbl>tr').length+1}</td><td>${$('#place-order-item-code').val()}</td><td>${$('#place-order-item-name').val()}</td><td>${$('#place-order-item-price').val()}</td><td>${$('#place-order-item-buyQty').val()}</td><td>Delete</td></tr>`

    $("#chooseTbl").append(chooseItem)
    loadItemCodeFormItem();
    cleaerFieldsPlaceOrder();
   

    $("#chooseTbl>tr").click(function(){
        $(this).remove();
        loadItemCodeFormItem();
        cleaerFieldsPlaceOrder();

        // ODERING NUMBER RESET
        var le = $('#chooseTbl>tr').length;
        for(var s =0 ;s<=le;s++){
            $('#chooseTbl>tr').children(':eq(0)').text(s+1);
            s++;
        }
    })
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
     
      if($("#chooseTbl>tr").children(':eq(1)').text() != item[i].getItemCode())  {
        let code =   item[i].getItemCode();
        let app = `<option>${code}</option>`;
        $("#place-item-code").append(app);
     
      }

     

    
    }

   

    $("#place-item-code>option").click(function(){
        selectionData($(this).text());
    })
  
}


//LOAD DATA  SELECTION

function selectionData(){
    for(var i in item){
        if(item[i].getItemCode() == arguments[0]){
            $("#place-order-item-code").val(item[i].getItemCode());
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
    $('#place-order-item-code').attr("disabled","disabled");
    $("#place-item-add").attr("disabled","disabled");
    $("#place-item").attr("disabled","disabled");
    $("#place-t-price").attr("disabled","disabled");
    $("#place-disscount").attr("disabled","disabled");
    $("#place-s-total").attr("disabled","disabled");
    $("#place-btn-purchase").attr("disabled","disabled");
    $("#place-btn-cancel").attr("disabled","disabled");
 
}

function cleaerFieldsPlaceOrder(){
    $("#place-order-item-name").val("");
    $("#place-order-item-price").val("");
    $("#place-order-item-qty").val("");
    $("#place-order-item-buyQty").val("");
  
    $('#place-order-item-code').val("");

}