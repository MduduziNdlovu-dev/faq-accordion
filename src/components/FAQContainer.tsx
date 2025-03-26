import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import data from '../../data/data.json'
import QuestionAccordion from './QuestionAccordion'

const FAQContainer = () => {
  return (
    <Box
        sx={{
            backgroundColor: "#FFF",
            padding: "2rem",
            borderRadius: "2rem"
        }}
    >
        <Typography
            variant='h1'
        >
            FAQs
        </Typography>
        {data.faqs.map((qA)=>{
            return <QuestionAccordion questionAnswer={qA} key={qA.answer}/>
        })}
    </Box>
  )
}

export default FAQContainer