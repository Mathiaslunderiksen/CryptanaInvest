const burger = document.querySelector(".burger-btn");
const navUL = document.querySelector(".nav-ul");
const bars = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {
    navUL.classList.toggle("show");

    bars.forEach(element => {
	element.classList.toggle("active");
    element.classList.toggle("white");
});
});

navUL.addEventListener("click", () => {
    navUL.classList.remove("show");
    
    bars.forEach(element => {
        element.classList.remove("active");
        element.classList.toggle("white");
    });
});





/* let btnNext = document.querySelector(".next"); */
let slide = document.querySelector(".slider-slide");
let imageText = document.querySelector(".slider-text");

let currentImageIndex = 0;

let images = [
    "../assets/slider01.jpg",
    "../assets/slider02.jpg",
    "../assets/slider03.jpg"
];

let imageTextArray = [
    `<div>
    <h1 class="slider-text-heading">Download Vores App</h1>
    <p class="slider-text-txt">Følg kurser på dine investeringer</p>
    <p class="slider-text-txt">Hold styr på din portfolio</p>
    </div>`,
    `<div><h1 class="slider-text-heading">Kontakt Din Expert</h1><p class="slider-text-txt">Cryptana Invest har døgnservice. Følg dine investeringer, </p><p class="slider-text-txt"> og få råd fra vores eksperter når det passer dig.</p>
    <p class="slider-text-txt">Hold kursen klar med Cryptana Invest</p>
    </div>`,
    `<div><h1 class="slider-text-heading">Invester i Din Fremtid</h1><p class="slider-text-txt">Brug en sikker samarbejdspartner. Hold styr på din portfolio.</p><br>
    <p class="slider-text-txt">Vælg en sikker kurs med Cryptana Invest</p>
    </div>`


];

const setActiveSlide = (index) => {
    slide.src = images[index];
    slide.alt = "Product index " + index;
    imageText.innerHTML = imageTextArray[index];
};

setActiveSlide(currentImageIndex);

const next = () => {
    if(currentImageIndex >= images.length - 1){
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    setActiveSlide(currentImageIndex);
}

setInterval(next, 7000);
