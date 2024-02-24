import React,{useState} from 'react';
import './App.css';


function App() {
  
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
const questions=[
    {
      text:'Which of the following is used in React.js to increase performance?',
      options:[
        {id:0,text:'Original DOM',isCorrect:false},
        {id:1,text:'Virtual DOM',isCorrect:true},
        {id:2,text:'Both A & B',isCorrect:false},
        {id:3,text:'None Of The Above',isCorrect:false},
      ]
    },
    {
      text:'What Is ReactJs?',
      options:[
        {id:0,text:'Server Side Framework',isCorrect:false},
        {id:1,text:'User Interface Framework',isCorrect:true},
        {id:2,text:'Both A & B',isCorrect:false},
        {id:3,text:'None Of The Above',isCorrect:false},
      ]
    },
    {
      text:'Identify the one which is used to pass data to components from outside?',
      options:[
        {id:0,text:'Render with arguments',isCorrect:false},
        {id:1,text:'setState',isCorrect:false},
        {id:2,text:'PropTypes',isCorrect:false},
        {id:3,text:'props',isCorrect:true},
      ]
    },
    {
      text:'In which language is React.js written?',
      options:[
        {id:0,text:'Python',isCorrect:false},
        {id:1,text:'Java',isCorrect:false},
        {id:2,text:'JavaScript',isCorrect:true},
        {id:3,text:'php',isCorrect:false},

      ]
    },
    {
      text:'Which of the following keyword is used to create a class inheritance?',
      options:[
        {id:0,text:'create',isCorrect:false},
        {id:1,text:'inherits',isCorrect:false},
        {id:2,text:'extends',isCorrect:true},
        {id:3,text:'this',isCorrect:false},
      ],
      userAnswer:false
    }
]

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
};

const goToPreviousQuestion = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);
    setScore(score - 1);
        
  }
};

const goToNextQuestion = () => {
  if (currentQuestion < questions.length-1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  } else if (selectedOption !== null && currentQuestion + 1 === questions.length) {
    setFinalResult(true);
  }
};

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setSelectedOption(null);
  setFinalResult(false);
};

return (
  <div className="container mt-5">
 
  <div className="container mt-5">
        <h1 className="text-center text-primary mb-4">Quiz</h1>

    {showFinalResult ? (
      <div className="final-results text-center">
        <h2>Current score: {score}</h2>
        <h1>Final Results</h1>
        <h2>
          {score} out of {questions.length} correct - ({((score / questions.length) * 100)}%)
        </h2>
        <button onClick={() => restartGame()} className="btn btn-primary mt-3">
          Restart Game
        </button>
      </div>
    ) : (
      <div className="question-card">
      <h2 className="mb-3">
        Question {currentQuestion + 1} out of {questions.length}
      </h2>
      <h3 className="question-text">{questions[currentQuestion].text}</h3>
      <form>
        {questions[currentQuestion].options.map((option) => (
          <div key={option.id} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`option${option.id}`}
              name="options"
              checked={selectedOption === option.id}
              onChange={() => {
                optionClicked(option.isCorrect);
                setSelectedOption(option.id);
              }}
            />
            <label className="form-check-label" htmlFor={`option${option.id}`}>
              {option.text}
            </label>
          </div>
        ))}
      </form>

      <div className="mt-3">
        {currentQuestion > 0 && (
          <button 
            onClick={() => goToPreviousQuestion()}
            className="btn btn-secondary mr-2"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => goToNextQuestion()}
          className="btn btn-primary ms-5"
          disabled={selectedOption === null}
        >
          Next
        </button>
      </div>
    </div>


  )}
</div>
    </div>
);
}

export default App;