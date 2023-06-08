const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav_menu")
hamburger.addEventListener("click", ()=>{
    navmenu.classList.toggle("is-active")
})


const arrowbutns = document.querySelectorAll(".clickbtn button") 
arrowbutns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        console.log(btn.id)
    })
})