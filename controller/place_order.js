$("document").ready(function(){
   cleaerFieldsPlaceOrder();
   disablePlace();
   
})

$("#place-order").click(function(){
    loadItemCodeFormItem();
   $("#place-invoice").text(invoiceNumber());
  

})

//load time

setInterval("getTime()",1000)

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

    $('#chooseTbl>tr').off();

    let chooseItem = `<tr><td>${$('#chooseTbl>tr').length+1}</td><td>${$('#place-order-item-code').val()}</td><td>${$('#place-order-item-name').val()}</td><td>${$('#place-order-item-price').val()}</td><td>${$('#place-order-item-buyQty').val()}</td></tr>`

    $("#chooseTbl").append(chooseItem)
    loadItemCodeFormItem();
    cleaerFieldsPlaceOrder();
    checkStatusPurchase();
    disablePlace();
   

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


//genareate invoice number

function invoiceNumber(){
   if(order.length > 0){
        var temp = order[order.length-1].getInvoiceNo().split("-")[1];
        temp = temp+1;
        if(temp<9){
            return "0-00"+temp;
        }else if(temp<99){
            return "0-0"+temp;
        }else{
            return "0-"+temp;
        }
   }else{
    return "0-001";
      
   }
}
//get time

function getTime(){
    var time  = new Date();
    $('#place-time').text(time.toLocaleTimeString())
}
//disable 

function disablePlace(){
    $("#place-order-item-name").attr('disabled','disabled');
    $("#place-order-item-price").attr('disabled','disabled');
    $("#place-order-item-qty").attr('disabled','disabled');
    $("#place-order-item-buyQty").attr('disabled','disabled');
    $('#place-item-add').attr('disabled','disabled')
    $('#place-order-item-code').attr('disabled','disabled');
}

//cal sub total

function calsubTotal(){
    let diss = $("#place-disscount").val();

    var total = calTotal();

    var subTotal = total - (total*diss/100);

    return subTotal;
    
}

//purchase btn status

function checkStatusPurchase(){
    console.log($("#chooseTbl>tr").length)
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



    $('#chooseTbl>tr')
        for(var i in item){
     
            let code =   item[i].getItemCode();
            let app = `<option>${code}</option>`;
            $("#place-item-code").append(app);
        }
    // }else{

    //     var tempCode = new Array();

    //     for(var s=1;s<= $('#chooseTbl>tr').length;s++){
    //         tempCode.push($('#chooseTbl>tr').children(':eq(1)').text());
    //     }

    // }
   
//   L1:for(var s=0 ; s<= $('#chooseTbl>tr').length;s++){

//         for(var i in item){
     
//             if($(`#chooseTbl>tr:nth-child(${s})`).children(':eq(1)').text() != item[i].getItemCode())  {
//                 console.log($(`#chooseTbl>tr:nth-child(${s})`).children(':eq(1)').text())
//                 let code =   item[i].getItemCode();
//                 let app = `<option>${code}</option>`;
//                 $("#place-item-code").append(app);
//                 continue L1;
     
//            }

//         }
//     }

   

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
            $('#place-item-add').removeAttr('disabled')
          
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