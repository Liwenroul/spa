$(function() {
    var $pro=$("#pro"),
        $start=$("#start"),
        $pause=$("#pause"),
        $set=$("#set"),
        timer,
        i=0;

    $start.click(function(){
        i=0;
        timer=setInterval(function(){
           $pro.attr("value",i++); 
        },100)
    });
    $pause.click(function(){
        clearInterval(timer);
    })
    $set.click(function(){
        $pro.attr("value",0);
    })
})