import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import tick from "../../Assets/Images/tickMark.png";
import '../../Styles/Brainquest.css';
import { Get_Daily_Quiz_Questions } from "../../store/Actions/DailyQuizAction";
import Heading from '../Heading';


function ProgressBar({ current, total, answeredQuestions, }) {
    // console.log(current)
    // console.log(answeredQuestions)
    return (
        <div className="progress-container  flex items-center justify-between  absolute  " id='circlePostion'>
            {Array.from({ length: total }, (_, index) => (

                <div key={index} className={`progress-circle ${answeredQuestions[index] ? 'answered' : ''}`}>
                    {answeredQuestions[index] ?
                        <div className='tickImg'><img src={tick} alt="tick" /></div> : <div className='questionNum'>{index + 1}</div>
                    }
                </div>
            ))}
        </div>
    );
}

function ProgressBarLine({ current, total }) {
    const progress = (current / total) * 105;

    return (
        <div className="">
            <div className="progress-barLine">
                <div className="progress" style={{ width: `${progress}% ` }}></div>
            </div>

        </div>
    );
}

function DailyQuiz() {
    const dispatch = useDispatch();

    const Daily_Quiz_Questions = useSelector(
        (state) => state.DailyQuiz.Current_DailyQuiz_Question
    );

    const user = useSelector((state) => state.auth.user);
    const id = user._id;
    let questions = Daily_Quiz_Questions

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
    const [showbg, setShowBg] = useState(true)
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [nextBtnClicked, setNextBtnClicked] = useState(false)
    const [prevBtrnClicked, setPrevBtnClicked] = useState(false)

    const [answeredQuestions, setAnsweredQuestions] = useState(() => {
        const initialArray = Array.from({ length: questions.length }, () => false);
        initialArray[0] = true;
        return initialArray;
    });

    // console.log(Daily_Quiz_Questions);

    useEffect(() => {
        // console.log(id)
        dispatch(Get_Daily_Quiz_Questions(id));
    }, [id])


    // if (!questions || questions.length === 0) {
    //     return <div className='text-white font-bold'>No more questions for today! Check back tomorrow for your next quiz. Keep up the great work and see you soon</div>;
    // }

    // }, [dispatch, id]);
    // useEffect(() => {
    //     // console.log("wrongQuestions updated:", wrongQuestions);
    //     if (Daily_Quiz_Questions?.length > 0) {
    //         const slicedQuestions =
    //             Daily_Quiz_Questions.length > 10
    //                 ? Daily_Quiz_Questions.slice(0, 10)
    //                 : Daily_Quiz_Questions;
    //         //   setQuestions(slicedQuestions);
    //         console.log(slicedQuestions ,"ques")
    //     }
    // }, [Daily_Quiz_Questions]);



    // console.log(id)


    const handleNext = () => {
        console.log(selectedAnswers[currentQuestionIndex]);
        setNextBtnClicked(true)
        const isCorrect = questions[currentQuestionIndex].answer === selectedAnswers[currentQuestionIndex];
        // console.log(selectedAnswers[currentQuestionIndex])
        // console.log(questions[currentQuestionIndex].answer)
        // console.log(isCorrect)
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        // console.log(score)

        const updatedAnsweredQuestions = [...answeredQuestions];
        updatedAnsweredQuestions[currentQuestionIndex + 1] = true;
        setAnsweredQuestions(updatedAnsweredQuestions);

        if (currentQuestionIndex === questions.length - 1) {
            setShowScore(true);
            setShowBg(false)
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
        // setSelectedAnswers(null);
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);


    };

    const handleAnswerSelect = (answer) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = answer;
        setSelectedAnswers(newSelectedAnswers);
    };

    const currentQuestion = questions[currentQuestionIndex];
    // console.log(questions)

    return (
      <>
        <Heading blueText="Daily" whiteText="Quiz" />
        <div className={showbg ? `Dailyquiz-container` : ""}>
          {showScore ? (
            <div className="score-container">
              <p className="text-white pt-4 text-bold">
                Your Score: {score}/{questions.length}
              </p>
              <div className="question-details">
                <div className="correct-answers">
                  <h3 className="hdScroe font-bold">CORRECT ANSWERS</h3>
                  {questions?.map((question, index) => {
                    if (questions[index].answer === selectedAnswers[index]) {
                      return (
                        <div key={index} className="question-detail">
                          <p className="selectedQue">{question.question}</p>
                          <p className="seleCorr">
                            Correct Answer: {question.answer}
                          </p>
                          <p className="yourAns">
                            Your Answer: {selectedAnswers[index]}
                          </p>
                          <hr />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <div className="incorrect-answers">
                  <h3 className="hdScroeWrong font-bold">INCORRECT ANSWERS</h3>
                  {questions?.map((question, index) => {
                    if (
                      questions[index].answer !== selectedAnswers[index] &&
                      selectedAnswers[index] !== null
                    ) {
                      return (
                        <div key={index} className="question-detail">
                          <p className="selectedQue">{question.question}</p>
                          <p className="seleCorr">
                            Correct Answer: {question.answer}
                          </p>
                          <p className="yourAns">
                            Your Answer: {selectedAnswers[index]}
                          </p>
                          <hr />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <>
              {!questions || questions.length === 0 ? (
                <div className="text-white font-bold">
                  No more questions for today! Check back tomorrow for your next
                  quiz. Keep up the great work and see you soon
                </div>
              ) : (
                <>
                  <div className="relative DailyRelative">
                    <ProgressBarLine
                      current={currentQuestionIndex}
                      total={questions.length}
                    />
                    <ProgressBar
                      current={currentQuestionIndex}
                      total={questions.length}
                      answeredQuestions={answeredQuestions}
                    />
                  </div>

                  <div className="question-container">
                    <h2 className="DailyQuizQuestion font-poppins" id="">
                      {currentQuestion?.question}
                    </h2>
                    <div className="DailyQuizanswer-options">
                      {currentQuestion?.options.map((answer, index) => (
                        <div key={index} className="daliyPerQues custom-radio">
                          <input
                            type="radio"
                            id={`answer-${index}`}
                            name="answer"
                            value={answer}
                            onChange={() => handleAnswerSelect(answer)}
                            checked={
                              answer === selectedAnswers[currentQuestionIndex]
                            }
                            className="option"
                            style={{ backgroundColor: "red" }}
                          />
                          <label
                            htmlFor={`answer-${index}`}
                            className="font-poppins ansMain"
                          >
                            {answer}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="DailyQuizebutton-container ">
                    <button
                      className={`${
                        currentQuestionIndex === 0 ? "invisible" : ""
                      } DailyQuize-previous-button`}
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                    >
                      <span>
                        <IoIosArrowBack className="font-semibold" />
                      </span>
                      Previous
                    </button>
                    <button
                      className="DailyQuize-next-button"
                      onClick={handleNext}
                      disabled={
                        selectedAnswers[currentQuestionIndex] === undefined ||
                        showScore ||
                        selectedAnswers[currentQuestionIndex] === null
                      }
                    >
                      {currentQuestionIndex === questions.length - 1
                        ? "Finish"
                        : "Next"}
                      <span>
                        <IoIosArrowForward className="font-semibold" />
                      </span>
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </>
    );
}

export default DailyQuiz;



