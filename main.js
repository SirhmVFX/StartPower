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
    rvCont.scrollTop += bts.id === "up" ? -rvwidth : rvwidth
})
})