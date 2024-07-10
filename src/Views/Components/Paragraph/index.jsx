import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = (props) => {
  return (
    <Typography color="#fff" textAlign="center" fontFamily="rock" fontSize="15px" {...props}>
{props.children}
    </Typography>
  )
}

export default Paragraph