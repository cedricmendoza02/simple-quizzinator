/*
<type> : {
    instructions: "",
    questions: [
    {}
    ]
}
*/

const questions = {
    synonyms: {
        instructions: "Select the word that matches the meaning of the underlined word",
        questions: [
            {
                q: "I <u>stare</u> in the mirror for ten seconds.",
                correctAns: 1,
                answer: -1,
                answers: ["took", "look", "cook"]
            },
            {
                q: "My little sister has an <u>adorable</u> face.",
                correctAns: 2,
                answer: -1,
                answers: ["pretty", "puffy", "cute"]
            },
            {
                q: "A baby has <u>tiny</u> fingers.",
                correctAns: 2,
                answer: -1,
                answers: ["big", "huge", "small"]
            },
            {
                q: "My clothes look very <u>neat</u>",
                correctAns: 2,
                answer: -1,
                answers: ["clean", "messy", "tidy"]
            },
            {
                q: "I wear a <u>beautiful</u> dress",
                correctAns: 2,
                answer: -1,
                answers: ["amazing", "messy", "pretty"]
            }
        ],
        score: 0
    },
    vowels: {
        instructions: "Select if letter is Consonant or Vowel",
        questions: [
            {
                q: "Cc",
                correctAns: 0,
                answer: -1,
                answers: ["C", "V"]
            },
            {
                q: "Oo",
                correctAns: 1,
                answer: -1,
                answers: ["C", "V"]
            },
            {
                q: "Aa",
                correctAns: 1,
                answer: -1,
                answers: ["C", "V"]
            },
            {
                q: "Bb",
                correctAns: 0,
                answer: -1,
                answers: ["C", "V"]
            },
            {
                q: "U",
                correctAns: 1,
                answer: -1,
                answers: ["C", "V"]
            }
        ],
        score: 0
    },
    "nouns_person" : {
        instructions: "Select the correct noun",
        questions: [
            {
                q: "Mommy Alyssa",
                correctAns: 1,
                answer: -1,
                answers: ["Father", "Mother", "Aunt"]
            },
            {
                q: "Daddy Cedric",
                correctAns: 0,
                answer: -1,
                answers: ["Father", "Mother", "Lolo"]
            },
            {
                q: "Clarence",
                correctAns: 2,
                answer: -1,
                answers: ["Grandfather", "Mother", "Brother"]
            },
            {
                q: "Lolo Marlon",
                correctAns: 0,
                answer: -1,
                answers: ["Grandfather", "Grandmother", "Uncle"]
            },
            {
                q: "Lola Emily",
                correctAns: 1,
                answer: -1,
                answers: ["Grandfather", "Grandmother", "Aunt"]
            }
        ],
        score: 0
    },
    "nouns_places" : {
        instructions: "Select the correct noun",
        questions: [
            {
                q: "RMEN Kindergarten",
                correctAns: 2,
                answer: -1,
                answers: ["House", "Playground", "School"]
            },
            {
                q: "Alfamart",
                correctAns: 0,
                answer: -1,
                answers: ["Store", "House", "Playground"]
            },
            {
                q: "Basketball Court",
                correctAns: 2,
                answer: -1,
                answers: ["Store", "House", "Playground"]
            },
            
        ],
        score: 0
    },
    "grammar_quiz_comparatives": {
        instructions: "Complete these sixteen sentences to score your knowledge of Comparative Grammar.",
        questions: [
            {
                q: "Australia is big, but Canada is ... Australia.",
                correctAns: 2,
                answer: -1,
                answers: ["big", "bigger", "bigger than"]
            },
            {
                q: "David is 185cm tall. He is ... Andrew",
                correctAns: 0,
                answer: -1,
                answers: ["taller than", "tall", "taller"]
            },
            {
                q: "I think that summer is ... than winter",
                correctAns: 1,
                answer: -1,
                answers: ["good", "better", "the best"]
            },
            {
                q: "My brother thinks this restaurant is ... than that restaurant",
                correctAns: 2,
                answer: -1,
                answers: ["more worse", "badder", "worse"]
            },
            {
                q: "Do you think math and science ... history and English",
                correctAns: 0,
                answer: -1,
                answers: ["is more difficult than", "are more difficult than", "difficulter"]
            },
            {
                q: "In my opinion, this pink dress is ... that green dress",
                correctAns: 1,
                answer: -1,
                answers: ["prettyer than", "prettier than", "more pretty"]
            },
            {
                q: "Reading a book with a nice, hot cup of tea ... than doing exercise.",
                correctAns: 1,
                answer: -1,
                answers: ["is the most relaxing", "is more relaxing", "more relaxing"]
            },
            {
                q: "Taking a taxi to work ... than taking a bus to work",
                correctAns: 2,
                answer: -1,
                answers: ["expensive than", "more expensive than", "is more expensive than"]
            },
            {
                q: "Saturdays ... Mondays because I don't have to go to school.",
                correctAns: 0,
                answer: -1,
                answers: ["are nicer than", "is nicer than", "are the nicest"]
            },
            {
                q: "Question number 15 was ... Question number 14. Right?",
                correctAns: 1,
                answer: -1,
                answers: ["the easyer", "easier than", "easyer than"]
            },
        ],
        score: 0
    },
    "comparative": {
        instructions: "Select the correct comparative form",
        questions: [
            {
                q: "Easy",
                correctAns: 1,
                answer: -1,
                answers: ["easyer", "easier", "easiest"]
            },
            {
                q: "Pretty",
                correctAns: 1,
                answer: -1,
                answers: ["Prettyer", "Prettier", "Prettiest"]
            },
            {
                q: "Sturdy",
                correctAns: 2,
                answer: -1,
                answers: ["Sturdiest", "Sturdyer", "Sturdier"]
            },
        ],
        score:0
    },
    "grammar_quiz_participle_adjectives": {
        instructions: "Complete sentences to score your knowledge of Participle Adjectives.",
        questions: [
            {
                q: "I'm never late for lass because it's ... when everyone looks at me.",
                correctAns: 1,
                answer: -1,
                answers: ["embarassed", "embarassing"]
            },
            {
                q: "The chocolate cake on the table is really ... Should I eat it?",
                correctAns: 1,
                answer: -1,
                answers: ["tempted", "tempting"]
            },
        ],
        score:0
    },
    "comparatives_superlatives": {
        instructions: "Complete the sentences below.",
        questions: [
            {
                q: "Mount Everest is ... mountain in the world",
                correctAns: 1,
                answer: -1,
                answers: ["taller", "taller than", "the tallest"]
            },
            {
                q: "Are cats ... dogs? What do you think?",
                correctAns: 0,
                answer: -1,
                answers: ["more intelligent than", "intelligent than", "the most intelligent"]
            },
            {
                q: "Who was ... person that ever lived? How can we find out?",
                correctAns: 0,
                answer: -1,
                answers: ["the oldest", "older than", "older"]
            },
            {
                q: "I think that Alicia ... student in our class",
                correctAns: 1,
                answer: -1,
                answers: ["the smartest", "is the smartest", "is smarter"]
            },
            {
                q: "Blue whales ... animals that have ever lived.",
                correctAns: 2,
                answer: -1,
                answers: ["is larger than", "is the largest", "are the largest"]
            },
        ],
        score:0
    },
    "present_perfect_for_and_since": {
        instructions: "Complete the sentences below.",
        questions: [
            {
                q: "I haven't had a holiday ... last summer",
                correctAns: 1,
                answer: -1,
                answers: ["for", "since"]
            },
            {
                q: "Dinosaurs have been extinct ... millions of years.",
                correctAns: 0,
                answer: -1,
                answers: ["for", "since"]
            },
            {
                q: "I've had grave digger ... a couple of months now",
                correctAns: 0,
                answer: -1,
                answers: ["for", "since"]
            },
            {
                q: "I've had grave digger ... August",
                correctAns: 1,
                answer: -1,
                answers: ["for", "since"]
            },
        ],
        score:0
    },
    "comprehension": {
        instructions: 
                `   Read the following passage and answer the questions.
                    <br />
                    <br />
                    There was a mother tiger and her small tiger cub.
                    They lived near a river in a shady jungle.
                    When the sky was dark, the mother tiger hunted deer and pig.
                    One night the tiger cub saw a tiny frog.
                    The cub chased the frog and caught it and turned to show his mother.
                    But the mother was not there instead he saw a big tiger.
                `,
        questions: [
            {
                q: "Where did the mother tiger and her small tiger cub live",
                correctAns: 1,
                answer: -1,
                answers: ["hut", "jungle", "house", "tree"]
            },
            {
                q: "What does the mother tiger hunt",
                correctAns: 0,
                answer: -1,
                answers: ["pig and deer", "pig and frog", "deer and frog", "frog and tiger"]
            },
            {
                q: "When does the mother tiger hunt",
                correctAns: 1,
                answer: -1,
                answers: ["In day time", "In the dark", "morning", "afternoon"]
            },
            {
                q: "What does the cub tiger catch",
                correctAns: 3,
                answer: -1,
                answers: ["tiger", "deer", "pig", "frog"]
            },
            {
                q: "What did the tiger cub see one day",
                correctAns: 0,
                answer: -1,
                answers: ["tiger", "deer", "pig", "frog"]
            },
            
        ],
        score:0
    },
    "comprehension2": {
        instructions: 
                `   Read the following passage and answer the questions.
                    <br />
                    <br />
                    Seema is Renu's best friend.
                    She is getting ready to go to Renu's birthday party in the evening.
                    She bought a big book of stories as a birthday gift for Renu.
                    Seema wants to wrap it in pink paper.
                    She knows that pink is Renu's favourite colour.
                    But she can't find pink paper. Seema is sad.
                    Seeing Seema so sad, her mother asked her to wrap the gift in her pink scarf.
                    Seema was thrilled and happy again.
                `,
        questions: [
            {
                q: "What gift did Seema buy for Renu",
                correctAns: 2,
                answer: -1,
                answers: ["Drawing book", "Story book", "Craft book", "Poetry book"]
            },
            {
                q: "Select the correct opposite gender for the word Father",
                correctAns: 2,
                answer: -1,
                answers: ["Sister", "Uncle", "Mother", "Brother"]
            },
            {
                q: "Renu's favourite colour is <u>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp .</u>",
                correctAns: 1,
                answer: -1,
                answers: ["red", "pink", "yellow", "blue"]
            }
        ],
        score:0
    },
    "opposites": {
        instructions: 
                "Select the opposites of the words",
        questions: [
            {
                q: "Sad",
                correctAns: 0,
                answer: -1,
                answers: ["Happy", "Excited", "Scared"]
            },
            {
                q: "Black",
                correctAns: 1,
                answer: -1,
                answers: ["Yellow", "White", "Pink"]
            },
            {
                q: "Big",
                correctAns: 1,
                answer: -1,
                answers: ["Tall", "Small", "Large"]
            },
            {
                q: "Neat",
                correctAns: 0,
                answer: -1,
                answers: ["Messy", "Clean", "Large"]
            },
        ],
        score:0
    },

}

let card = document.querySelector(".cardContainer");
let main = document.querySelector("main");

// let current = questions.synonyms;
let questionTypes = Object.keys(questions)

for(let x = 0; x < questionTypes.length; x++) {
    let currentQuestionType = questionTypes[x];
    let current = questions[currentQuestionType].questions; // Get the questions properties of the questions types object
    let section = document.createElement("h2");
    let instructions = document.createElement("p");
    let checkBtn = document.createElement("button");
    let result = document.createElement("h2");
        
    // Add answer check and count
    checkBtn.innerText = "Check";
    checkBtn.setAttribute("id", `check${x}`)
    checkBtn.addEventListener("click", (e) => {
        // get a reference to the section property from the questions object
        let curQuestion = questions[currentQuestionType].questions;
        let items = document.querySelectorAll(`p[class*=${currentQuestionType}]`);
        let incorrectAnswersIndex = [];
        questions[currentQuestionType].score = 0;
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove("incorrect")
        }

        // loop through the questions on the parent section
        for(let i = 0; i < curQuestion.length; i++) {
            let checkAns = curQuestion[i].answer == curQuestion[i].correctAns;
            if(checkAns) {
                questions[currentQuestionType].score += 1
            } else {
                incorrectAnswersIndex.push(i);
            }
        }

        for(let i = 0; i < incorrectAnswersIndex.length; i++) {
            let incorrectItems = document.querySelector(`.${currentQuestionType}${incorrectAnswersIndex[i]}`)
            incorrectItems.classList.add("incorrect")
        }
        
        result.innerHTML = `${questions[currentQuestionType].score}/${curQuestion.length}`;

    })

    section.innerHTML = currentQuestionType.toUpperCase();
    instructions.innerHTML = questions[questionTypes[x]].instructions;
    
    main.appendChild(section);
    main.appendChild(instructions);
    for(let i = 0; i < current.length; i++) { // loop through the questions property
        let cardContainer = document.createElement("div");
        let question = document.createElement("p");
        let answersContainer = document.createElement("div");
        
        answersContainer.classList.add("answersContainer");
        // Set the question to the question container with a numbered prefix
        question.setAttribute("class", `${currentQuestionType}${i}`);
        question.innerHTML = (i+1) + ". " + current[i].q;
        // Set classNames for all cards to cardContainer
        cardContainer.className = "cardContainer";
        // Finally, append the question to the card
        cardContainer.appendChild(question);
    
        let answers = current[i].answers;

        for(let j = 0; j < answers.length; j++) { // loop for answers in the questions object
            let answer = document.createElement("input");
            let label = document.createElement("label");
            let answerStr =  `${currentQuestionType}${i}${j}`; // Include the line item number to isolate the input group
            
            label.htmlFor = answerStr;
            
            // Creates the actual input element
            answer.setAttribute("type", "radio");
            answer.setAttribute("id", answerStr);
            answer.setAttribute("name", `${currentQuestionType}${i}`);
            answer.setAttribute("value", answers[j]);
            answer.setAttribute("data-index", j);
            answer.addEventListener("change", e => {
                let index = e.target.dataset.index;
                current[i].answer = Number(index);
                console.log(current[i]);
            })
    
            label.appendChild(answer)
            label.append(answers[j]);
            
            answersContainer.appendChild(label);
            cardContainer.appendChild(answersContainer);
            cardContainer.appendChild(result);
        }
        
        main.appendChild(cardContainer);
        main.appendChild(checkBtn);
    }
}

