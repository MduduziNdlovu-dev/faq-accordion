import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import data from '../../data/data.json'
import QuestionAccordion from './QuestionAccordion'
import Image from 'next/image'

const FAQContainer = () => {
  return (
    <Box
        sx={{
            backgroundColor: "#FFF",
            padding: "2rem",
            borderRadius: "2rem",
            width:"37.5rem",
            height:"auto",
            zIndex:2
        }}
    >
        <Typography
            variant='h2' sx={{
                fontWeight:600
            }}
        >
            
            <Image src="./assets/images/icon-star.svg" width={50} height={50} alt="star" style={{marginRight:"1rem"}}/>FAQs
        </Typography>
        {data.faqs.map((qA)=>{
            return <QuestionAccordion questionAnswer={qA} key={qA.answer}/>
        })}
    </Box>
  )
}

export default FAQContainer