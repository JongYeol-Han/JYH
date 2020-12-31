
let docElim = document.documentElement,
    mainImg = document.querySelector('.main_image'),
    resumeHw = document.querySelector('.resume_h1'),
    listDate = document.querySelectorAll('.list'),
    introSub = document.querySelector('.intro_sub'),
    introH1 = introSub.querySelector('strong'),
    projectTl = document.querySelector('.project_title'),
    projectH1 = projectTl.querySelector('strong'),
    nav = document.querySelector('.nav_list');
    



if(matchMedia('screen and (max-width:768px)').matches){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;
     if (scrollPos > 250) { 
       resumeHw.style.animationPlayState = 'running';
       } if(scrollPos > 750){
        for ( x = 0; x < listDate.length; x++){
          listDate[x].style.animationPlayState = 'running';
      }} else if(scrollPos < 850){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > 1300){
        introH1.style.animationPlayState = 'running';
      } if (scrollPos > 2600){
        projectH1.style.animationPlayState = 'running';
      }
    });


} else if(matchMedia('sreen and(max-width:1028px)'.matches)){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;
    if(scrollPos > 0){
      nav.style.top = '0';
    } else if(scrollPos == 0){
      nav.style.top = '-10%';
    } if (scrollPos > 600) { 
       resumeHw.style.animationPlayState = 'running';
       for ( x = 0; x < listDate.length; x++){
       listDate[x].style.animationPlayState = 'running';
       }
      } else if(scrollPos < 450){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > 1300){
        introH1.style.animationPlayState = 'running';
      } if (scrollPos > 3850){
        projectH1.style.animationPlayState = 'running';
      }
    });

}


   



