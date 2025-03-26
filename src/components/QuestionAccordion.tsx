'use client'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    questionAnswer: {
        question: string,
        answer: string
    }
}

const QuestionAccordion = ({questionAnswer}: Props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const {question, answer} = questionAnswer;
  return (
    <Box>
        <Box
            sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
        >
            <Typography>
                {question}
            </Typography>
            <Button onClick={() => setShowAnswer(!showAnswer)}>+</Button>
        </Box>

        <Box sx={{width:"32.5rem", display: showAnswer ? "block" : "none"}}>
            <Typography>
                {answer}
            </Typography>

        </Box>
        
    </Box>
  )
}

export default QuestionAccordion