'use client'
import React from 'react'
import Box from '@mui/material/Box'
import { Typography, useTheme } from '@mui/material'
import data from '../../data/data.json'
import QuestionAccordion from './QuestionAccordion'
import Image from 'next/image'

const FAQContainer = () => {
  const theme = useTheme(); // Get theme for breakpoints

  return (
    <Box
        sx={{
            backgroundColor: "#FFF",
            padding: "2rem",
            borderRadius: "2rem",
            maxWidth: "37.5rem",
            width: "100%",
            height: "auto",
            zIndex: 2,
            [theme.breakpoints.down('md')]: {
                padding: "1.5rem",
                maxWidth: "30rem"
            },
            [theme.breakpoints.down('sm')]: {
                padding: "1rem",
                maxWidth: "90%",
                borderRadius: "1.5rem"
            }
        }}
    >
        <Typography
            variant='h2' 
            sx={{
                fontWeight:600,
                display: "flex",
                alignItems: "center",
                fontSize: "1.8rem",
                [theme.breakpoints.down('sm')]: {
                    fontSize: "1.5rem"
                }
            }}
        >
            <Image src="./assets/images/icon-star.svg" width={50} height={50} alt="star" style={{ marginRight: "1rem" }} />
            FAQs
        </Typography>
        
        {data.faqs.map((qA) => (
            <QuestionAccordion questionAnswer={qA} key={qA.answer} />
        ))}
    </Box>
  )
}

export default FAQContainer
