import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import QuestionForm from './QuestionForm'

const arrQuestion = [
    {
        ques: 'Câu thường nói của Thúy Liễu là gì?',
        arrAnswer: [
            { ans: 'Kiệt kicuc', isCorrect: true },
            { ans: 'kicuc', isCorrect: false },
            { ans: 'ngang ngược', isCorrect: false },
            { ans: 'hết sức ngang ngược', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Thúy Liễu thường làm gì vào những lúc rãnh rỗi?',
        arrAnswer: [
            { ans: 'Ngủ', isCorrect: true },
            { ans: 'Đi ngủ', isCorrect: false },
            { ans: 'Làm chịn riêng', isCorrect: false },
            { ans: 'Làm này làm kia', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Ngày kỉ niệm đáng nhớ nhất?',
        arrAnswer: [
            { ans: '23/03/2022', isCorrect: true },
            { ans: '16/12/2003', isCorrect: false },
            { ans: '29/01/2003', isCorrect: false },
            { ans: '23/11/2023', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Kiệt thường nói gì khi Liễu hong chịu tỉnh dậy?',
        arrAnswer: [
            { ans: 'Dậy đi', isCorrect: true },
            { ans: 'Hư qué', isCorrect: false },
            { ans: 'Ngang ngược', isCorrect: false },
            { ans: 'Học bài đi', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Yêu tui hong?',
        arrAnswer: [
            { ans: 'Ghét', isCorrect: true },
            { ans: 'Hong', isCorrect: false },
            { ans: 'Yêu', isCorrect: false },
            { ans: 'Yêu nhìu nhìu', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Sao á?',
        arrAnswer: [
            { ans: 'Sao trên trời', isCorrect: true },
            { ans: 'Sao là sao', isCorrect: false },
            { ans: 'Sao gì dị bà', isCorrect: false },
            { ans: 'Sao hả', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Thời gian hoạt động tích cực nhất của bạn là?',
        arrAnswer: [
            { ans: 'Tối', isCorrect: true },
            { ans: 'Sáng', isCorrect: false },
            { ans: 'Chiều', isCorrect: false },
            { ans: 'Trưa', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Món nào dưới đây là sở thích của Tuấn Kiệt?',
        arrAnswer: [
            { ans: 'Cơm sườn', isCorrect: true },
            { ans: 'Trứng chiên', isCorrect: false },
            { ans: 'Thúy Liễu', isCorrect: false },
            { ans: 'Bún bò', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Màu mà Kiệt thích?',
        arrAnswer: [
            { ans: 'Vàng, Đỏ', isCorrect: true },
            { ans: 'Vàng', isCorrect: false },
            { ans: 'Đỏ', isCorrect: false },
            { ans: 'Đỏ, Vàng, Xanh', isCorrect: false },
        ],
        isAnswer: false,
    },
    {
        ques: 'Nếu anh nói, yêu em nhiều lắm, em tin hong?',
        arrAnswer: [
            { ans: 'Ọh', isCorrect: true },
            { ans: 'Tin', isCorrect: false },
            { ans: 'Hong', isCorrect: false },
            { ans: 'Đin gùi', isCorrect: false },
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
