const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Trainer Markup Language",
        "Hyper Text Modeling Language",
        "High Text Management Language",
        "Hyperlink Transfer Markup Language",
        "Hyper Toolset Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which CSS property controls the text size?",
      options: [
        "font-size",
        "text-style",
        "text-size",
        "font-style",
        "letter-spacing",
        "font-weight",
        "word-spacing",
        "line-height"
      ],
      answer: "font-size"
    },
    {
      question: "Which language is used to add interactivity to a webpage?",
      options: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "C++",
        "Java",
        "PHP",
        "Ruby"
      ],
      answer: "JavaScript"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: [
        "<a>",
        "<link>",
        "<href>",
        "<hyperlink>",
        "<url>",
        "<anchor>",
        "<nav>",
        "<src>"
      ],
      answer: "<a>"
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: [
        "background-color",
        "bgcolor",
        "color",
        "background-style",
        "bg-style",
        "background",
        "back-color",
        "bg-color"
      ],
      answer: "background-color"
    },
    {
      question: "Which HTML element is used for inserting a line break?",
      options: [
        "<br>",
        "<lb>",
        "<break>",
        "<newline>",
        "<line>",
        "<hr>",
        "<div>",
        "<span>"
      ],
      answer: "<br>"
    },
    {
      question: "How do you select an element with id 'header' in CSS?",
      options: [
        "#header",
        ".header",
        "header",
        "*header",
        "id.header",
        "element#header",
        "header#",
        "@header"
      ],
      answer: "#header"
    },
    {
      question: "What is the correct syntax to link an external CSS file?",
      options: [
        "<link rel='stylesheet' href='style.css'>",
        "<style src='style.css'>",
        "<css link='style.css'>",
        "<stylesheet href='style.css'>",
        "<script src='style.css'>",
        "<style rel='style.css'>",
        "<css href='style.css'>",
        "<stylesheet src='style.css'>"
      ],
      answer: "<link rel='stylesheet' href='style.css'>"
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: [
        "React",
        "Laravel",
        "Bootstrap",
        "Django",
        "Vue",
        "Spring",
        "Angular",
        "Flask"
      ],
      answer: "React"
    },
    {
      question: "Which Bootstrap class centers text?",
      options: [
        "text-center",
        "center-text",
        "align-center",
        "text-align-center",
        "center-content",
        "centered-text",
        "content-center",
        "justify-center"
      ],
      answer: "text-center"
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: [
        "<h1>",
        "<h6>",
        "<header>",
        "<head>",
        "<h0>",
        "<h7>",
        "<title>",
        "<headline>"
      ],
      answer: "<h1>"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
        "Cascading Sheet Styles",
        "Computerized Style Script",
        "Custom Style Syntax",
        "Current Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which input type allows selecting multiple files?",
      options: [
        "file",
        "multiple",
        "files",
        "multifile",
        "upload",
        "multi-upload",
        "select-files",
        "input-files"
      ],
      answer: "file"
    },
    {
      question: "Which pseudo-class targets the first child element?",
      options: [
        ":first-child",
        ":first",
        ":child-first",
        "::first-child",
        ":nth-child(1)",
        ":firstelement",
        ":child(1)",
        "::child-first"
      ],
      answer: ":first-child"
    },
    {
      question: "Which is the correct JavaScript syntax to change content?",
      options: [
        "document.getElementById('demo').innerHTML = 'Hello';",
        "document.demo.innerHTML = 'Hello';",
        "document.getElement('demo').html = 'Hello';",
        "demo.innerText = 'Hello';",
        "getElementById('demo').setText = 'Hello';",
        "document.querySelector('#demo').textContent = 'Hello';",
        "element('demo').innerHTML = 'Hello';",
        "demo.html('Hello');"
      ],
      answer: "document.getElementById('demo').innerHTML = 'Hello';"
    },
    {
      question: "What is the default position value in CSS?",
      options: [
        "static",
        "relative",
        "absolute",
        "fixed",
        "inherit",
        "sticky",
        "initial",
        "none"
      ],
      answer: "static"
    },
    {
      question: "Which tag is used to embed JavaScript code in HTML?",
      options: [
        "<script>",
        "<js>",
        "<javascript>",
        "<code>",
        "<embed>",
        "<insert>",
        "<style>",
        "<scripting>"
      ],
      answer: "<script>"
    },
    {
      question: "Which operator is used to assign a value in JavaScript?",
      options: [
        "=",
        "==",
        "===",
        ":=",
        "->",
        "<-",
        "equals",
        "=>"
      ],
      answer: "="
    }
  ];
  
  
  const quizContainer = document.getElementById('quiz-container');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextBtn = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreText = document.getElementById('score-text');
  const restartBtn = document.getElementById('restart-btn');
  const progressBar = document.getElementById('progress-bar');
  const themeToggle = document.getElementById('theme-toggle');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  
  function updateProgressBar() {
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
  
  function loadQuestion() {
  nextBtn.disabled = true;
  updateProgressBar();

  quizContainer.classList.remove('show');

  setTimeout(() => {
    const currentQ = quizQuestions[currentQuestionIndex];
    questionText.textContent = `Q${currentQuestionIndex + 1}: ${currentQ.question}`;

    optionsContainer.innerHTML = '';
    const shuffledOptions = [...currentQ.options]; 
    shuffleArray(shuffledOptions); 

    shuffledOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.classList.add('btn', 'option-btn', 'w-100');
      btn.textContent = option;
      btn.addEventListener('click', function() {
        checkAnswer(btn, option);
      });
      optionsContainer.appendChild(btn);
    });

    quizContainer.classList.add('show');
  }, 200);
}

  
  function checkAnswer(selectedBtn, selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
  
    Array.from(optionsContainer.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
      }
    });
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      quizContainer.classList.add('d-none');
      resultContainer.classList.remove('d-none');
      scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}`;
    }
  });
  
  restartBtn.addEventListener('click', function() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('d-none');
    resultContainer.classList.add('d-none');
    loadQuestion();
  });
  
  
  function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('quiz-theme', isDark ? 'dark' : 'light');
  }
  
  themeToggle.addEventListener('click', function() {
    const isDark = !document.body.classList.contains('dark');
    setTheme(isDark);
  });
  
  
  if (localStorage.getItem('quiz-theme') === 'dark') {
    setTheme(true);
  }
  
  updateProgressBar();
  loadQuestion();

  function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

  