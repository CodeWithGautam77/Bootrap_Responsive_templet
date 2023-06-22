const menu = document.getElementById("menu")
const header = document.getElementById("header")

menu.addEventListener("click", () =>{
    if(header.classList.contains("d-none")){
        header.classList.remove("d-none")
    }else{
        header.classList.contains("d-none")
    }
})
