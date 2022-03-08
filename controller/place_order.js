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

//disscount

$("#place-disscount").keyup(function(){
    $('#place-s-total').val(calsubTotal());
})

//ADD CHOOSE ITEM

$("#place-item-add").click(function(){



    let chooseItem = `<tr><td>${$('#chooseTbl>tr').length+1}</td><td>${$('#place-order-item-code').val()}</td><td>${$('#place-order-item-name').val()}</td><td>${$('#place-order-item-price').val()}</td><td>${$('#place-order-item-buyQty').val()}</td></tr>`

    $("#chooseTbl").append(chooseItem)
    loadItemCodeFormItem();
    cleaerFieldsPlaceOrder();
    checkStatusPurchase();
   

    $("#chooseTbl>tr").click(function(){
        $(this).remove();
        loadItemCodeFormItem();
        cleaerFieldsPlaceOrder();
        checkStatusPurchase();
        // ODERING NUMBER RESET
        var le = $('#chooseTbl>tr').length;
        for(var s =0 ;s<=le;s++){
            $('#chooseTbl>tr').children(':eq(0)').text(s+1);
            s++;
        }
    })

   
})




//extra methods

//cal sub total

function calsubTotal(){
    let diss = $("#place-disscount").val();

    var total = calTotal();

    var subTotal = total - (total*diss/100);

    return subTotal;
    
}

//purchase btn status

function checkStatusPurchase(){
    if($("#chooseTbl>tr").length > 0){
        $('#place-btn-purchase').removeAttr('disabled')
        $('#place-btn-cancel').removeAttr('disabled')
        $('#place-disscount').removeAttr('disabled')
        
        
    }else{
        $('#place-btn-purchase').attr('disabled','disabled')
        $('#place-btn-cancel').attr('disabled','disabled')
        $('#place-disscount').attr('disabled','disabled')
        
    }
}



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

    $("#place-item").val($('#chooseTbl>tr').length);
    $("#place-t-price").val(calTotal());
  
}

//total find

function calTotal(){
    var count = $('#chooseTbl>tr').length;
  
    
    var total=0.00;

    for(var temp=1; temp<=count;temp++){
         var unPrice =$(`#chooseTbl>tr:nth-child(${temp})`).children(':eq(3)').text();
         var qty = $(`#chooseTbl>tr:nth-child(${temp})`).children(':eq(4)').text();
        total+=unPrice*qty;
        
    }

    return total;
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