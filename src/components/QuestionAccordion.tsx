'use client'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
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
    <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
            padding:"1rem",
            borderBottom:"1px solid hsla(0, 0.00%, 10.20%, 0.40)",
            justifyContent:"center",
            alighnItems:"center",
            width: "35rem"
        }}
    >
        <Box
            sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
        >
            <Typography 
                sx={{
                    fontWeight:600,
                    "&:hover":{
                        color:"#ad25eb"
                    }
                }}
            >
                {question}
            </Typography>
            <Button onClick={() => setShowAnswer(!showAnswer)}
                sx={{
                    backgroundColor: showAnswer ? "#301534" : "#ad28eb",
                    borderRadius:"50%",
                    minWidth:"32px",
                    height:"32px",
                    color:"white",
                    "&:hover": {
                        backgroundColor: "#301534"
                        }

                }}    
            >
                {showAnswer ? "-" : "+"}
            </Button>
        </Box>

        <Box sx={{width:"32.5rem", display: showAnswer ? "block" : "none", fontSize:"16px",fontWeight:"100"}}>
            <Typography sx={{color:"#8b6990"}}>
                {answer}
            </Typography>

        </Box>
        
    </Box>
  )
}

export default QuestionAccordion