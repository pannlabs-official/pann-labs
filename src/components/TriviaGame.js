'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { triviaQuestions } from '@/data/trivia';
import Button from './Button';
import styles from './TriviaGame.module.css';

export default function TriviaGame() {
  const [gameState, setGameState] = useState('start'); // start, playing, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Timer logic
  useEffect(() => {
    if (gameState === 'playing' && !isAnswered && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeOut();
    }
  }, [timeLeft, gameState, isAnswered]);

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    resetTurn();
  };

  const resetTurn = () => {
    setTimeLeft(15);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === triviaQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleTimeOut = () => {
    setIsAnswered(true);
    setSelectedAnswer(-1); // -1 means timeout
  };

  const nextQuestion = () => {
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      resetTurn();
    } else {
      setGameState('results');
    }
  };

  // Views
  if (gameState === 'start') {
    return (
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.startScreen}>
          <div className={styles.iconWrapper}>
            <Trophy size={48} />
          </div>
          <h2>Data Integrity Challenge</h2>
          <p>
            Test your knowledge of data engineering, analytics, and governance. 
            You have 15 seconds per question. Good luck!
          </p>
          <div className={styles.meta}>
            <span>{triviaQuestions.length} Questions</span>
            <span>•</span>
            <span>Multiple Choice</span>
          </div>
          <Button onClick={startGame} variant="primary" size="lg">
            Start Challenge
          </Button>
        </div>
      </motion.div>
    );
  }

  if (gameState === 'results') {
    const percentage = Math.round((score / triviaQuestions.length) * 100);
    let message = "Good effort!";
    if (percentage === 100) message = "Perfect Score! You're a Data Master.";
    else if (percentage >= 80) message = "Excellent work!";
    else if (percentage >= 60) message = "Not bad, but room for improvement.";

    return (
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.resultsScreen}>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/ {triviaQuestions.length}</span>
          </div>
          <h2>{message}</h2>
          <p>You scored {percentage}% on the Data Integrity Challenge.</p>
          <div className={styles.resultsActions}>
            <Button onClick={startGame} variant="primary" icon={<RotateCcw size={16} />}>
              Play Again
            </Button>
            <Button href="/tools" variant="outlineWhite">
              Study Resources
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  const question = triviaQuestions[currentQuestion];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.progressText}>
          Question {currentQuestion + 1} of {triviaQuestions.length}
        </div>
        <div className={`${styles.timer} ${timeLeft <= 5 ? styles.timerDanger : ''}`}>
          <Clock size={16} /> {timeLeft}s
        </div>
      </div>
      
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${((currentQuestion) / triviaQuestions.length) * 100}%` }} 
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion}
          className={styles.questionArea}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={styles.questionText}>{question.question}</h3>

          <div className={styles.optionsGrid}>
            {question.options.map((option, index) => {
              let btnClass = styles.optionBtn;
              if (isAnswered) {
                if (index === question.correctAnswer) btnClass += ` ${styles.correct}`;
                else if (index === selectedAnswer) btnClass += ` ${styles.incorrect}`;
                else btnClass += ` ${styles.disabled}`;
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                >
                  <span className={styles.optionLetter}>{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div 
              className={styles.explanationBox}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.explanationHeader}>
                {selectedAnswer === question.correctAnswer ? (
                  <span className={styles.feedbackCorrect}>Correct!</span>
                ) : selectedAnswer === -1 ? (
                  <span className={styles.feedbackIncorrect}>Time's Up!</span>
                ) : (
                  <span className={styles.feedbackIncorrect}>Incorrect</span>
                )}
              </div>
              <p>{question.explanation}</p>
              <Button onClick={nextQuestion} variant="primary" icon={<ArrowRight size={16} />}>
                {currentQuestion === triviaQuestions.length - 1 ? 'See Results' : 'Next Question'}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
