let wordArray = [
{ word: "Lemon", hint: "A yellow citrus fruit often used in cooking and beverages." },
{ word: "Puzzle", hint: "A game or toy designed to test ingenuity or knowledge." },
{ word: "Tiger", hint: "A large carnivorous feline animal with a distinctive orange coat and black stripes." },
{ word: "Banana", hint: "A long curved fruit with a yellow skin and soft sweet flesh." },
{ word: "Elephant", hint: "A large mammal with a long trunk, large ears, and tusks." },
{ word: "Ocean", hint: "A vast body of saltwater that covers most of the Earth's surface." },
{ word: "Castle", hint: "A large fortified building or group of buildings with thick walls and towers." },
{ word: "Guitar", hint: "A stringed musical instrument with a long neck and typically six strings." },
{ word: "Rainbow", hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky." },
{ word: "Sunshine", hint: "The direct rays of the sun." },
{ word: "Chocolate", hint: "A sweet, brown food made from roasted and ground cacao seeds." },
{ word: "Universe", hint: "All existing matter and space considered as a whole." },
{ word: "Dragon", hint: "A mythical creature like a giant reptile or serpent, often represented as breathing fire and having wings and a long tail." },
{ word: "Pizza", hint: "A dish of Italian origin consisting of a flat, round base of dough baked with toppings such as tomato sauce, cheese, and various other ingredients." },
{ word: "Butterfly", hint: "An insect with two pairs of large wings that are covered with tiny scales, typically brightly colored and patterned." },
{ word: "Mountain", hint: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill." },
{ word: "Telescope", hint: "An optical instrument designed to make distant objects appear nearer, containing an arrangement of lenses, or of curved mirrors and lenses, by which rays of light are collected and focused and the resulting image magnified." },
{ word: "Waterfall", hint: "A cascade of water falling from a height, formed when a river or stream flows over a precipice or steep incline." },
{ word: "Adventure", hint: "An unusual and exciting, typically hazardous, experience or activity." },
{ word: "Galaxy", hint: "A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction." },
{ word: "Lemonade", hint: "A drink made from lemon juice, water, and sugar." },
{ word: "Friendship", hint: "A relationship of mutual affection between people." },
{ word: "Moonlight", hint: "The light of the moon." },
{ word: "Fireworks", hint: "A device containing gunpowder and other combustible chemicals that causes a spectacular explosion when ignited, used typically for display or in celebrations." },
{ word: "Paradise", hint: "An ideal or idyllic place or state." },
{ word: "Journey", hint: "An act of traveling from one place to another." },
{ word: "Treasure", hint: "A quantity of precious metals, gems, or other valuable objects." },
{ word: "Penguin", hint: "A flightless seabird of the southern hemisphere, known for its upright stance, flippers, and black and white plumage." },
{ word: "Volcano", hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust." },
{ word: "Starlight", hint: "The light emitted by stars." },
{ word: "Carnival", hint: "A period of public revelry at a regular time each year, typically during the week before Lent in Roman Catholic countries, involving processions, music, dancing, and the use of masquerade." },
{ word: "Dolphin", hint: "A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back." },
{ word: "Wonderland", hint: "An imaginary land of wonders or marvels." },
{ word: "Icecream", hint: "A sweet flavored frozen food containing cream and sugar and often fruit or chocolate." },
{ word: "Freedom", hint: "The power or right to act, speak, or think as one wants without hindrance or restraint." },
{ word: "Sunflower", hint: "A tall North American plant of the daisy family, with very large golden-rayed flowers. Sunflowers are cultivated for their edible seeds, which are an important source of oil for cooking and margarine." },
];

let score = 0;

function initializeGame() {
    let random = Math.floor(Math.random() * wordArray.length);
    let now = wordArray[random].word;
    let nowHint = wordArray[random].hint;
    let now2 = now.split("");

    // shuffling word
    for (let i = now2.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [now2[i], now2[j]] = [now2[j], now2[i]];
    }
    now2 = now2.join("");

    // updating the value of h1 and hint
    document.getElementById('word').innerText = now2;
    document.getElementById('hint').innerText = "Hint: " + nowHint;
    return now;
}

let currentWord = initializeGame();

let button = document.getElementById("check");
let refreshWord = document.getElementById("refresh");
let user = document.getElementById("user");

button.addEventListener("click", checking);

// check word by enter press key
user.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checking();
    }
});

// Function for checking
function checking() {
    let userValue = user.value; 
    if (userValue.toLowerCase() === currentWord.toLowerCase()) {
        Swal.fire({
            title: "Good job!",
            text: "You Guess The Word",
            icon: "success"
          });
        score++;
        document.getElementById('score').innerText = "Score: " + score;
        currentWord = initializeGame(); 
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Word",
            footer: `<p>The Correct Word is ${currentWord} </p>`
          });
        currentWord = initializeGame(); 
        score = 0
    }
    user.value = ""; 
}

// Refresh function
refreshWord.addEventListener("click", () => {
    Swal.fire({
        title: "Do you want to refresh the word?",
        showDenyButton: true,
        confirmButtonText: "Refresh",
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Refreshed!", "", "success");
        }
      });
      currentWord = initializeGame(); 
});