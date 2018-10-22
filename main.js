let divs = document.querySelectorAll("div img");
let img = ["anehihan.jpg", "chatminou.jpg", "chientoutou.jpg", "lamacrachat.jpg", "lapinscrottes.jpg", "lionnegraou.jpg", "oursbaby.jpg", "anehihan.jpg", "chatminou.jpg", "chientoutou.jpg", "lamacrachat.jpg", "lapinscrottes.jpg", "lionnegraou.jpg", "oursbaby.jpg"];
let random = 0;

let rand = () => {
    random = Math.floor(Math.random() * img.length);    
}

let distribute = () => {
        for (let j = 0; j < divs.length; j++) {            
            rand();           
            divs[j].src = "./images/" + img[random];
            img.splice(random, 1);        
            }       
}

let onclick = () => {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            if (divs[i].style.opacity = "0") {
                divs[i].style.opacity = "1";
            }
            else if (divs[i].style.opacity = "1")  {
                divs[i].style.opacity = "0";
            }
           
           
        })
        
    }
    
}



distribute();
onclick();

