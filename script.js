var myQuestions = [
	{
		question: "Qual a alternativa correta?",
		answers: {
			a: 'errada',
			b: 'certa',
			c: 'errada'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual é o maior numero?",
		answers: {
			a: '-30',
			b: '5',
			c: '10',
			d: '9'
		},
		correctAnswer: 'c'
    },
	{
		question: "Qual é o outro nome que podemos dar a lava?",
		answers: {
			a: 'Magma',
			b: 'Vulcão',
			c: 'Fogarel',
			d: 'Fogo'
		},
		correctAnswer: 'a'
	},
	{
		question: "A terra é:",
		answers: {
			a: 'Achatada',
			b: 'Redonda',
			c: 'Plana'
		},
		correctAnswer: 'a'
		},
	{
		question: "Qual desses planetas tem um anel em volta dele?",
		answers: {
			a: 'Sol',
			b: 'Marte',
			c: 'Júpiter',
        d: 'Saturno'
		},
		correctAnswer: 'd'
		},
	{
		question: "*Charada* tenho dois olhos na face e 7 na cauda.Quem sou eu?",
		answers: {
			a: 'Sereia',
			b: 'Pavão',
			c: 'Pombo',
        d: 'Galinha'
		},
		correctAnswer: 'b'
		},
	{
		question: "O que é imagem?",
		answers: {
			a: 'Uma fotografia',
			b: 'É uma imagem ué!?',
			c: 'Representação, reprodução ou imitação da forma de uma pessoa ou de um objeto',
         d: 'Tudo que podemos ver'
		},
		correctAnswer: 'c'
		},
	{
		question: "Onde se localiza machu picchu?",
		answers: {
			a: 'Itália',
			b: 'Estados unidos',
			c: 'México',
         d: 'Peru'
		},
		correctAnswer: 'd'
		},
	{
		question: "Qual a maior montanha do mundo?",
		answers: {
			a: 'Pico da neblina',
			b: 'Pico da neblina',
			c: 'Monte Everest',
         d: 'O monte de roupas do seu quarto'
		},
		correctAnswer: 'c'
		},
	{
		question: "Que País tem formato de uma bota?",
		answers: {
			a: 'México',
			b: 'Itália',
			c: 'Bolívia',
         d: 'Argentina'
		},
		correctAnswer: 'b'
		},
	{
		question: "Quanto tempo a terra demora para dar uma volta em torno de si mesma?",
		answers: {
			a: '24 horas',
			b: 'Ela não dá voltas',
			c: '1 hora',
         d: '365 dias'
		},
		correctAnswer: 'a'
		},
	{
		question: "A invenção do chuveiro elétrico foi em que país?",
		answers: {
			a: 'Estados Unidos',
			b: 'Austrália',
			c: 'Bolívia',
        d: 'Brasil'
		},
		correctAnswer: 'd'
		},
	{
		question: "Quem criou a lâmpada?",
		answers: {
			a: 'Pitágoras de Samos',
			b: 'Neil Armstrong',
			c: 'Tomas Edison'
		},
		correctAnswer: 'c'
		},
	{
		question: "Quem pintou Monalisa?",
		answers: {
			a: 'Pelé',
			b: 'Leonardo da Vinci',
			c: 'Van Gogh',
         d: 'Neil Armstrong'
		},
		correctAnswer: 'b'
		},
	{
		question: "Quem pintou noite estrelada?",
		answers: {
			a: 'Van Gogh',
			b: 'Leonardo da Vinci',
			c: 'Tarsila do Amaral'
		},
		correctAnswer: 'a'
		},
	{
		question: "Qual o maior órgão do nosso corpo?",
		answers: {
			a: 'Pulmão',
			b: 'Coração',
			c: 'Cérebro',
        d: 'Pele'
		},
		correctAnswer: 'd'
		},
	{
		question: "O Sol é ...",
		answers: {
			a: 'Um asteroide',
			b: 'Uma estrela',
			c: 'Um asteroide',
   d: 'Um planeta'
		},
		correctAnswer: 'b'
		},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

		var output = [];
		var answers; 

		for(var i=0; i<questions.length; i++){
			
			answers = [];
			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){


			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}


	showQuestions(questions, quizContainer);


	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
