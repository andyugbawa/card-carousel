const cards = [...document.querySelectorAll('.cards')];

const prevBtn =[...document.querySelectorAll('#prevBtn')];
const nextBtn =[...document.querySelectorAll('#nextBtn')];

cards.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })
    prevBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})
