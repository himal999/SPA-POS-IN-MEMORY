function Item(){
    var __itemCode;
    var __itemName;
    var __itemQty;
    var __itemPrice;

    this.getItemCode = function(){
        return this.__itemCode;
    }
    this.setItemCode = function(itemCode){
        this.__itemCode = itemCode;
    }
    this.getItemName = function(){
        return this.__itemName;
    }
    this.setItemName = function(itemName){
        this.__itemName = itemName;
    }
    this.getItemQty = function(){
        return this.__itemQty;
    }
    this.setItemQty = function(itemQty){
        this.__itemQty = itemQty;
    }
    this.getItemPrice = function(){
        return this.__itemPrice;
    }
    this.setItemPrice = function(itemPrice){
        this.__itemPrice = itemPrice;
    }
}