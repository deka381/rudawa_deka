$(document).ready(function(){

  $('.map_pic').each(function(e){
      let random_left = Math.floor(Math.random() * 100);
      let random_top = Math.floor(Math.random() * 100);
      $(this).css("left", random_left+"%");
      $(this).css("top", random_top+"%");
  });


  $('.plan-trip_btns ul li').each(function(q){
      $(this).on('click', function() {

        $('.plan-trip_btns ul li').removeClass('active_trip');
        $(this).addClass('active_trip');

        let active_trip_btn = $('.plan-trip_btns ul li.active_trip');
        let active_trip_btn_color = active_trip_btn.attr('data-color');
        let map_pic_dot = $('.map_pic');

        map_pic_dot.each(function(e){
          let map_pic_dot_color = $(this).attr('data-color');

            if (active_trip_btn_color == map_pic_dot_color){
              $(this).show();
            }else{
              $(this).hide();
            }
        });
        
      });
  });
  $('.plan-trip_btns_1').on('click',function(){
    $('.map_pic').show();
  });



//slick start


	  $( '.home-slider' ).slick({
      dots: false,
      infinite: true,
      autoplay: false,
	   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      autoplaySpeed: 4000,
      slidesToScroll: 4,
      slidesToShow: 4,
      rows:2
    });


//slick stop






});
