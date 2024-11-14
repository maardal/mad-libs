// Default values
let adjectiveOne = "crisp";
let adjecitveTwo = "excited";
let adjectiveThree = "adventurous";
let adjectiveFour = "curious";
let adjectiveFive = "ghostly";
let adjectiveSix = "unschated";
let verbOne = "spook";
let verbTwo = "jump";
let verbThree = "gathered";
let groupOne = "teenagers";
let groupTwo = "grandmothers";
let animal = "animal";
let time = "23";
let quote = "Life may look creepy sometimes, but how we face it is what makes it fun";
let message = "Life is a carnival — thrilling, strange, and full of joy if you choose to embrace the ride";

// Retrieving user sent words.
const words = new URLSearchParams(window.location.search);

for (const [key, value] of words) {
  console.log(key + " " + value);
}

adjectiveOne = words.get("adj-1") != undefined ? words.get("adj-1") : adjectiveOne;
adjecitveTwo = words.get("adj-2") != undefined ? words.get("adj-2") : adjecitveTwo;
adjectiveThree = words.get("adj-3") != undefined ? words.get("adj-3") : adjectiveThree;
adjectiveFour = words.get("adj-4") != undefined ? words.get("adj-4") : adjectiveFour;
adjectiveFive = words.get("adj-5") != undefined ? words.get("adj-5") : adjectiveFive;
adjectiveSix = words.get("adj-6") != undefined ? words.get("adj-6") : adjectiveSix;

verbOne = words.get("ver-1") != undefined ? words.get("ver-1") : verbOne;
verbTwo = words.get("ver-2") != undefined ? words.get("ver-2") : verbTwo;
verbThree = words.get("ver-3") != undefined ? words.get("ver-3") : verbThree;

groupOne = words.get("grp-1") != undefined ? words.get("grp-1") : groupOne;
groupTwo = words.get("grp-2") != undefined ? words.get("grp-2") : groupTwo;
animal = words.get("ani-1") != undefined ? words.get("ani-1") : animal;

time = words.get("tim-1") != undefined ? words.get("tim-1") : time;

quote = words.get("quote") != undefined ? words.get("quote") : quote;
message = words.get("message") != undefined ? words.get("message") : message;

let fullStory = `One ${adjectiveOne} Halloween night, three groups of unlikely friends — ${adjecitveTwo} ${groupOne}, ${adjectiveThree} ${groupTwo}, and a family with a ${adjectiveFour} ${animal} — entered a mysterious carnival. They decided to brave the Haunted House, where ${adjectiveFive} suprises waited. Through the house, ghosts would ${verbOne} and spectres would ${verbTwo} infront of them, for what felt like ${time} minutes. They got through ${adjectiveSix}. At the end of the night, they ${verbThree} under a sky lit with fireworks. One of the ${groupTwo} screamed, ${quote}. Moral of the story is: ${message}.`;

document.getElementById("full-story").innerHTML = fullStory;
