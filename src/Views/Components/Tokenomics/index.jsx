import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { MenuLink } from '../LockerMenu/styles'
import emotionStyled from '@emotion/styled'
import tax from "../../../assets/tax.png"
import supplyImg from "../../../assets/supply.png"
import tokoimg from "../../../assets/tokoimg.png"
import x from "../../../assets/x.png"
import tg from "../../../assets/tg.png"
import dexscreener from "../../../assets/dexscreener.png"
import dextools from "../../../assets/dextools.png"
import uniswap from "../../../assets/uniswap.png"
import { buySellTax, dexScreenerLink, dexToolsLink, supply, tgLink, uniSwapLink, xLink } from '../../../links'

const SocialLogo = emotionStyled.img`
    width: 40px;
    height: auto;
`

const SectionWrapper = emotionStyled(Box)`
    // min-height: 100vh;
    background-image: url(${tokoimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display:grid;
    place-items:center;
    // padding:120px 0;
`

function Tokenomics() {
  return (
    <SectionWrapper>
    <Box sx={{paddingTop: 7, paddingBottom: 7}}>
        <Container maxWidth="xl">
            <Grid container justifyContent='center'>
                <Grid xs={12} paddingBottom={2}>
                    <Typography variant='h3' textAlign='center' color="#fff" fontFamily="tls" >TOKENOMICS</Typography>
                    {/* <Typography variant='subtitle1' textAlign='center' color="#fff"  >You are early...</Typography> */}
                </Grid>
                <Grid xs={12} md={9} container>
                    <Grid xs={12} md={6} padding={2}>
                        <Box sx={{backgroundColor:'#fff', padding:2}}>
                            <img src={tax} style={{width: '100%'}} /> 
                            <Typography variant='h4' paddingTop={1} textAlign='left' color="#000" fontFamily="tls" >Taxes: {buySellTax}</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} padding={2}>
                        <Box sx={{backgroundColor:'#fff', padding:2}}>
                            <img src={supplyImg} style={{width: '100%'}} /> 
                            <Typography variant='h4' paddingTop={1} textAlign='left' color="#000" fontFamily="tls" >Supply: {supply}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid xs={12} textAlign='center'>
                    <Typography variant='subtitle1' paddingY={2} textAlign='center' color="#fff"  >Social & Onchain Data</Typography>
                    <MenuLink href={xLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={x} />
                    </MenuLink>
                    <MenuLink href={tgLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={tg} />
                    </MenuLink>
                    <MenuLink href={dexScreenerLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={dexscreener} />
                    </MenuLink>
                    <MenuLink href={dexToolsLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={dextools} />
                    </MenuLink>
                    <MenuLink href={uniSwapLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={uniswap} />
                    </MenuLink>
                </Grid>
            </Grid>
        </Container>
    </Box>
    </SectionWrapper>
  )
}

export default Tokenomics