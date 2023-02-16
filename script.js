let questions = [
    {
        id: "1",
        image: "/images/singapore.png",
        question: "Столица Сингапура?",
        answer1: "Сингапур",
        answer2: "Судонг",
        answer3: "Брани",
    },
    {
        id: "2",
        image: "/images/gypsophobia.png",
        question: "Гипсофобия - это...",
        answer1: "Боязнь толпы",
        answer2: "Боязнь открытых пространств",
        answer3: "Боязнь высоты", 
    },
    {
        id: "3",
        image: "/images/picasso.png",
        question: "Автором какой картины не является Пабло Пикассо?",
        answer1: "Завтрак на траве",
        answer2: "Сон",
        answer3: "Жизнь", 
    },
    {
        id: "4",
        image: "/images/KinDzaDza.png",
        question: "Режиссером какого из этих фильмов является Георгий Данелия?",
        answer1: "Кин-дза-дза",
        answer2: "Карнавальная ночь",
        answer3: "Иваново детство", 
    },
    {
        id: "5",
        image: "/images/film.png",
        question: "Кто сыграл главную роль в фильме Влюблен по собственному желанию?",
        answer1: "Олег Янковский",
        answer2: "Олег Басилашвили",
        answer3: "Андрей Миронов", 
    },
    {
        id: "6",
        image: "/images/rider.png",
        question: "В каком городе стоит памятник Медный всадник?",
        answer1: "Санкт-Петербург",
        answer2: "Москва",
        answer3: "Екатеринбург", 
    },
    {
        id: "7",
        image: "/images/linen.png",
        question: "Кто написал сказку Лён?",
        answer1: "Шарль Перро",
        answer2: "Г.Х. Андерсен",
        answer3: "А.С. Пушкин", 
    },
    {
        id: "8",
        image: "/images/dog.png",
        question: "Какая кличка была у собаки, которой С. Есенин посвятил стихотворение?",
        answer1: "Джим",
        answer2: "Джек",
        answer3: "Лада", 
    },
    {
        id: "9",
        image: "/images/chechoslovakia.png",
        question: "Как называлась денежная единица Чехословакии?",
        answer1: "Крона",
        answer2: "Форинт",
        answer3: "Франк", 
    },
    {
        id: "10",
        image: "/images/masquerade.png",
        question: "Кто написал музыку для балета Маскарад?",
        answer1: "Комитас",
        answer2: "Арам Хачатурян",
        answer3: "Рахманинов", 
    }
]

let currentIndex = 0

let selectedCorrectAnswers = []

let correctAnswers = ["Сингапур", "Боязнь высоты", "Завтрак на траве", "Кин-дза-дза", "Олег Янковский", "Санкт-Петербург", "Г.Х. Андерсен", "Джим", "Крона", "Арам Хачатурян"]

let selectedIncorrectAnswers = []

function renderQuestions() {
    const cardQuestion = document.getElementById('card-question')
    cardQuestion.innerHTML = ""
    
    const question = questions[currentIndex]
    cardQuestion.innerHTML = `
        
    <div class="card-question-items">
        <p class="title-question">${question.question}</p>
        <div class="answers-flex" id="answers-flex">
            <button class="btn-answer" id="${question.answer1}" value="${question.answer1}">${question.answer1}</button>
            <button class="btn-answer" id="${question.answer2}" value="${question.answer2}">${question.answer2}</button>
            <button class="btn-answer" id="${question.answer3}" value="${question.answer3}">${question.answer3}</button>
        </div>
        <p class="title-number-question">Вопрос ${question.id}/10</p>
    </div>
    <div class="card-question-image">
        <img src="${question.image}" alt="" class="image"/img>
    </div>
    `   
    
    function makeChoiceOfAnswer(event) {
        const answer = event.target.value

        selectAnswer(answer)
    }   
    document.getElementById("answers-flex").addEventListener('click', (event) => makeChoiceOfAnswer(event)) 
    

    // question.forEach((answer1) => {
        
    //     function makeHighlightBtn1() {
    //         highlightBtn1(answer1)
    //     }
        
    //     document.getElementById(`${question.answer1}`).addEventListener('click', makeHighlightBtn1)
    // }) 
}

function renderNextQuestion() {
    clearArrow()
    currentIndex = currentIndex + 1;

    if (currentIndex > questions.length - 1) {
        currentIndex = questions.length - 1
    }
    if (currentIndex === questions.length - 1) {
        document.getElementById('btn-next').style.color = "#C7C3C3"
    }
    renderQuestions()
    console.log(currentIndex)
}

function renderPrevQuestion() {
    clearArrow()
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = 0
    }
    if (currentIndex === 0) {
        document.getElementById('btn-prev').style.color = "#C7C3C3"
    }
    
    renderQuestions()
    console.log(currentIndex)
}

function clearArrow() {
    document.getElementById('btn-next').style.color = "#000000"
    document.getElementById('btn-prev').style.color = "#000000"
}

function selectAnswer(answer) {
    
    if (correctAnswers.includes(answer)) {
        if (selectedCorrectAnswers.includes(answer)) {
            return
        }
        selectedCorrectAnswers.push(answer)
        console.log(selectedCorrectAnswers)

    } else {
        selectedIncorrectAnswers.push(answer)
        console.log(selectedIncorrectAnswers)
    }
}

function renderResult() {
    const result = selectedCorrectAnswers.length
    document.getElementById('text-result').innerHTML = "Ваш результат" + " " + result + "/10." + " " + "Неплохо, но Вам стоит уделять больше внимания чтению."
}

function repeatTest() {
    selectedCorrectAnswers = []
    selectedIncorrectAnswers = []
    document.getElementById('text-result').innerHTML = ""
}

// function  highlightBtn1(answer1) {

// }

renderQuestions()

document.getElementById('btn-next').addEventListener('click', renderNextQuestion)
document.getElementById('btn-prev').addEventListener('click', renderPrevQuestion)
document.getElementById('btn-result').addEventListener('click', renderResult)
document.getElementById('btn-repeat').addEventListener('click', repeatTest)