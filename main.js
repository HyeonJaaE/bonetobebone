(()=>{
    var imgElements = document.querySelectorAll(".img-container");
    var textElements = document.querySelectorAll(".txt-container");
    var curElement = textElements[0];

    imgElements.forEach( (i, idx) => {
        i.setAttribute("data-index", idx)
    });

    textElements.forEach( (t, idx) => {
        t.setAttribute("data-index", idx)
    });

    
    window.addEventListener("scroll", () => {
        imgElements.forEach((t) => {
            let loc = t.getBoundingClientRect().top;
            if(loc > window.innerHeight * 0.1 && loc < window.innerHeight * 0.8){
                console.log(loc);
                if(curElement) {
                    curElement.classList.remove("visible");
                }
                curElement = textElements[t.getAttribute("data-index")];
                curElement.classList.add("visible");
            }
        })
    })
    
    
})()



