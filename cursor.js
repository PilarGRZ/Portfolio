'use strict'

$(document).ready(function(){
        
    $('body').on({'mousemove': function(e){
        console.clear();
       let clientX = (e.originalEvent.clientX)
       let clientY =(e.originalEvent.clientY)
        $('#cursor').css({
            'left' : (clientX -15 )+ 'px',
            'top' :  (clientY -15)+ 'px',

        });
    }})
//Cada vez que pase el cursor sobre una etiquet "a" este va a disminuir su tamaño

    $('a').on({
        'mouseover': function(){
            $('#cursor').addClass('mini');
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini');
        },
     

    })
});