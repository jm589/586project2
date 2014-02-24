// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Quiz",
        "main":    "<p>Test your knowledge of the three branches of government!</p>",
        "results": "<h5>Thanks for taking this quiz</h5><p>Go to the next slide to learn more.</p>",
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When was the Constitution created?",
            "a": [
                {"option": "1777",      "correct": false},
                {"option": "1787",     "correct": true},
                {"option": "1778",      "correct": false},
                {"option": "1788",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Wrong.</span> The Constitution was created in 1787.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What are the three branches of government? Select all that apply.",
            "a": [
                {"option": "Executive branch",               "correct": true},
                {"option": "Judicial branch",   "correct": true},
                {"option": "Military branch",               "correct": false},
                {"option": "Legislative branch", "correct": true} // no comma here
            ],

            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>That's wrong.</span> The three branches of government are the Executive branch, Judicial branch, and the Legislative branch.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The President has many roles. What are they? Select all that apply.",
            "a": [
                {"option": "Head of State",           "correct": true},
                {"option": "Presiding officer in the Senate",                  "correct": false},
                {"option": "Head of the government",  "correct": true},
                {"option": "Commander-in-Chief of the Military",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Great!</span> That's correct!</p>",
            "incorrect": "<p><span>Not Quite.</span> The President is the head of state, head of the government as well as the commander-in-chief of the military.</p>" // no comma here
        },
        { // Question 4
            "q": "Which court is the highest court in the United States?",
            "a": [
                {"option": "Court of Appeals",    "correct": false},
                {"option": "Supreme Court",     "correct": true},
                {"option": "U.S. District Courts",      "correct": false},
                {"option": "U.S. Tax Courts",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>That's wrong.</span> Sorry. The highest court in the United States is the Supreme Court.</p>" // no comma here
        },
        { // Question 5
            "q": "Do Supreme Court Justices need to be approved by the Senate?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>That's wrong!</span> Supreme Court Justices are nominated by the Presiden but also need to be approved by the Senate.</p>" // no comma here
        } // no comma here
    ]
};
