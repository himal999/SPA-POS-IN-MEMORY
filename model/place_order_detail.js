function place_order_detail(){
    var __invoiceNo;
    var __customerNic;
    var __noOfItem;
    var __tPrice;
    var __disscount;
    var __sTotal;
    var __date;
    var __time;

    this.setInvoiceNo = function(invoiceNo){
        this.__invoiceNo = invoiceNo;
    }
    this.getInvoiceNo = function(){
        return this.__invoiceNo;
    }

    this.setCustomerNic = function(customerNic){
        this.__customerNic = customerNic;
    }
    this.getCustomerNic = function(){
        return this.__customerNic;
    }

    this.setNoOfItem = function(noOfItem){
        this.__noOfItem = noOfItem;
    }
    this.getNoOfItem = function(){
        return this.__noOfItem;
    }

    this.setTPrice = function(tPrice){
        this.__tPrice = tPrice;
    }
    this.getTPrice = function(){
        return this.__tPrice;
    }

    this.setDisscount = function(disscount){
        this.__disscount = disscount;
    }
    this.getDisscount = function(){
        return this.__disscount;
    }

    this.setSTotal = function(sTotal){
        this.__sTotal = sTotal;
    }
    this.getSTotal = function(){
        return this.__sTotal;
    }

    this.setDate = function(date){
        this.__date = date; 
    }
    this.getDate = function(){
        return this.__date;
    }

    this.setTime = function(time){
        this.__time = time;
    }
    this.getTime = function(){
        return this.__time;
    }
}