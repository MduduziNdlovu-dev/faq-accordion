'use client'
import { Box, Button, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    questionAnswer: {
        question: string,
        answer: string
    }
}

const QuestionAccordion = ({ questionAnswer }: Props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const { question, answer } = questionAnswer;
    const theme = useTheme(); // Get theme for breakpoints

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
                borderBottom: "1px solid hsla(0, 0.00%, 10.20%, 0.09)",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "1rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "32.5rem",
                }}
            >
                <Typography 
                    sx={{
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        "&:hover": { color: "#ad25eb" },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: "1rem"
                        }
                    }}
                >
                    {question}
                </Typography>

                <Button 
                    onClick={() => setShowAnswer(!showAnswer)}
                    sx={{
                        backgroundColor: showAnswer ? "#301534" : "#ad28eb",
                        borderRadius: "50%",
                        minWidth: "32px",
                        height: "32px",
                        color: "white",
                        "&:hover": { backgroundColor: "#301534" },
                        [theme.breakpoints.down('sm')]: {
                            minWidth: "28px",
                            height: "28px"
                        }
                    }}
                >
                    {showAnswer ? "-" : "+"}
                </Button>
            </Box>

            <Box sx={{ width: "100%", maxWidth: "32.5rem", display: showAnswer ? "block" : "none", fontSize: "16px", fontWeight: "100" }}>
                <Typography sx={{ color: "#8b6990", fontSize: "1rem", [theme.breakpoints.down('sm')]: { fontSize: "0.9rem" } }}>
                    {answer}
                </Typography>
            </Box>
        </Box>
    )
}

export default QuestionAccordion
