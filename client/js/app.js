let slctSubOne = document.querySelector('.subscribe-one');
let slctVectorBtn = document.querySelector('.button-content');
let slctBtnHover = document.querySelector('.button-hover');

slctSubOne.addEventListener('mouseover', () => {

    slctVectorBtn.classList.add('active-button-vector')

} )

console.log(slctBtnHover.getAttribute('class'))

slctSubOne.addEventListener('mouseout', () => {

    if(slctBtnHover.getAttribute('class') === 'button-hover'){

        setTimeout(() => { slctVectorBtn.classList.remove('active-button-vector') }, 5000);

    }

})

slctBtnHover.addEventListener('mouseover', () => {

    slctBtnHover.classList.add('hover');

}); 

slctBtnHover.addEventListener('mouseout', () => {

    slctBtnHover.classList.remove('hover');
 

})