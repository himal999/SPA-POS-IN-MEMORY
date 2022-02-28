function Customer(){
    var custNic;
    var custName;
    var custAddress;
    var custSalary;

    this.setCustomerNic= function(custNic){
        this.custNic = custNic
    }

    this.getCustomer = function(){
        return this.custNic;
    }

    this.setCustomerName = function(custName){
        this.custName = custName;
    }
    this.getCustomerName = function(){
        return this.custName;
    }

    this.setCustomerAddress  = function(custAddress){
        this.custAddress = custAddress;
    }
    this.getCustomerAddress = function(){
        return this.custAddress;
    }

    this.setCustomerSalary = function(custSalary){
        this.custSalary = custSalary;
    }
    this.getCustomerSalary = function(){
        return custAddress;
    }
}