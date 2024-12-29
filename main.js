/*
<type> : {
    instructions: "",
    questions: [
    {}
    ]
}
*/

let main = document.querySelector("main");

let subjects = document.querySelector("#subjects");
subjects.addEventListener("click", e => {
    let target = e.target.innerText.toLowerCase();
    selectSubject(target);
})

function selectSubject(subject) {
    renderQuestions(subject);
}

async function getData(subject) {
    let res = await fetch('https://cedricmendoza02.github.io/questionnaire_api/questionnaire.json');
    let questions = await res.json();
    return questions["grade_1"][subject]; // grade_1 only for now. Option to select other grades will be added eventually.
}

async function renderQuestions(subject) {
    main.innerHTML = "";
    /* returns questionnaires for specific subjects in form:
        {
            "subject": {
                "questionType": {
                    "instructions":"",
                    "questions": [{...}],
                    "score"
                }
            }
        }
    */
    let questions = await getData(subject); 
    let subjectTopic = Object.keys(questions);

    for(let x = 0; x < subjectTopic.length; x++) {
        let currentSubjectTopic = subjectTopic[x];
        let current = questions[currentSubjectTopic].questions; // Get the questions properties of the questions types object
        let section = document.createElement("h2");
        let instructions = document.createElement("p");
        let checkBtn = document.createElement("button");
        let result = document.createElement("h2");
            
        // Add answer check and count
        checkBtn.innerText = "Check";
        checkBtn.setAttribute("id", `check${x}`)
        checkBtn.addEventListener("click", (e) => {
            // get a reference to the section property from the questions object
            let curQuestion = questions[currentSubjectTopic].questions;
            let items = document.querySelectorAll(`p[class*=${currentSubjectTopic}]`);
            let incorrectAnswersIndex = [];
            questions[currentSubjectTopic].score = 0;

            // remove classlist incorrect before answer check
            for(let i = 0; i < items.length; i++) {
                items[i].classList.remove("incorrect")
            }

            // loop through the questions on the parent section
            for(let i = 0; i < curQuestion.length; i++) {
                // compare the selection to the correct answer
                let checkAns = curQuestion[i].answer == curQuestion[i].correctAns;
                if(checkAns) {
                    questions[currentSubjectTopic].score += 1
                } else {
                    incorrectAnswersIndex.push(i);
                }
            }

            for(let i = 0; i < incorrectAnswersIndex.length; i++) {
                let incorrectItems = document.querySelector(`.${currentSubjectTopic}${incorrectAnswersIndex[i]}`)
                incorrectItems.classList.add("incorrect")
            }
            
            result.innerHTML = `${questions[currentSubjectTopic].score}/${curQuestion.length}`;

        })

        section.innerHTML = currentSubjectTopic.toUpperCase();
        instructions.innerHTML = questions[subjectTopic[x]].instructions;
        
        main.appendChild(section);
        main.appendChild(instructions);
        for(let i = 0; i < current.length; i++) { // loop through the questions property
            let cardContainer = document.createElement("div");
            let question = document.createElement("p");
            let answersContainer = document.createElement("div");
            
            answersContainer.classList.add("answersContainer");
            // Set the question to the question container with a numbered prefix
            question.setAttribute("class", `${currentSubjectTopic}${i}`);
            question.innerHTML = (i+1) + ". " + current[i].q;
            // Set classNames for all cards to cardContainer
            cardContainer.className = "cardContainer";
            // Finally, append the question to the card
            cardContainer.appendChild(question);
        
            let answers = current[i].answers;

            for(let j = 0; j < answers.length; j++) { // loop for answers in the questions object
                let answer = document.createElement("input");
                let label = document.createElement("label");
                let answerStr =  `${currentSubjectTopic}${i}${j}`; // Include the line item number to isolate the input group
                
                label.htmlFor = answerStr;
                
                // Creates the actual input element
                answer.setAttribute("type", "radio");
                answer.setAttribute("id", answerStr);
                answer.setAttribute("name", `${currentSubjectTopic}${i}`);
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
} 

// renderQuestions('english');

// renderMultipleQuestions(), renderInputQuestions()

