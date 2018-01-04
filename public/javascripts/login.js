
$(document).ready(function(){
  var  $v01  = $('.vertical0'),
  		 $v02  = $('.vertical1'),
  		 $v03  = $('.vertical2'),
  		 $login= $('.modal'),
  		 speed = 60,
  		 tl = new TimelineLite({onComplete:restart});

  		tl.fromTo($v01,speed*2,{y:-0} ,{y:-3000} ,'sync')
  		  .fromTo($v02,speed*1.95,{y:-1500} ,{y:-4500},'sync')
  			.fromTo($v03,speed*2,{y:-3000},{y:-6000},'sync')
  			.fromTo($login,1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1, ease:Elastic.easeInOut},'sync');

  		tl.play();

      function restart(){
        tl.stop();
        tl.restart();
      }
});
