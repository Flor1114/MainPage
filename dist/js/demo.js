/**
 * demo.js
 * https://coidea.website
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, COIDEA
 * https://coidea.website
 */

 $('.slideshow').imagesLoaded({ background: true })
 .done( function() {
   // hide loader
   $('.loader').addClass('is-loaded');
   
   // init variables
   var slideshow = $(".slideshow"),
     navigation = $(".navigationC"),
     navigationItem = $(".navigationC-item"),
     detailItem = $(".detail-item"),
     rotation,
     translate ="(0,0)",
     type = '_short';
   
   // prepare letters
   // $('.headline').each(function() {
   //   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
   // });

   // prepare navigation and set navigation items on the right place
   navigationItem.each(function(index, elem) {
     TweenMax.set(elem, {
       left: navigation.width() / 2 - navigationItem.width() / 2 - 10,
       rotation: 276 + (index * 360 / navigationItem.length),
       transformOrigin: "100% " + navigation.width() / 2 + "px"
     });
     TweenMax.set($(elem).find('.rotate-holder'), {
       text: String(index * 360 / navigationItem.length)
     });
     TweenMax.set($(elem).find('.background-holder'), {
       rotation: -276 - (index * 360 / navigationItem.length),
       x:0,
       y:0
     });
   });
   
   // set tween values
   function setTweenValues() {
     rotation = Number($(this).find('.rotate-holder').text());
   }

   // do tween
   function doTween(target) {
     $('#cur_slide').val(Number($(target).children(".rotate-holder").text()));

     var targetIndex = navigationItem.index(target),
       timeline = new TimelineMax();

     // add/remove class "active" from navigation & detail
     navigationItem.each(function() {
       $(this).removeClass('activeC');
       if ($(this).index() == $(target).index()) {
         $(this).addClass('activeC');
       }
     });
     detailItem.each(function() {
       $(this).removeClass('activeC');
       if ($(this).index() == $(target).index()) {
         $(this).addClass('activeC');
       }
     });

     timeline
       .to(navigation, 0.6, {
         rotation: -rotation + type,
         transformOrigin: "50% 50%",
         ease: Sine.easeInOut
       })
       .staggerTo(navigationItem.find('.background-holder'), 0.6, {
         cycle: {
           //function that returns a value
           rotation: function(index, element) {
             return -276 - Number($(element).prev('.rotate-holder').text()) + rotation +translate+ type;
           }
         },
         transformOrigin: "50% 50%",
         ease: Sine.easeInOut,
       }, 0, '-=0.6')
       .staggerFromTo($('.activeC').find('.letter'), 0.3, {
         autoAlpha: 0,
         x: -100,
       },
       {
         autoAlpha: 1,
         x: 0,
         ease: Sine.easeInOut,
       }, 0.025, '-=0.3')
       .fromTo($('.activeC').find('.background'), 0.9, {
         autoAlpha: 0,
         x: -100,
       },
       {
         autoAlpha: 1,
         x: 0,
         ease: Sine.easeInOut,
       }, 0.05, '+=0.3');
   }

   // click/hover on items
   navigationItem.on('mouseenter', setTweenValues);
   navigationItem.on('click', function() { doTween($(this)); })

   // on load show slideshow as well as first "active" navigation/detail item
   TweenMax.to(slideshow, 1, { autoAlpha: 1 });
   TweenMax.to($('.activeC').find('.letter'), 0.7, { autoAlpha: 1, x: 0 });
   TweenMax.to($('.activeC').find('.background'), 0.7, { autoAlpha: 1, x: 0 });

     

 });

 // fast fix for resize window and refresh view, attention: not use in production, only for demo purposes!
 (function () {
 //顺时针 
 var per_slide = Number(360 / $(".navigationC-item").length);  

   $('.up').click(function(){
     var cur_slide = Number($('#cur_slide').val());
     if (cur_slide == 0) {
       
       var click_slide = 320;
     } else {
       var click_slide = cur_slide - per_slide;
     }

     //console.log(click_slide)
     $(".navigationC-item").each(function(index, elem) {
       if(Number($(elem).find('.rotate-holder').text()) === click_slide) {
         
         $('#cur_slide').val(Number($(".navigationC-item").eq(index).find('.rotate-holder').text()));
         $(this).trigger('mouseenter');
         $(this).trigger('click');
       }
     })
   }) 
   $('.down').click(function(){
     var cur_slide = Number($('#cur_slide').val());
     if (cur_slide == 320) {
       var click_slide = 0;
     } else {
       var click_slide = cur_slide + per_slide;
     }
     // console.log(click_slide)
     $(".navigationC-item").each(function(index, elem) {
       if(Number($(elem).find('.rotate-holder').text()) === click_slide) {
         $('#cur_slide').val(Number($(".navigationC-item").eq(index).find('.rotate-holder').text()));
         $(this).trigger('mouseenter');
         $(this).trigger('click');
       }
     })
   }) 
     
 var width = window.innerWidth;

 window.addEventListener('resize', function () {
   if (window.innerWidth !== width) {
     window.location.reload(true);
   }
 });
 })();