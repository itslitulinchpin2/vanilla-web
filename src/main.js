//헤더 아래로 스크롤시 헤더에 다크 스타일링 적용

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);

    if(window.scrollY>headerHeight){
        header.classList.add('header--dark');
    } else {
       header.classList.remove('header--dark'); 
    }
    
})

//home section 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

//어차피 add이벤트리스너이므로, 따로 로직 처리해주는게 낫다
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
    console.log(home.style.opacity);
})


//home section scroll 정도에 따라 arrow를 생겼다 말았다
const arrow = document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
    if (window.scrollY/homeHeight <= 0.5){
        arrow.style.opacity=0;
    } else {
        arrow.style.opacity=1;
    }

})