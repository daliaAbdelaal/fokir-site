//change navbar background when scroll
var homeOffest=$('#home').offset().top;
$(window).scroll(function(){
        let topOffset=$(window).scrollTop();
     
        if(topOffset>homeOffest)
        {
                $('.navbar').css({'background-color':'#333','transition':'.4s all','box-shadow': '0 13px 8px -10px #0000001a'});
           
    
        }else
        {
                $('.navbar').css({'background-color':'transparent','box-shadow':'none'});
            
          

        }
})
//active navbar
$('.navbar-nav li a').click(function () {
        $('.navbar-nav').find(".active").removeClass("active");
        $(this).parent().addClass("active");
    })

//scroll mothing
    $('.navbar .nav-link').click(function(){
        let currentLink=$(this).attr('href');
        let currentOffset=$(currentLink).offset().top;
        $('body,html').animate({scrollTop:currentOffset},500)
})

//loading page untill document ready
$(document).ready(function(){
        $('.load').fadeOut(1000,function(){
                $('body').css('overflow','visible')
        })
})