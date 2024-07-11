import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import aboutBg from '../../../assets/join.png'
import aboutImg from '../../../assets/about-img.png'
import joinimg from '../../../assets/imgjoin.png'
import logo from '../../../assets/logo.png'
import { MenuLink, SiteLogo } from '../LockerMenu/styles'
import { Image } from '../../Styles/style'
import Paragraph from '../Paragraph'
import { tgLink } from '../../../links'
import styled from '@emotion/styled'
import cmtimg from "../../../assets/cmtimg.mp4"
const SectionWrapper = emotionStyled(Box)`
    // min-height: 100vh;
    background-image: url(${aboutBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display:grid;
    place-items:center;
    padding:120px 0;
`
const CustomButton = emotionStyled(Button)`
    background:linear-gradient(to top,#000 10%,#FF0000 0%);
    min-width:170px;
    margin-top:20px;
    font-size:22px;
    font-family: "tls";
    color:#FFDE00;
    -webkit-text-stroke:2px;
    -webkit-text-stroke-color:#000;
    border:2px solid #000;
`
const ImgJoin = styled.img`
width:100%;
height:auto;
max-width:400px;
`
const VideoBG = styled.video`
  /* object-fit: cover; */
  width: 100%;
  height: auto;
  max-width:380px;
  /* position: absolute; */
  /* display: block;  */
  /* z-index: 1; */
  border:12px solid #161616;
  box-shadow:-5px 4px 1px 1px #000;
  @media screen and (max-width:543px) {
    /* display: none; */
  } 
`
function Join() {
    return (
        <SectionWrapper>
            <Container maxWidth="xl">
                <Grid container display="flex" alignContent="space-between" justifyContent={"center"}>
                    <Grid item xs={12} lg={9} display="flex" flexDirection="column" alignItems={"center"} sx={{ paddingBottom: '30px' }}>
                        {/* <Image mw="200px" src={aboutImg} alt="Bighorn Reddragon"/> */}
                        <Paragraph fontSize={{ xs: "40px", md: "50px" }} color="#fff" fontFamily="tls" fontWeight="900" marginBottom={1}>
                            CELEBRATE MATT FURIE’S LEGACY BY JOINING THE Chinese MATT FURIE TOKEN COMMUNITY TODAY!
                        </Paragraph>
                        {/* <ImgJoin src={joinimg} /> */}
                        <VideoBG loop autoPlay muted>
                            <source src={cmtimg} />
                        </VideoBG>
                        {/* <video src={} /> */}
                        <CustomButton href={tgLink}>
                            Join Now
                        </CustomButton>

                    </Grid>
                </Grid>
            </Container>
        </SectionWrapper>
    )
}

export default Join