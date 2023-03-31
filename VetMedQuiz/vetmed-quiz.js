var myQuestions = [
	{
        question: "What are the core vaccines for a feline patient?",
        answers: {
        	A: 'Corona and FVRCP',
        	B: 'Corona and FeLV',
        	C: 'Rabies and FVRCP',
        	D: 'Rabies and Influenza'
        },
        correctAnswer: 'C'
    },
    {
        question: "What parts of a patient's should to be restrained for a lateral exam?",
        answers: {
        	A: 'Ears and Tongue',
        	B: 'Head and Hind end',
        	C: 'Cute little Nose and Toes',
        	D: 'Head and Front Paws'
        },
        correctAnswer: 'B'
	},
	{
		question: "What are the core vaccines for a canine patient?",
		answers: {
            A: 'Rabies, DHLPP, Bordetella',
            B: 'Lepto, Lyme, Influenza',
            C: 'LPV, Lyme, Rabies',
            D: 'Rabies, CPV, Bordetella'
		},
		correctAnswer: 'A'
	},
	{
		question: "What is 'FeLV'?",
		answers: {
            A: 'Feline Licking Vaccine',
            B: 'Feral Less Violent',
            C: 'Fetal Lorax Virus',
            D: 'Feline Leukemia Virus'
		},
		correctAnswer: 'D'
	},
	{
		question: "What is 'FIV'?",
		answers: {
            A: 'Feline Immunodeficiency Virus',
            B: 'Fatal Intoxication Volume',
            C: 'Form Insulin Vaccine',
            D: 'Frightening Individual Vermin'
		},
		correctAnswer: 'A'
	},
	{
        question: "A 4DX tests for the following:",
        answers: {
            A: 'Heartworm, Lyme Disease, Ehrlicia and Leptosporosis',
            B: 'Leptosporosis, Lyme, Rabies and Parvovirus',
            C: 'Heartworm, Lyme Disease, Ehrlicia and Anaplasma',
            D: 'Rabies, Parvo, Kennel Cough and Cushings Disease',
        },
        correctAnswer: 'C'
	},
    {
        question: "The client is the pet.",
        answers: {
            A: 'True',
            B: 'False',
            
        },
        correctAnswer: 'B'
    },
    {
        question: "Exam rooms should be spot cleaned between each appointment.",
        answers: {
            A: 'True',
            B: 'False',
        },
        correctAnswer: 'A'
    },
    {
        question: "A Fecal Flotation tests for all the following parasites, EXCEPT:",
        answers: {
            A: 'Round worms',
            B: 'Nematodes',
            C: 'Hookworm',
            D: 'Giardia',
        },
        correctAnswer: 'D'
    },
    {
        question: "A client with no money is not a client at all.",
        answers: {
            A: 'True',
            B: 'False',
            C: 'It depends on the severity of the patient’s health',
            
        },
        correctAnswer: 'C'
    },     
    ];
		
	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');
	
	

  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
	function showQuestions(questions, quizContainer){
	  // we'll need a place to store the output and the answer choices
	  var output = [];
	  var answers;
  
	  // for each question...
	  for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];
  
		// for each available answer...
		for(var letter in questions[i].answers){
  
		  // ...add an html radio button
		  answers.push(
			'<label>'
			  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
			  + letter + ': '
			  + questions[i].answers[letter]
			+ '</label>'
		  );
		}
  
		// add this question and its answers to the output
		output.push(
		  '<div class="question" >'+ '<i class="fa-solid fa-dog fa-bounce"></i>' + questions[i].question + '<i class="fa-solid fa-cat fa-bounce"></i>' + '</div>'
		  + '<div class="answers">' + answers.join('') + '</div>'
		);
	  }
  
	  // finally combine our output list into one string of html and put it on the page
	  quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
	  

	  // gather answer containers from our quiz
	  var answerContainers = quizContainer.querySelectorAll('.answers');
	  
	  // keep track of user's answers
	  var userAnswer = '';
	  var numCorrect = 0;
	  var userName = document.getElementById('username').value;
	  // for each question...
	  for(var i=0; i<questions.length; i++){
  
		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
		  // add to the number of correct answers
		  numCorrect++;
		  
		  // color the answers green
		  answerContainers[i].style.color = 'green';
		}
		// if answer is wrong or blank
		else{
		  // color the answers red
		  answerContainers[i].style.color = 'red';
		}
		}

	  // show number of correct answers out of total
	  if(numCorrect < 5) {
	  resultsContainer.innerHTML = '<i class="fa-solid fa-fish fa-bounce"></i>' +  ' TOO BAD, ' + userName + '! YOU SCORED ' + numCorrect + ' OUT OF ' + questions.length + '!  ' + '<i class="fa-solid fa-fish fa-bounce"></i>';
	  }else if (numCorrect > 5 && numCorrect <=9){
	  resultsContainer.innerHTML = '<i class="fa-solid fa-dove fa-bounce"></i>' +  '  GOOD JOB, ' + userName + '! YOU SCORED ' + numCorrect + ' OUT OF ' + questions.length + '!  ' + '<i class="fa-solid fa-dove fa-bounce"></i>';
	  }else {
	  resultsContainer.innerHTML = '<i class="fa-solid fa-dragon fa-bounce"></i>' + '  CONGRATULATIONS, ' + userName + '! YOU SCORED ' + numCorrect + ' OUT OF ' + questions.length + '!  ' + '<i class="fa-solid fa-dragon fa-bounce"></i>';
	  }
	}
	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function() {
	  showResults(questions, quizContainer, resultsContainer);
	}
  
  }