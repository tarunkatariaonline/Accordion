const accordianBox = document.querySelectorAll(".accordian-box")


accordianBox.forEach((accordian)=>{
    const accordianIcon = accordian.querySelector('.accordian-icon')
    const accordianContant = accordian.querySelector(".accordian-contant")
    accordian.addEventListener("click",()=>{
        accordianIcon.classList.toggle("active-icon")
        accordianContant.classList.toggle("active-contant")
    })
    
})