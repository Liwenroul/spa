$(function () {
    var $pwd=$("#pwd");
    var $eye=$("#eye");
    var $text=$("#pwd-text");

    $eye.mouseover(function(){
        $eye.css("z-index","10");
        $eye.css("background-color","pink");
    })
    $eye.mouseout(function(){
        // $eye.css("z-index","-10");
        $eye.css("background-color","red");
    })
    $pwd.on("input",function () {
        $text.val($pwd.val())
    })
})