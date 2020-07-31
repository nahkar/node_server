let spanImg = document.querySelector(".spanImg")
let divInp = document.querySelector(".divInp")
let spanP = document.querySelector(".spanP")
spanImg.addEventListener("click", () => {
    if(divInp.style.display != "none"){
        divInp.style.display = "none";
        spanP.innerHTML = "Открыть"
    }else {
        divInp.style.display = "block"
        spanP.innerHTML = "Скрыть"
    }
})