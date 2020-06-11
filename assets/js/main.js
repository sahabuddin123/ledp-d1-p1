$('.carousel').carousel({
  interval: 5000
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
     autoplay: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});