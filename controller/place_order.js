$("document").ready(function(){
    loadItemCode();
    disable();
})





//extra methods

//load item code

function loadItemCode(){
    for(var i in item){
      let code =   item[i].getItemCode();
      let app = `<option>${code}</option>`;
      $("#place-item-code").append(app);
    }
}

 function disable(){
   
    $("#place-order-item-name").attr("disabled","disabled");
    $("#place-order-item-price").attr("disabled","disabled");
    $("#place-order-item-qty").attr("disabled","disabled");
    $("#place-order-item-buyQty").attr("disabled","disabled");
    $("#place-order-cust-name").attr("disabled","disabled");
    $("#place-item").attr("disabled","disabled");
    $("#place-t-price").attr("disabled","disabled");
    $("#place-disscount").attr("disabled","disabled");
    $("#place-s-total").attr("disabled","disabled");
    $("#place-btn-purchase").attr("disabled","disabled");
    $("#place-btn-cancel").attr("disabled","disabled");
 
}