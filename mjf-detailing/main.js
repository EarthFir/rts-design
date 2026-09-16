const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.primary-nav');toggle?.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!isOpen));nav?.classList.toggle('open',!isOpen);document.body.classList.toggle('menu-open',!isOpen)});nav?.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.classList.remove('menu-open')})});document.querySelector('#year').textContent=String(new Date().getFullYear());

const reviewSlides=[...document.querySelectorAll('.testimonial-slide')];
const reviewCurrent=document.querySelector('[data-review-current]');
let reviewIndex=0;
function showReview(index){
  if(!reviewSlides.length)return;
  reviewIndex=(index+reviewSlides.length)%reviewSlides.length;
  reviewSlides.forEach((slide,i)=>slide.classList.toggle('active',i===reviewIndex));
  if(reviewCurrent)reviewCurrent.textContent=String(reviewIndex+1).padStart(2,'0');
}
document.querySelector('[data-review-prev]')?.addEventListener('click',()=>showReview(reviewIndex-1));
document.querySelector('[data-review-next]')?.addEventListener('click',()=>showReview(reviewIndex+1));
