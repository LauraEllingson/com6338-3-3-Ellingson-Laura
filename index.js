var questionsArr = [
    {
      question: 'Edgar Allan Poe wrote, "The Raven"',
      answer: true
    },
    {
      question: 'Edgar Allan Poe wrote the first detective story, "the Murders in the Rue Morgue"  ',
      answer: true
    },
    {
      question: 'Edgar Allan Poe and Mark Twain were friends ',
      answer: false
    },
    {
      question: 'Mark Twain never met Edgar Allan Poe, he was only 13 when Poe died',
      answer: true
    },
    {
      question: 'Mark Twain once said that Poe was unreadable when descrbing his prose',
      answer: true
    }
  ];
  
  function runQuiz() {
    var correctAnswers = 0;
  
    for (var i = 0; i < questionsArr.length; i++) {
      var userAnswer = confirm(questionsArr[i].question);
  
      if (userAnswer === questionsArr[i].answer) {
        correctAnswers++;
      }
    }
  
    var scorePercentage = Math.round((correctAnswers / questionsArr.length) * 100);
  
    alert('Quiz Completed!\nYour Score: ' + scorePercentage + '%');
  }
  

  