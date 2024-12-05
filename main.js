// Project: Message Generator
// Description: Generates random phrases by combining pronouns, objects, and predicates.
const randomPhrase = {
    pronouns: [
        //Personal pronouns
        [
            // Space after to avoid word concatenation
            "You ",
            "He ",
            "She ",
            "They ",
            "It "
        ],
        //Possessive pronouns
        [
            "My ",
            "Your ",
            "her ",
            "his ",
            "their "
        ]
    ],
    predicates: [
        // General predicates (can be used with any pronoun)
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
        // Objects (used only with possessive pronouns)
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
    // Randomly select the pronoun type (0 for personal, 1 for possessive)
    const randomPronounType = Math.floor(Math.random() * randomPhrase.pronouns.length);
    // Randomly select a pronoun within the chosen type
    const randomPronoun = randomPhrase.pronouns[randomPronounType][Math.floor(Math.random() * randomPhrase.pronouns[randomPronounType].length)];


    let predicate = "";

    if (randomPronounType === 1) { // if Possessive pronoun cause it is in first index then
        // Select the object and for more fun ...>
        const randomObject = randomPhrase.predicates[1][Math.floor(Math.random() * randomPhrase.predicates[1].length)];
        // Select a random predicate to follow the object
        const randomPredicate = randomPhrase.predicates[0][Math.floor(Math.random() * randomPhrase.predicates[0].length)];
        // Combine the object and predicate
        predicate = randomObject + randomPredicate;


    } else { // if Personal pronoun, no object needed the ramdom just in the simple predicate
        predicate = randomPhrase.predicates[0][Math.floor(Math.random() * randomPhrase.predicates[0].length)];

    }
    // Return the complete phrase
    return randomPronoun + predicate;
}
// Example usage:
console.log(generateRandomPhrase());
console.log(generateRandomPhrase()); 
