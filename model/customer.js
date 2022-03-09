function Customer(){
    var __custNic;
    var __custName;
    var __custAddress;
    var __custSalary;

    this.setCustomerNic= function(custNic){
        this.__custNic = custNic
    }

    this.getCustomerNic = function(){
        return this.__custNic;
    }

    this.setCustomerName = function(custName){
        this.__custName = custName;
    }
    this.getCustomerName = function(){
        return this.__custName;
    }

    this.setCustomerAddress  = function(custAddress){
        this.__custAddress = custAddress;
    }
    this.getCustomerAddress = function(){
        return this.__custAddress;
    }

    this.setCustomerSalary = function(custSalary){
        this.__custSalary = custSalary;
    }
    this.getCustomerSalary = function(){
        return this.__custSalary;
    }
}