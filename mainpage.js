
let divs = document.querySelectorAll('.color'),
    docElem = document.documentElement,
    docHeight = docElem.offsetHeight,
    resumeSec = document.querySelector('.Resume_Section'),
    introSec = document.querySelector('.Introduce_Section'),
    PortSec = document.querySelector('.Portfolio_Section'),
    Bar = document.querySelectorAll('.color');


    window.addEventListener('scroll', function(){
        var scrollPos = docElem.scrollTop;
            if (scrollPos > 300) {
                resumeSec.style.opacity= '1';
            }else if(scrollPos < 300){
                resumeSec.style.opacity= '0';
            };
            if (scrollPos > 950) {
                introSec.style.opacity= '1';
            }else if(scrollPos < 1500){
                introSec.style.opacity= '0';
            };
            if (scrollPos > 1500) {
                PortSec.style.opacity= '1';
            }else if(scrollPos < 4000){
                PortSec.style.opacity= '0';
            };
            if(scrollPos < 320){
                function changeNum(idx){
                    let num = 0;
                    let targetNum = divs[idx].getAttribute('data-rate');
                    let timer = setInterval(function(){
                        ++num;
                        divs[idx].innerText = num;
                        if (num == targetNum){
                            clearInterval(timer);
                        }
                    }, 50);
                };                 
                /*-----function-----*/
                for(let i = 0; i < divs.length;i++){
                    changeNum(i);
                };    
            };
            
    });

    