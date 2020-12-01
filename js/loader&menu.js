//wait for window load
// const loader = document.querySelector('.loading');
// const homePage = document.querySelector('.landing-page');

// function init(){
//     setTimeout(()=> {
//         loader.style.opacity=0;
//         loader.style.display='none';

//         homePage.style.display='grid';
//         setTimeout(()=>(homePage.style.opacity=1), 100);   //content fades in 
//     },2000);
// }

// init();

//FOR PAGE RELOAD
//reload based on page load
window.addEventListener('load',()=> {
    const preloader = document.querySelector('.loading');
    preloader.classList.add('load-finish');
});

//FOR MENU
var menu=document.getElementById('menu_nav');
var overlay=document.getElementById('menu_overlay');
var vidFrame = document.getElementById('vid_frame');
var playbtn = document.getElementById('play_btn');


//for national park video 
function play(){
    vidFrame.classList.add('pop_up');
    playbtn.style.display='none';

    window.addEventListener('mouseup',function(event){
        if(event.target != vidFrame){
            playbtn.style.display="inline";
            vidFrame.classList.remove('pop_up');
        }
    });  
}

//show menu content on menuclick
//and add styling class

function show(){
    menu.style.display='block';
    menu.classList.add('menu_content');
    overlay.style.display='block';
    // container.style.opacity = 0.5;
    // endangered.style.opacity = 0.5;
    // menu.style.opacity=1;

    /*hide menu content onselection or outside click
    */
    window.addEventListener('mouseup',function(event){
        if(event.target != menu){
            menu.style.display="none";
            menu.classList.remove('menu_content');
            overlay.style.display='none';
        }
    });  
}

