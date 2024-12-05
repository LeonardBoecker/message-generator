//Project message generator
/*as it required to be ramdom phrase
first step was to discover how phrases are made
second give some shots 
then make it random 
then run it to test
*/
const randomPhrase = {
    pronouns: [
        //index one refers to personal pronouns
        [
            //Some space after the pronouns
            "You ",
            "He ",
            "She ",
            "They ",
            "It "
        ],
        //index 2 refers to possessive pronouns
        [
            "My ",
            "Your ",
            "her ",
            "his ",
            "their "
        ]
    ],
    predicates: [
        // some predicates that I wanted to used 
        [
            "will get that.",
            "got to be kidding me.",
            "needs to make the difference.",
            "knows what needs to be done.",
            "needs to be washed.",
            "is amazing!",
            "runs fast.",
            "is really impressive.",
            "make the good out of people, keep so.",
            "make it right."
        ],
        //starting with objects to make things different
        [
            "bike ",
            "handgrip ",
            "balance ",
            "teeth ",
            "cloth ",
            "keyboard ",
            "bottle of watter "
        ]

    ]
};

function generateRandomPhrase() {
    /*first ramdom describe which index will be 
    because I have one for possessive and other for
    personal pronouns and if I want to add more in future
    will be possible becaause the first ramdom bellow*/
    const randomPronounType = Math.floor(Math.random() * randomPhrase.pronouns.length);
    /*once Ive finished the pronous chosen I now need which pronoun use
    then I randomize the chosen one before and set it in randomPronoun*/
    const randomPronoun = randomPhrase.pronouns[randomPronounType][Math.floor(Math.random() * randomPhrase.pronouns[randomPronounType].length)];


    let predicate = "";

    if (randomPronounType === 1) { // if Possessive pronoun cause it is in first index then
        // Select the object and for more fun ...>
        const randomObject = randomPhrase.predicates[1][Math.floor(Math.random() * randomPhrase.predicates[1].length)];
        // ramdom the normal predicate after the object like his bike make it right
        const randomPredicate = randomPhrase.predicates[0][Math.floor(Math.random() * randomPhrase.predicates[0].length)];
        // here bellow I have the concatenation of object with predicate
        predicate = randomObject + randomPredicate;


    } else { // if Personal pronoun, no object needed the ramdom just in the simple predicate
        predicate = randomPhrase.predicates[0][Math.floor(Math.random() * randomPhrase.predicates[0].length)];

    }
    //by the end I finihs with both concatenation pronoun and predicate
    return randomPronoun + predicate;
}

console.log(generateRandomPhrase()); // Example usage
console.log(generateRandomPhrase()); // Another example usage
