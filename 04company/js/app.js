new WOW().init();
$(document).ready(function(){
   var mySlider = $('.slider').bxSlider({
      auto:false,
      pager:false,
      controls:false
   }); 

    // 슬릭
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


    // $(window).on('load resize', function() {
	// 	if($(window).width() > 701) {
	// 		slider.slick('unslick');
	// 	}else{
	// 		slider.not('.slick-initialized').slick(slickOptions);
	// 	}
	// });
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



//    토글메뉴

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





    // 메인메뉴
    
    // $(".mainmenu > li").click(function(){
    //     let t = $(this).index();            
    //     $(".submenu").hide().eq(t).show();
    //     $(".submenu").css("background","#fff");
    //     $(".submenu > li > a").css("color","#313131");
        
    // });



//         $(".mainmenu > li").click(function(){
//         let t = $(this).index();       
//         $(".submenu").slideUp();
//         $(this).find(".submenu").slideDown();
//         $(".submenu").css("background","#fff").find("a").css("color","#313131");
//    });

// $(".mainmenu > li").find("a").click(function(e){
//     e.preventDefault();
// });

   


    // 푸터


    $(".family > button").click(function(){
        let t = $(this).index();            
        $(".familySub").hide().eq(t).show();      
        
        
    });
   


    // 뉴스

    $(".news>div").click(function(){
        let t = $(this).index();
       
      $(".newsImg>div").hide().eq(t).show();
    });




    // $(window).resize(function() { 
    //     if($(window).width() < 701) {
    //         $(".news>div").find("a").click(function(){
    //             let t = $(this).index();
    //             $(".m_news").hide();  
    //      $(this).find('.m_news').show();
            
    //      });    
            
    //         }
        
    //     });




    // 포항쇼룸 모달


    $(".modal").colorbox({rel:"modal"});
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:1024,
        innerHeight:576
    });



    // 탑버튼

    const topPos = $(".top").offset().top;

    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();       
       
        if(topPos < scrollY + window.innerHeight/2){
            $(".top").addClass("view");
        }else{
            $(".top").removeClass("view");
        }
    });
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });    
 



    // 서브페이지 탭


    let num = location.href.indexOf("=") + 1;  // 번호찾기
    let string = location.href.substring(num);  //문자열자르
    console.log(string);

     if( location.href.indexOf("=") > 0 ){
        view(string);
     }else{
        view(0)
     }

     function view(menu){
           $(".subpageMenu li").removeClass("active").eq(menu).addClass("active");
           $(".subpage>div").hide().eq(menu).show();
     }
     $(".subpageMenu li").click(function(){
        var menu = $(this).index();
        view(menu);
     });





     $('.subpageMenu > li').click(function(){

        
        let t = $(this).index();
        var offset = $('.prosubpage > div').eq(t).offset();    

        $('html').animate({scrollTop : offset.top - 100}, 400);

    });




   
    
});