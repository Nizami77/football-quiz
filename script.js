const ui = {
    player: document.querySelector("#player"),
    CardContent: document.querySelector("#CardContent"),
    resault: document.querySelector("#resault"),
    reload: document.querySelector("#reload")
}

const defaultPhoto = "/card.png"
let SelectIndex = ""
let shuffleItems = []

const items = [
    {
        photo: "https://i.pinimg.com/736x/d5/c2/85/d5c285048e8e646177f5a3aa546974f8.jpg",
        name: "Ronado"
    },
    {
        photo: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        name: "Messi"
    },
    {
        photo: "https://www.aljazeera.com/wp-content/uploads/2022/12/SOR0634.jpg?resize=1800%2C1800",
        name: "Modric"
    },
    {
        photo: "https://www.sportphotogallery.com/content/images/cmsfiles/product/18461/18461-list.jpg",
        name: "Ibrahimovic"
    },
    {
        photo: "https://www.sporting-heroes.net/content/thumbnails/00210/20871-zoom.jpg",
        name: "Di Canio"
    },
    {
        photo: "https://cdn.img.anlatilaninotesi.com.tr/img/07e7/0a/15/1076591108_529:0:2577:2048_1920x0_80_0_0_cd5e6b4c6e7402af0ca66240de78f5a2.jpg",
        name: "Icardi"
    }
]

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

const randomIndex = () => {
    return Math.floor(Math.random() * 6)
}

const SelectPlayer = () => {
    return items[SelectIndex]
}

const cardTemplate = (index) => {
    
    return `<div data-index="${index}" class="border border-2 rounded-lg overflow-hidden cursor-pointer animate__animated">
        <img class="size-full object-cover" src="./card.png" alt="">
    </div>`
}

const createUI = () => {
    ui.CardContent.innerHTML = "";
    SelectIndex = randomIndex()
    shuffleItems = shuffle(items)

const player = SelectPlayer()
ui.player.textContent = player.name

    for (let index in shuffleItems) {
        ui.CardContent.innerHTML += cardTemplate(index)
    }
}

const disableCard =() => {
    for (let el of ui.CardContent.children) {
        el.style.pointerEvents = "none"
        
    }
}

ui.CardContent.addEventListener("click",function (e) {
    const object = e.target.closest('[data-index]') ? e.target.closest('[data-index]') :e.target

    if (object.dataset.index) {
        const index = object.dataset.index
        const photo = object.querySelector("img")
        const player = shuffleItems[index]
        photo.src = player.photo
        object.classList.add("animate__flipInY")
        if (parseInt(index) === SelectIndex) {
            ui.resault.textContent = "Təbriklər!"
            resault.style.color = "green"
            disableCard()
            reload.style.display ="inline-block"
        }
        else {
            ui.resault.textContent = "Yalnış kart! Basqasını seç"
            resault.style.color = "red"
        }
    }
})
ui.reload.addEventListener("click", function (e) {
    window.location.reload()
})

createUI()
