new WOW().init();
$(document).ready(function(){
   var mySlider = $('.slider').bxSlider({
      auto:false,
      pager:false,
      controls:false
   }); 

    var section = $('.slickSlider');

    var slickOptions = {
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        arrows:true
    };

    $(window).on('load resize', function() {
        if($(window).width() < 701) {
            section.not('.slick-initialized').slick(slickOptions);
        }else{
            
            section.slick('unslick');
        }
    });
//    $('.slickSlider').slick({
//         lazyLoad: 'ondemand',
//         slidesToShow: 4,
//         slidesToScroll: 4
//         });


   const headPos = $("header").offset().top;
//    const navPos = $(".nav").offset().top;
   

   $(window).scroll(function(){
       let scrollY = $(window).scrollTop();

       if(0 < scrollY){
            $("header").addClass("headS");
       }else{
           $("header").removeClass("headS");
       }
                   
   });
   $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");

    if(toggle == "toggleMenu"){
        $(".toggleMenu").addClass("change");
        
        $(".nav").stop().animate({top:0});

    }else{
        $(".toggleMenu").removeClass("change");
        
        $(".nav").stop().animate({top:"-100%"});
    }
    });
    
    $(".mainmenu > li").click(function(){
        let t = $(this).index();            
        $(".submenu").hide().eq(t).show();
        $(".submenu").css("background","#fff");
        $(".submenu > li > a").css("color","#313131");
        
    });
    $(".news > div").click(function(){
        let t = $(this).index();            
        $(".newsImg").hide().eq(t).show();
       
        
    });
    $(".family > li").click(function(){
        let t = $(this).index();            
        $(".familySub").hide().eq(t).show();
        
        
        
    });
    $(".mainmenu > li").find("a").click(function(e){
        e.preventDefault();
    });


    $(".news>div").click(function(){
        let t = $(this).index();
        console.log(t);
      $(".newsImg>div").hide().eq(t).show();
    

    });


    $(".modal").colorbox({rel:"modal"});
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:1024,
        innerHeight:576
    });

 
    
});