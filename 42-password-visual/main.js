var $pwdVis=(function () {
    var html='密码：<input id="pwd" type="password" autofocus>'+
    '<div id="eye"></div>'+
    '<input id="pwd-text"></input>';
    

    function show(container) {
        $(container).html(html);
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

    }

    return{
        show:show
    }
    
    
}())