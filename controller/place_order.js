$("document").ready(function(){
   cleaerFieldsPlaceOrder();
   disablePlace();
   
})

$("#place-order").click(function(){
    loadItemCodeFormItem();
    getCustomer();
    $("#place-invoice").text(invoiceNumber());
  

})

//cancel btn

$("#place-btn-cancel").click(function(){
    cleaerFieldsPlaceOrder();
    disablePlace();
    $('#chooseTbl>tr').remove();
})

//btn search
$('#search').on('keyup',function(){
    var value = $(this).val().toLowerCase();
    $('#chooseTbl>tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
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

//PURCHASE ITEM BTN

$('#place-btn-purchase').click(function(){

   var p = new Place_order();
   
   p.setInvoiceNo($('#place-invoice').text());

   var buyItem = new Array();
   var buyQty = new Array();

   
   for(var i=1;i<=$("#chooseTbl>tr").length;i++){
       buyItem.push($(`#chooseTbl>tr:nth-child(${i})`).children(':eq(1)').text());
       buyQty.push($(`#chooseTbl>tr:nth-child(${i})`).children(':eq(4)').text());

      for(var k in item){
          
        if($(`#chooseTbl>tr:nth-child(${i})`).children(':eq(1)').text() == item[k].getItemCode()){
            item[k].setItemQty(item[k].getItemQty()-$(`#chooseTbl>tr:nth-child(${i})`).children(':eq(4)').text())
        }
      }

   }
   p.setItemCode(buyItem);
   p.setOrderQty(buyQty);

   order.push(p)

       var pd = new place_order_detail();

       pd.setInvoiceNo(p.getInvoiceNo());
       pd.setCustomerNic($("#place-order-cust-name").val());
       pd.setNoOfItem($("#place-item").val())
       pd.setTPrice($("#place-t-price").val())
       pd.setDisscount($('#place-disscount').val())
       pd.setSTotal($('#place-s-total').val());
       pd.setDate(getDate());
       pd.setTime($("#place-time").text());

       order_detail.push(pd)


       
 
      alert("order Place Success !!!")

      $("#place-invoice").text(invoiceNumber());


      cleaerFieldsPlaceOrder();
      disablePlace()
      $('#chooseTbl>tr').remove();




  
})










//extra methods



//get Date

function getDate(){
    var date = new Date()
     return date.toLocaleDateString()
}
//load customer

function getCustomer(){
    $("#place-cust-id>option").remove();

    for(var i  in customer){
        
        let cust = `<option>${customer[i].getCustomerNic()}</option>`;
        $('#place-cust-id').append(cust);
    }

    $("#place-cust-id>option").click(function(){
        loadCustomerDetails($(this).text());
        
    })
}

//load customer details

function loadCustomerDetails(){
    console.log(arguments[0])
    for(var i in customer){
        if(arguments[0] == customer[i].getCustomerNic()){
            $("#place-order-cust-name").val(customer[i].getCustomerName())
        }
    }

}

//genareate invoice number

function invoiceNumber(){
   if(order.length > 0){
        let temp = order[order.length-1].getInvoiceNo();
       
        temp+=1;
        if(temp<9){
            return temp;
        }else if(temp<99){
            return temp;
        }else{
            return temp;
        }
   }else{
    return 1;
      
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

    $("#place-order-cust-name").val("")
    $('#place-item').val("");
    $('#place-t-price').val("");
    $('#place-disscount').val("");
    $('#place-s-total').val("");
    $('#place-item').val("");

}