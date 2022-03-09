function Place_order(){
    var invoiceNo;
    var itemCode;
    var orderQty;

    this.setInvoiceNo = function(invoiceNo){
        this.invoiceNo = invoiceNo;
    }

    this.getInvoiceNo = function(){
        return this.invoiceNo;
    }

    this.setItemCode = function(itemCode){
        this.itemCode = itemCode;
    }
    this.getItemCode = function(){
        return this.itemCode;
    }

    this.setOrderQty = function(orderQty){
        this.orderQty = orderQty;
    }
    this.getOrderQty = function(){
        return this.orderQty;
    }


}