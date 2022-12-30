var myQuestions = [
	{
        question: "What are the core vaccines for a feline patient?",
        answers: {
        	a: 'Corona and FVRCP',
        	b: 'Rabies and FVRCP',
        	c: 'Corona and FeLV',
        	d: 'Rabies and Influenza'
        },
        correctAnswer: 'b'
    },
    {
        question: "What 2 areas of a patient's body should to be restrained for a general lateral exam?",
        answers: {
        	a: 'ears and tongue',
        	b: 'head and hind end',
        	c: 'cute little nose and toes',
        	d: 'head and front paws'
        },
        correctAnswer: 'b'
	},
	{
		question: "What are the core vaccines for a canine patient?",
		answers: {
            a: 'Rabies, DHLPP, Bordetella',
            b: 'Lepto, Lyme, Influenza',
            c: 'LPV, Lyme, Rabies',
            d: 'Rabies, CPV, Bordetella'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is 'FeLV'?",
		answers: {
            a: 'Feline Licking Vaccine',
            b: 'Feral Less Violent',
            c: 'Fetal Lorax Virus',
            d: 'Feline Leukemia Virus'
		},
		correctAnswer: 'd'
	},
	{
		question: "What is 'FIV'?",
		answers: {
            a: 'Feline Immunodeficiency Virus',
            b: 'Fatal Intoxication Volume',
            c: 'Form Insulin Vaccine',
            d: 'Frightening Individual Vermin'
		},
		correctAnswer: 'a'
	},
	{
        question: "A 4DX tests for the following:",
        answers: {
            a: 'Heartworm, Lyme Disease, Ehrlicia and Leptosporosis',
            b: 'Leptosporosis, Lyme, Rabies and Parvovirus',
            c: 'Heartworm, Lyme Disease, Ehrlicia and Anaplasma',
            d: 'Rabies, Parvo, Kennel Cough and Cushings Disease',
        },
        correctAnswer: 'c'
	},
    {
        question: "The client is the human who pays the veterinary bill.",
        answers: {
            a: 'True',
            b: 'False',
            
        },
        correctAnswer: 'a'
    },
    {
        question: "Exam rooms should be spot cleaned between each appointment.",
        answers: {
            a: 'False',
            b: 'True',
        },
        correctAnswer: 'b'
    },
    {
        question: "A Fecal Flotation tests for all the following parasites, EXCEPT:",
        answers: {
            a: 'Round worms',
            b: 'Nematodes',
            c: 'Hookworm',
            d: 'Giardia',
        },
        correctAnswer: 'd'
    },
    {
        question: "A client with no money is not a client at all.",
        answers: {
            a: 'True',
            b: 'False',
            c: 'It depends on the severity of the patient’s health',
            
        },
        correctAnswer: 'c'
    },     
    ];
  	// get user's name
		
	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');

	let username;
	document.getElementById('button').onclick = function(){
	username = document.getElementById('username').value;
	console.log(username);
	};

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
		  '<div class="question">' + questions[i].question + '</div>'
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
	  resultsContainer.innerHTML = username.upper + ', YOU SCORED ' + numCorrect + ' OUT OF ' + questions.length + '!';
	}
  
	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function() {
	  showResults(questions, quizContainer, resultsContainer);
	}
  
  }