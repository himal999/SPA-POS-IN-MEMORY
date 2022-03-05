function place_order_detail(){
    var invoiceNo;
    var customerNic;
    var noOfItem;
    var tPrice;
    var disscount;
    var sTotal;
    var date;
    var time;

    this.setInvoiceNo = function(invoiceNo){
        this.invoiceNo = invoiceNo;
    }
    this.getInvoiceNo = function(){
        return this.invoiceNo;
    }

    this.setCustomerNic = function(customerNic){
        this.customerNic = customerNic;
    }
    this.getCustomerNic = function(){
        return this.customerNic;
    }

    this.setNoOfItem = function(noOfItem){
        this.noOfItem = noOfItem;
    }
    this.getNoOfItem = function(){
        return this.noOfItem;
    }

    this.setTPrice = function(tPrice){
        this.tPrice = tPrice;
    }
    this.getTPrice = function(){
        return this.tPrice;
    }

    this.setDisscount = function(disscount){
        this.disscount = disscount;
    }
    this.getDisscount = function(){
        return this.disscount;
    }

    this.setSTotal = function(sTotal){
        this.sTotal = sTotal;
    }
    this.getSTotal = function(){
        return this.sTotal;
    }

    this.setDate = function(date){
        this.date = date; 
    }
    this.getDate = function(){
        return this.date;
    }

    this.setTime = function(time){
        this.time = time;
    }
    this.getTime = function(){
        return this.time;
    }
}