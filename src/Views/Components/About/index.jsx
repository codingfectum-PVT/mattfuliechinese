import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import aboutBg  from '../../../assets/aboutBg.jpg'
import aboutImg  from '../../../assets/about-img.png'
import logo  from '../../../assets/logo.png'
import { MenuLink, SiteLogo } from '../LockerMenu/styles'
import { Image } from '../../Styles/style'
import Paragraph from '../Paragraph'
import { tgLink } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background-image: url(${aboutBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display:grid;
    place-items:center;
    
`
const CustomButton = emotionStyled(Button)`
    background:linear-gradient(to top,#fff 10%,#FF006A 0%);
    min-width:170px;
    margin-top:20px;
    font-size:22px;
    font-family: "TheLastShuriken";
    color:#fff;
    -webkit-text-stroke:2px;
    -webkit-text-stroke-color:#000;
    border:2px solid #000;
`
function AboutSection() {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container display="flex" alignContent="space-between" justifyContent={"center"}>
                <Grid item xs={12} lg={9} display="flex" flexDirection="column" alignItems={"center"} sx={{background:"linear-gradient(to top,#161616 85%,transparent 0%)", paddingBottom: '30px'}}>
                    <Image mw="200px" src={aboutImg} alt="Bighorn Reddragon"/>
                    <Paragraph fontSize={{xs:"40px",md:"50px"}} color="#fff" fontFamily="TheLastShuriken" fontWeight="900" marginBottom={1}>
                    <span style={{color: '#FF0000'}}>$CMATT</span> is <span style={{color: '#50FF06'}}>live!!</span>
                    </Paragraph>
                    <Paragraph  color="#fff" maxWidth={740} padding={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</Paragraph>
                    <CustomButton href={tgLink}>
                        ape In
                    </CustomButton>
                    <Paragraph fontFamily="" color="#808080" marginTop={2}>
                        JEETERS GO HOME
                    </Paragraph>
                    
                </Grid>
            </Grid>
        </Container>
    </SectionWrapper>
  )
}

export default AboutSection