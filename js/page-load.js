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

//reload base on page load
window.addEventListener('load',()=> {
    const preloader = document.querySelector('.loading');
    preloader.classList.add('load-finish');
});