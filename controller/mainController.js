$('document').ready(function(){
    $("#index-page").css("display","block")
    $("#item-page").css("display","none")
    $("#customer-page").css("display","none")
    $("#place-order").css("display","none")
  
})

$('#home').click(function(){
    $("#index-page").css("display","block")
    $("#item-page").css("display","none")
    $("#customer-page").css("display","none")
    $("#place-order").css("display","none")
})

$('#item').click(function(){
    $("#index-page").css("display","none")
    $("#item-page").css("display","block")
    $("#customer-page").css("display","none")
    $("#place-order").css("display","none")
})
$('#customer').click(function(){
    $("#index-page").css("display","none")
    $("#item-page").css("display","none")
    $("#customer-page").css("display","block")
    $("#place-order").css("display","none")
})
$('#order').click(function(){
    $("#index-page").css("display","none")
    $("#item-page").css("display","none")
    $("#customer-page").css("display","none")
    $("#place-order").css("display","flex")
})