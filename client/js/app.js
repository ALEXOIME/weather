let slctSubOne = document.querySelector('.subscribe-one');
let slctVectorBtn = document.querySelector('.button-content');
let slctBtnHover = document.querySelector('.button-hover');
let slctSubTwo = document.querySelector('.subscribe-two');
let slctSubThree = document.querySelector('.subscribe-three');

slctSubOne.addEventListener('mouseover', () => {

    slctVectorBtn.classList.add('active-button-vector')

} )

slctSubThree.addEventListener('mouseover', () => {

    console.log(slctSubThree.getAttribute('class'));

    if( slctSubThree.getAttribute('class') === 'subscribe-three addTwo default' ){

        slctVectorBtn.classList.add('active-button-vector');

    }

})

console.log(slctBtnHover.getAttribute('class'))

slctSubOne.addEventListener('mouseout', () => {

    if(slctBtnHover.getAttribute('class') === 'button-hover'){

        setTimeout(() => { slctVectorBtn.classList.remove('active-button-vector') }, 5000);

    }

})

slctVectorBtn.addEventListener('mouseover', () => {

    slctVectorBtn.classList.add('hover');


}); 

slctVectorBtn.addEventListener('mouseout', () => {

    slctVectorBtn.classList.remove('hover');

})

slctVectorBtn.addEventListener('click', () => {

    slctVectorBtn.classList.add('click-active');
    slctSubTwo.classList.add('add');
    slctSubThree.classList.add('addTwo')



})

slctSubThree.addEventListener('click', () => {

    slctSubOne.classList.remove('addThree')
    slctSubOne.classList.remove('default')
    slctSubTwo.classList.remove('add');
    slctSubThree.classList.add('default');

    setTimeout(() => { slctVectorBtn.classList.remove('click-active'); slctVectorBtn.classList.remove('active-button-vector') }, 1000)

})