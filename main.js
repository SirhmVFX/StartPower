const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav_menu")
hamburger.addEventListener("click", ()=>{
    navmenu.classList.toggle("is-active")
})


const arrowbutns = document.querySelectorAll(".clickbtn button") 
const categories = document.querySelector(".categories_list")
const firstcardwidth = categories.querySelector(".categories").offsetWidth;
arrowbutns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        categories.scrollLeft += btn.id === "left" ? -firstcardwidth : firstcardwidth
    })
})

const bttnn = document.querySelectorAll(".rv__btn button")
const rvCont = document.querySelector(".review_container")
const rvwidth = rvCont.querySelector(".review_cont").offsetWidth;
bttnn.forEach(bts => {
    bts.addEventListener("click", ()=>{
    rvCont.scrollTop += bts.id === "up" ? -rvwidth : rvwidth;
})
})



// RESERVE
const next1 = document.getElementById("next1")
const reswidth = document.querySelector(".page")
const form = document.getElementById("form")

const prev1 = document.getElementById("prev1")
const next2 = document.getElementById("next2")

const prev2 = document.getElementById("prev2")
const next3 = document.getElementById("next2")

const submit = document.getElementById("submit")



next1.addEventListener("click", function() {
    reswidth.style.marginLeft = "-25%"
})

prev1.addEventListener("click", function() {
    reswidth.style.marginLeft = "0%"
})

next2.addEventListener("click", function() {
    reswidth.style.marginLeft = "-50%"
})

prev2.addEventListener("click", function() {
    reswidth.style.marginLeft = "-25%"
})

submit.addEventListener("click", function() {
    reswidth.style.marginLeft = "-75%"
})