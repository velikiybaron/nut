$(document).ready(function (){
  $('.menu-burger').click(function () {
    $('.menu-burger, .phone, .sign, .header-body-2, .menu-list, .head-1').toggleClass('active');
  })
  $('.slider-fruit').owlCarousel({
    items:1,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  })
  $('.slider-2').owlCarousel({
    items:1,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  })
  $('.tab-slider').owlCarousel({
    items:5,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
      320:{
        items:1,
      },
      575:{
        items:1,
      },
      767:{
        items:1,
      },
      991:{
        items:1,
      },
      1199:{
        items:5,
      },
    }
  })
  $(function () {
    
    class tabs {
        constructor(argument){
            $(argument).find('.tab-slider').not('.active').hide();
            $(argument).find('.tab-item').click(function () {
                $(argument).find('.tab-item').removeClass('active').eq($(this).index()).addClass('active');
                $(argument).find('.tab-slider').hide().eq($(this).index()).slideDown(200)
            });
            
        }
    }
    
    var wrap = $('.pro-con');
    for(let i of wrap){
        i = new tabs(i);
    }
    
    
    
})
  $(function () {
    
    class tabs {
        constructor(argument){
            $(argument).find('.tab-slider1').not('.active1').hide();
            $(argument).find('.tab-item1').click(function () {
                $(argument).find('.tab-item1').removeClass('active1').eq($(this).index()).addClass('active1');
                $(argument).find('.tab-slider1').hide().eq($(this).index()).slideDown(200)
            });
            
        }
    }
    
    var wrap = $('.products2');
    for(let i of wrap){
        i = new tabs(i);
    }
    
    
    
})
})