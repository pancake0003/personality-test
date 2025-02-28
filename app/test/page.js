// test page --questions
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TestUI from './TestUI'; // Import external HTML component

export default function Test() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState('');

    const questions = [
        { id: 'q1', text: 'What climate do you prefer?', options: ['Hot', 'Cold', 'Temperate', 'Extreme'] },
        { id: 'q2', text: 'Do you prefer solitude or a bustling environment?', options: ['Solitude', 'Busy', 'A mix'] },
        { id: 'q3', text: 'Would you rather live on a rocky planet or a gas giant?', options: ['Rocky', 'Gas Giant'] }
    ];

    const handleSelect = (option) => {
        setAnswers({ ...answers, [questions[currentQuestion].id]: option });
        setError(''); // Clear error when an option is selected
    };

    const nextQuestion = () => {
        if (!answers[questions[currentQuestion].id]) {
            setError('Please select an answer before proceeding.');
            return;
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length < questions.length) {
            setError('Please answer all questions before submitting.');
            return;
        }
        const score = calculatePlanet(answers);
        router.push(`/result?planet=${score}`);
    };

    const calculatePlanet = (answers) => {
        if (answers.q1 === 'Hot' && answers.q3 === 'Rocky') return 'Mars';
        if (answers.q1 === 'Cold') return 'Europa';
        if (answers.q2 === 'Solitude') return 'Pluto';
        return 'Earth-like';
    };

    return (
        <TestUI 
            question={questions[currentQuestion]} 
            answers={answers} 
            handleSelect={handleSelect} 
            nextQuestion={nextQuestion} 
            prevQuestion={prevQuestion} 
            handleSubmit={handleSubmit} 
            error={error} 
            currentQuestion={currentQuestion} 
            totalQuestions={questions.length}
        />
    );
    
}