requirejs.config({
    'path':{
        'jquery':'apps.bdimg.com/libs/require.js/2.1.11/require.min.js'
    }
})
repuire(['jquery'],function($){
    $(function(){
        $btnAdd.click(function () {
            require (['timer-button.js'],function(TimerButton){
                var tb=new TimerButton();
                tb.show({num:6,title:'同意',onClick:function(){
                    alter("就知道你会同意");
                }});
            })
        })
    })
})
