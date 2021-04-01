
        $(function() {
            $('.candlessprite').click(function() {
                

            $('.candlessprite').toggleClass('candles')

        });
        });

      
        $(function() {
            $('.ferenc').hover(function() {
            $('.ferenc').toggleClass('brightness')
            });

            $('.ferenc').click(function() {
            $('.music').css({
                'opacity': '1'
                });
                $('.brightness').css({'filter': 'brightness(100%)'})
            });
            });

        $(function() {
     $('.note1').click(function() {
     $('.prenote1img').toggleClass('note1img')  
     })
     });

        $(function() {
     $('.note2').click(function() {
     $('.prenote2img').toggleClass('note2img')  
     })
     });

        $(function() {
     $('.note3').click(function() {
     $('.prenote3img').toggleClass('note3img')  
     })
     });




        $(function() {
    $('.salvador').click(function() {
    $('.clock').css('opacity', '1');
    $('.salvador').removeClass('brightness')
   })
});



$(function() {
    $('.julesverne').click(function() {
    $('.presubmarine').css({
        'opacity': '1',
        'top': '-84px',
        'right': '290px',
        'animation': 'submarine 1s infinite ease',
        'animation-direction': 'alternate'
                   });  
                   $('.julesverne').removeClass('brightness')
   });
});

$(function() {
    $('.edison').click(function() {
    $('.lightbulb').css({
        'opacity': '1',
             });
        $('.edison').removeClass('brightness')
   });
});

$(function() {
    $('.mary').click(function() {
        
    $('body').css({
        'cursor': 'url("images/cursormary.png"), auto ' 

    });

    
    $('.flasksprite').addClass('flaskspriteimg')

   });
   
   $('.flasksprite').click(function() {
       $('body').css({
           'cursor': 'default'
       });
       $('.radiy').css({
           'opacity':'1'
       })
   });

   $('.close').click(function() {
    $('.radiy').css({
           'opacity':'0'
       })
   })
});


$(document).ready(function() {
 
    let clock = $("#clock");
    
    console.log(clock);
    
    for (let i = 0; i < clock.length; i++) {
        console.log('Clockpath '+i+' is '+clock[i].length)
    }
});
