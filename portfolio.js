
var docElim = document.documentElement,
    mainImg = document.querySelector('.main_image'),
    resumeHw = document.querySelector('.resume_h1'),
    listDate = document.querySelectorAll('.list'),
    introSub = document.querySelector('.intro_sub'),
    introH1 = introSub.querySelector('strong'),
    projectTl = document.querySelector('.project_title'),
    projectH1 = projectTl.querySelector('strong');
    
    console.log(projectH1)


window.addEventListener('scroll', function () {
    var scrollPos = docElim.scrollTop;
    if (scrollPos > 500) { 
       resumeHw.style.animationPlayState = 'running';
       for ( x = 0; x < listDate.length; x++){
       listDate[x].style.animationPlayState = 'running';
       }
      } else if(scrollPos < 400){
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
      } if (scrollPos > 1200){
        introH1.style.animationPlayState = 'running';
      } if (scrollPos > 3900){
        projectH1.style.animationPlayState = 'running';
      }
    });




   



