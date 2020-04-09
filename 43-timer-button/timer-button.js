
define(['jquery'],function($){
    function TimerButton(){
        var $btn=$('<input class="timer-button" type="button" disabled>');
        var $btn=$("#btn");
        console.log($btn);
    
        $(".timer-button").css({
            height:"50px",
            width: "100px"
        })
        this.show=function(conf){
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
        
            $btn.click(cfg.onClick);
        }
    
    }
    return TimerButton;
})
// 构造函数

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