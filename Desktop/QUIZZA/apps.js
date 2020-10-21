const store = {
    // 5 or more questions are required
    questions: [
      { // Question 1
        question: 'Who was the president of the United States in 1960?',
        answers: [
          'Ronald Reagan',
            'Dwight Eisenhower',
            'Barack Obama',
            'Jimmy Carter'
        ],
        correctAnswer: 'Dwight Eisenhower'
      },
      { // Question 2
        question: 'Who was the president of the United States in 1970?',
        answers: [
            'Ronald Reagan',
            'Jimmy Carter',
            'Richard Nixon',
            'Harry Truman'
        ],
        correctAnswer: 'Richard Nixon'
      },
      { // Question 3
        question: 'Who was the president of the United States in 1980?',
        answers: [
          'Bill Clinton',
          'George W Bush',
          'Lyndon Johnson',
          'Jimmy Carter'
        ],
        correctAnswer: 'Jimmy Carter'
      },
      { // Question 4
        question: 'Who was the president of the United States in 1990?',
          answers: [
            'George Bush',
            'George W Bush',
            'Bill Clinton',
            'Richard Nixon'
          ],
          correctAnswer: 'George Bush'
      },
      { // Question 5
        question: 'Who was the president of the United States in 1995?',
          answers: [
            'George W Bush',
            'Bill Clinton',
            'Barack Obama',
            'Jimmy Carter'
          ],
          correctAnswer: 'Bill Clinton'
        
      },
      { // Question 6
        question: 'Who was the president of the United States in 2000?',
          answers: [
            'George W Bush',
            'Donald J Trump',
            'Barack Obama',
            'Bill Clinton'
          ],
          correctAnswer: 'Bill Clinton'
      },
      { // Question 7
        question: 'Who was the president of the United States in 2005?',
          answers: [
            'George W Bush',
            'Donald J Trump',
            'Barack Obama',
            'Jimmy Carter'
        ],
        correctAnswer: 'George W Bush'
      
      },
      { // Question 8
        question: 'Who was the president of the United States in 2010?',
          answers: [
            'George Bush',
            'George W Bush',
            'Bill Clinton',
            'Barack Obama'
          ],
          correctAnswer: 'Barack Obama'
      },
      { // Question 9
        question: 'Who was the president of the United States in 2015',
          answers: [
            'George Bush',
            'Barack Obama',
            'Bill Clinton',
            'Richard Nixon'
          ],
          correctAnswer: 'Barack Obama'
      },
      { // Question 10
        question: 'Who is the current president of the United States?',
          answers: [
            'George Bush',
            'George W Bush',
            'Donald J. Trump',
            'Richard Nixon'
          ],
          correctAnswer: 'Donald J. Trump'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    submittingAnswer: false,
    score: 0,
  
    currentQuestionState: {
      answerArray: []
    }
  };



  /**Generate first page Html */
  function generateFirstPageHtml(){
      return `
      
      <div>
  <div class="firstPage">
    <form>
      <p>
        This Quiz will check your konwledge about US presidency history.
      </p>
      <button type="submit"id="StartQuizApp" autofocus>Start Quiz</button>
    </form>
  </div>
  </div>
   
      `
  }

  function firstQuestionPageHtml(questionObject){
 return `
  <div class="quiz-interface">
     <p> Question: ${questionObject.index}/${store.questions.lenght} </p>
     <p> ${questionObject.question .question}</p>
  <form>
    <ol type="1"> 
         ${generateQuizAnswers(questionObject.answer)};
    </ol>
    <button type="submit" class="submit-answer"> Submit Answer</button>
  </form> 
  <p> Score: ${store.score} </p>
  <div>
 `;

  }

  function generateQuizAnswers(answers){
    let answerArray = [];
    let indexArray = [];
    answers.forEach(answer => {
      answerArray.push(answer);
      indexArray.push(answers.indexOf(answer));
    });
    //console.log(indexArray);
    return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
  }

  function stringifyAnswerArray(answer){
    let questionNumber = store.questionNumber;
    let name = store.questions[questionNumber].answers.indexOf(answer);
    return `
    <div id=container>
      <li>
        <div class="answer-container" >
        <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}" required>
        <label for="answer-${name}"> ${answer}</label>
       
        </div>
      </li>
      </div>
    `;
  }

  function startQuiz() {
    store.quizStarted = true;
  }


  /***********************render-function-***********************/
  
  function renderQuiz(){

    const welcomePageString = generateFirstPageHtml();
      $('main').html(welcomePageString);
      const quizInterfaceString = firstQuestionPageHtml(currentQuestion());
      $('main').html(quizInterfaceString)

    
    };



      /*
      const welcomePageString = generateFirstPageHtml();
      $('main').html(welcomePageString);
      const quizInterfaceString = firstQuestionPageHtml(currentQuestion());
      $('main').html(quizInterfaceString);*/
    
  


  //************************currentQuestion************************
function currentQuestion(){
    let index = store.questionNumber;
    let questionObject = store.questions[index];
    return {
      index: index +1,
      question: questionObject
    };
  }
  

  /** EVENT HANDLER FUNCTION */

  function handleBeginQuizSubmit(){
    $('main').on('click', '#StartQuizApp', (event) =>{
    
      startQuiz();
      renderQuiz();
    });
  }



  function handleQuiz (){
    renderQuiz();
    handleBeginQuizSubmit();
   /* handleSubmitAnswer();
    handleNextQuestionSubmit();
    handleRestartQuizSubmit();
    handleSeeResultsSubmit();*/
  
  }
  
  $(handleQuiz);