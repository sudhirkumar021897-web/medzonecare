// Mobile Menu
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

if(toggle){
toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});
}

// Scroll Reveal Cards
const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
card.classList.add("show");
}
});
});

// Counter
const counters=document.querySelectorAll(".stats h3");

counters.forEach(counter=>{
counter.innerText="0";
const update=()=>{
const target=+counter.getAttribute("data-target");
const c=+counter.innerText;
const inc=target/100;

if(c<target){
counter.innerText=Math.ceil(c+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

// FAQ
document.querySelectorAll(".faq-item").forEach(item=>{
item.addEventListener("click",()=>{
const ans=item.querySelector(".faq-answer");
ans.style.display=ans.style.display==="block"?"none":"block";
});
});

// Popup Lead Capture
setTimeout(()=>{
document.querySelector(".popup").style.display="block";
},5000);