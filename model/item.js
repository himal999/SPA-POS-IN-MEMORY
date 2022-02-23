function Item(){
    var itemCode;
    var itemName;
    var itemQty;
    var itemPrice;

    this.getItemCode = function(){
        return this.itemCode;
    }
    this.setItemCode = function(itemCode){
        this.itemCode = itemCode;
    }
    this.getItemName = function(){
        return this.itemName;
    }
    this.setItemName = function(itemName){
        this.itemName = itemName;
    }
    this.getItemQty = function(){
        return this.itemQty;
    }
    this.setItemQty = function(itemQty){
        this.itemQty = itemQty;
    }
    this.getItemPrice = function(){
        return this.itemPrice;
    }
    this.setItemPrice = function(itemPrice){
        this.itemPrice = itemPrice;
    }
}