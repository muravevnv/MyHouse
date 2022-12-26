const complexItemGallery = new Swiper('.complex-item__gallery', {
    sliesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}) 

const complexGallery = new Swiper('.complex-slider', {
    sliesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}) 


let tabs = document.querySelectorAll('.complex__tab');
let tabsContent = document.querySelectorAll('.complex-tab-content');

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(){
        hideTabs();
        this.classList.add('active');
        tabsContent[i].classList.add('active')
    })
}

const hideTabs = function(){
    tabsContent.forEach(item => item.classList.remove('active'))
    tabs.forEach(tab => tab.classList.remove('active'))
}


let select = document.querySelectorAll('.js-select');

select.forEach(function(elem){
    const choices = new Choices(elem,{

    })
})


let filtersHidden = document.querySelectorAll('.filter-item--hidden');
let showFiltersBtn = document.querySelector('.filter__btn-show');

let filtersBlock = document.querySelector('.filter-inner');
console.log(filtersBlock)

showFiltersBtn.addEventListener('click', function(){
    if(!filtersBlock.classList.contains('opened')) {
        filtersBlock.classList.add('opened')
        filtersHidden.forEach((e)=>{
            e.style.display = 'block';
        })
        this.innerText = 'Скрыть параметры'
    } else {
        filtersBlock.classList.remove('opened');
        filtersHidden.forEach((e)=>{
            e.style.display = 'none';
        })
        this.innerText = 'Больше параметров'
    }

})