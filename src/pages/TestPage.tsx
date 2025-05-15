
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const questions = [
  {
    question: "Кто из героев Дагестана был дважды удостоен звания Героя Советского Союза?",
    options: [
      "Магомед Гаджиев", 
      "Амет-Хан Султан", 
      "Валентин Эмиров", 
      "Ризван Сулейманов"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой род войск представлял Магомед Гаджиев?",
    options: [
      "Пехота", 
      "Авиация", 
      "Подводный флот", 
      "Артиллерия"
    ],
    correctAnswer: 2
  },
  {
    question: "Какое количество вражеских самолетов сбил Амет-Хан Султан?",
    options: [
      "30", 
      "49", 
      "52", 
      "27"
    ],
    correctAnswer: 1
  },
  {
    question: "Какое воинское звание имел Валентин Эмиров?",
    options: [
      "Капитан", 
      "Майор", 
      "Старший лейтенант", 
      "Полковник"
    ],
    correctAnswer: 0
  },
  {
    question: "При форсировании какой реки особо отличился Ризван Сулейманов?",
    options: [
      "Дон", 
      "Днепр", 
      "Волга", 
      "Висла"
    ],
    correctAnswer: 1
  },
  {
    question: "Сколько солдат и офицеров противника уничтожил Магомед-Загид Абдулманапов в бою за высоту под Новороссийском?",
    options: [
      "Около 50", 
      "Около 70", 
      "Около 100", 
      "Около 120"
    ],
    correctAnswer: 2
  },
  {
    question: "Кто из героев Дагестана был снайпером?",
    options: [
      "Шамсулла Алиев", 
      "Сумен Курбанов", 
      "Александр Ситковский", 
      "Ризван Сулейманов"
    ],
    correctAnswer: 0
  },
  {
    question: "Какой орден получил Сумен Курбанов всех трех степеней?",
    options: [
      "Орден Красной Звезды", 
      "Орден Славы", 
      "Орден Отечественной войны", 
      "Орден Красного Знамени"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой прием воздушного боя применил в одном из сражений Валентин Эмиров?",
    options: [
      "Бочка Нестерова", 
      "Воздушный таран", 
      "Иммельман", 
      "Вираж"
    ],
    correctAnswer: 1
  },
  {
    question: "В каком году погиб Магомед Гаджиев?",
    options: [
      "1941", 
      "1942", 
      "1943", 
      "1944"
    ],
    correctAnswer: 1
  },
  {
    question: "Сколько боевых вылетов совершил Амет-Хан Султан?",
    options: [
      "303", 
      "403", 
      "503", 
      "603"
    ],
    correctAnswer: 3
  },
  {
    question: "Кто командовал 390-м стрелковым полком?",
    options: [
      "Ризван Сулейманов", 
      "Александр Ситковский", 
      "Сумен Курбанов", 
      "Магомед-Загид Абдулманапов"
    ],
    correctAnswer: 1
  },
  {
    question: "Какое крупное сражение произошло в 1943 году, в котором участвовали многие герои Дагестана?",
    options: [
      "Битва за Москву", 
      "Сталинградская битва", 
      "Курская битва", 
      "Битва за Берлин"
    ],
    correctAnswer: 2
  },
  {
    question: "Сколько Героев Советского Союза дал Дагестан во время Великой Отечественной войны?",
    options: [
      "39", 
      "57", 
      "64", 
      "78"
    ],
    correctAnswer: 0
  },
  {
    question: "В каком году началась Великая Отечественная война?",
    options: [
      "1939", 
      "1940", 
      "1941", 
      "1942"
    ],
    correctAnswer: 2
  }
];

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption !== null ? selectedOption : -1;
    setAnswers(newAnswers);
    
    // Update score
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-dagestan-dark text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {!showResult ? (
            <Card className="bg-dagestan-dark/80 border-dagestan-gray/30">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Вопрос {currentQuestion + 1} из {questions.length}</span>
                    <span className="text-sm text-dagestan-gold">Баллы: {score}</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-gray-700" />
                </div>

                <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>

                <div className="space-y-4 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-md border transition-all ${
                        selectedOption === index 
                          ? 'border-dagestan-gold bg-dagestan-gold/10' 
                          : 'border-gray-700 hover:border-dagestan-gold/70 hover:bg-dagestan-gold/5'
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                          selectedOption === index ? 'bg-dagestan-gold text-dagestan-dark' : 'bg-gray-700'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        {option}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-dagestan-gold text-dagestan-gold hover:bg-dagestan-gold/10"
                    onClick={() => window.history.back()}
                  >
                    Вернуться
                  </Button>
                  <Button
                    className="bg-dagestan-gold text-dagestan-dark hover:bg-dagestan-gold/80"
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                  >
                    {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-dagestan-dark/80 border-dagestan-gray/30">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Результаты теста</h2>
                
                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 rounded-full bg-dagestan-dark border-4 border-dagestan-gold flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold">{Math.round((score / questions.length) * 100)}%</span>
                  </div>
                  <p className="text-xl">
                    Вы ответили правильно на {score} из {questions.length} вопросов
                  </p>
                  
                  {score === questions.length && (
                    <div className="mt-4 text-dagestan-gold flex items-center">
                      <Icon name="Award" size={24} className="mr-2" />
                      <span>Отличный результат! Вы настоящий знаток истории!</span>
                    </div>
                  )}
                  
                  {score >= questions.length * 0.7 && score < questions.length && (
                    <div className="mt-4 text-dagestan-gold flex items-center">
                      <Icon name="ThumbsUp" size={24} className="mr-2" />
                      <span>Хороший результат! Вы хорошо знаете историю героев Дагестана!</span>
                    </div>
                  )}
                  
                  {score < questions.length * 0.7 && (
                    <div className="mt-4 text-gray-300 flex items-center">
                      <Icon name="BookOpen" size={24} className="mr-2" />
                      <span>Изучите больше информации о героях Дагестана и попробуйте снова!</span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    className="border-dagestan-gold text-dagestan-gold hover:bg-dagestan-gold/10"
                    asChild
                  >
                    <Link to="/">На главную</Link>
                  </Button>
                  <Button
                    className="bg-dagestan-gold text-dagestan-dark hover:bg-dagestan-gold/80"
                    onClick={handleRestart}
                  >
                    Пройти тест снова
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TestPage;
