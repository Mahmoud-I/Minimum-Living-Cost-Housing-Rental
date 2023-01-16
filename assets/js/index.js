//Initial values
let dropdownBtn = document.querySelector(".dropdown-btn")
let dropdownContent = document.querySelector(".dropdown-content")

dropdownBtn.addEventListener("click", function(){
    dropdownContent.classList.toggle("selected")
})