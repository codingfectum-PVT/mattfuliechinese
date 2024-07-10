import emotionStyled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'

const StyledButton = emotionStyled(Button)`
    background: #00FF00 !important;
    border:3px solid #000;
    color:#000 !important;
    font-family:dd;
    padding:0px 15px;
    border-radius:0;
    box-shadow:-5px 5px 0px #000;
    // font-weight:900;
    font-size:22px;

    transition: all 0.2s ease;
    @media(max-width:599px){
    font-size:18px;
    }
    :active{
      
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        transform: translateY(2px);
    
    }
`
const CustomButton = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default CustomButton