// ---------------- COMMON ---------------
let img = ["anehihan.jpg", "chatminou.jpg", "chientoutou.jpg", "lamacrachat.jpg", "lapinscrottes.jpg", "lionnegraou.jpg", "oursbaby.jpg", "anehihan.jpg", "chatminou.jpg", "chientoutou.jpg", "lamacrachat.jpg", "lapinscrottes.jpg", "lionnegraou.jpg", "oursbaby.jpg"];

// ----------------------------------- RASCIA

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

img.sort(() => 0.5 - Math.random());

// For each item in the cardsArray array...
img.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = img.indexOf(item);


    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(images/${item})`;

    // Append the div to the grid section
    grid.appendChild(card);
});


let count = 0;
let firstGuess = '';
let secondGuess = '';

const match = () => {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
}

grid.addEventListener('click', function(event) {
    //...
    if (count < 2) {
        count++;
        let clicked = event.target;
        if (count == 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        } else {
            // Assign second guess
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
        // If both guesses are not empty...
        if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
                // run the match function
                match();
            }
        }
    }
});



// END---------------- RASCIA ---------------------



// ------------------- DRAGAN ---------------------
// let divs = document.querySelectorAll("div img");
// let random = 0;

// let rand = () => {
//     random = Math.floor(Math.random() * img.length);
// }


// let distribute = () => {
//     for (let j = 0; j < divs.length; j++) {
//         rand();
//         divs[j].src = "./images/" + img[random];
//         img.splice(random, 1);
//     }
// }

// let onclick = () => {
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].addEventListener("click", function() {
//             if (divs[i].style.opacity = "0") {
//                 divs[i].style.opacity = "1";
//             } else if (divs[i].style.opacity = "1") {
//                 divs[i].style.opacity = "0";
//             }


//         })

//     }

// }



// distribute();
// onclick();