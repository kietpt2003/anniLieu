import React from 'react'
import { useParams } from 'react-router-dom';

export default function WinnerPage() {
    const yourScore = useParams();
    return (
        <div>WinnerPage. Your score: {yourScore.score}</div>
    )
}
