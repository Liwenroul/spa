var $timerButton=(function(){
    var $btn=$('<input class="timer-button" type="button" disabled>');
    var timer;
    var cfg={
        container:'body',
        num:6,
        title:'同意',
        onClick:function(){
            console.log("a")
        }
    }
    // var $btn=$("#btn");
    // console.log($btn);

    // $(".timer-button").css({
    //     height:"50px",
    //     width: "100px"
    // })
    function show(conf){
        // 1.DOM绘制
        $(cfg.container).append($btn);
        $.extend(cfg,conf);//扩展

        $btn.val(cfg.title+"("+cfg.num+"s)")
        // 2.事件绑定
        timer=setInterval(function(){
            cfg.num--
            if(cfg.num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }
            else{
                $btn.val(cfg.title+'（'+cfg.num+'s)');
            }
        },1000);
    
        $btn.click(function(){
            cfg.onClick();
        });
    }

    return {
        show:show
    }
}());

// 不用page load event

// 封装成对象，有几种方案
// 1.全局对象(简单对象自变量，不完全是面向对象，不能包括私有方法)
// var timerBtn={
//     show:function()
// }

// 2.工厂函数(一个函数，其返回值是一个简单对象)*****
// var timerBtn=(function(){
//     return{
//         show:function () {}
//     }
// }())

// 3.构造函数
// function TimerBtn(){

// }
// vat tb=new TimerBtn();