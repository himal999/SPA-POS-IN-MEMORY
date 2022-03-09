function Place_order(){
    var __invoiceNo;
    var __itemCode;
    var __orderQty;

    this.setInvoiceNo = function(invoiceNo){
        this.__invoiceNo = invoiceNo;
    }

    this.getInvoiceNo = function(){
        return this.__invoiceNo;
    }

    this.setItemCode = function(itemCode){
        this.__itemCode = itemCode;
    }
    this.getItemCode = function(){
        return this.__itemCode;
    }

    this.setOrderQty = function(orderQty){
        this.__orderQty = orderQty;
    }
    this.getOrderQty = function(){
        return this.___orderQty;
    }


}