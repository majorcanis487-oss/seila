const letters = document.querySelectorAll(".letter")
const text = document.getElementById("text")
const musica = document.getElementById("musica")

window.addEventListener("load", () => {
    if (musica) {
        musica.volume = 0.4
        const playPromise = musica.play()

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                document.addEventListener("click", () => {
                    musica.play()
                }, { once: true })
            })
        }
    }
})

setTimeout(()=>{
    text.style.display="block"
},4000)

setTimeout(()=>{
    if(letters[0]) letters[0].classList.add("fade")
    if(letters[1]) letters[1].classList.add("fade")
},8000)

setTimeout(()=>{
    if(letters[2]) letters[2].classList.add("fade")
    if(letters[3]) letters[3].classList.add("fade")
},9500)

setTimeout(()=>{
    if(letters[5]) letters[5].innerHTML = "❤️"
},11000)

setTimeout(()=>{
    if(letters[4]) letters[4].classList.add("fade")
    if(letters[6]) letters[6].classList.add("fade")
},12500)

setTimeout(()=>{
    text.innerHTML = "<span class='heart'>❤️</span>"
},14500)