import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import QuestionForm from './QuestionForm'

const arrQuestion = [
    {
        ques: 'question 1',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 2',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 3',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 4',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 5',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 6',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 7',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 8',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 9',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'question 10',
        arrAnswer: [
            { ans: 'answer A', isCorrect: true },
            { ans: 'answer B', isCorrect: false },
            { ans: 'answer C', isCorrect: false },
            { ans: 'answer D', isCorrect: false },
        ],
        isAnswer: false,
    }
]

export default function QuestionPage() {
    function shuffleArray(array) {
        const shuffledArray = [...array]; // Create a copy of the original array

        // Perform Fisher-Yates shuffle
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }
    const [shuffledQuestions, setShuffle] = useState(shuffleArray(arrQuestion));
    const [currentQuestion, setCurrent] = useState(0);
    const [totalScore, setScore] = useState(0);

    // Function to handle displaying the next question
    const showNextQuestion = () => {
        let isEnd = false
        if (currentQuestion != 9) {
            setCurrent((prevIndex) => prevIndex + 1);
        } else {
            isEnd = true;
        }
        return isEnd;
    };

    return (
        <QuestionForm question={shuffledQuestions[currentQuestion]} arrQuestion={arrQuestion} setShuffle={setShuffle} totalScore={totalScore} currentQuestion={currentQuestion} setCurrent={setCurrent} showNextQuestion={showNextQuestion} setScore={setScore} />
    )
}
