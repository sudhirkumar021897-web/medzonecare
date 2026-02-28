// Preloader
window.addEventListener("load", function(){
    document.getElementById("preloader").style.display = "none";
});

// Scroll header effect
window.addEventListener("scroll", function(){
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// Counter animation
const counters = document.querySelectorAll(".counter h3");
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 100;
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// FAQ toggle
document.querySelectorAll(".faq-item").forEach(item=>{
    item.addEventListener("click", ()=>{
        const answer = item.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});