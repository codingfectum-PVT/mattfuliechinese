import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import headerimg from '../../../assets/header-img.png'
import logo from '../../../assets/logo.png'
import { MenuLink, SiteLogo } from '../LockerMenu/styles'
import Paragraph from '../Paragraph'
import BigHorn from '../BigHorn'
import { CA, dexToolsLink, tgLink, xLink } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    
`
const MenuLinkex = emotionStyled(MenuLink)`
      color:black;
      
  font-family: "rock";
    @media(min-width: 900px){
        display: inline-block;
        width: unset;
        padding: 0 10px;
        margin: 0;
    }
    @media(max-width: 899px){
        display: none;
    }

`
const MenuLinkLogo = emotionStyled(MenuLink)`
    padding: 0;
    margin: 0;
    text-align: left;
    @media(max-width: 899px){
        padding: 0 10px;
        margin: 0;
    }
`
const CustomButton = emotionStyled(Button)`
    background:linear-gradient(to top,#000000 10%,#FF0000 0%);
    min-width:370px;
    margin-top:20px;
    font-size:22px;
    font-family: "tls";
    color:#FFDE00;
    -webkit-text-stroke:2px;
    -webkit-text-stroke-color:#000;
    border:2px solid #000;
`
function Header() {
    return (
        <SectionWrapper>
            <Container maxWidth="xl">
                <Grid container display="flex" alignContent="space-between" minHeight={{ xs: "calc(100vh - 300px)", lg: "auto" }} justifyContent={"center"}>
                    <Grid xs={12}>
                        <Box style={{ backgroundColor: '#FFFF00', maxWidth: 620, padding: '5px', margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <MenuLinkLogo>
                                <SiteLogo src={logo} />
                            </MenuLinkLogo>
                            <MenuLinkex href={dexToolsLink} target='_blank'>
                                Dextools
                            </MenuLinkex>
                            <MenuLinkex href={xLink} target='_blank'>
                                X(Twitter)
                            </MenuLinkex>
                            <MenuLinkex href={tgLink} target='_blank'>
                                Telegram
                            </MenuLinkex>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8} marginBottom={10} display="flex" flexDirection="column" alignItems={"center"} >
                        <BigHorn />
                        <Paragraph maxWidth="1000px" fontWeight="bold" marginY="10px">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        </Paragraph>
                        {/* <Box display="flex" alignItems={"center"} justifyContent={"space-between"} width="100%" maxWidth="600px" height="50px" padding="0 20px" sx={{ background: "linear-gradient(to top,#fff 10%,#000 0%)", border: "2px solid #000" }}> */}
                            <CustomButton >
                                Buy $CMATT                    </CustomButton>
                        {/* </Box> */}
                    </Grid>
                </Grid>
            </Container>
        </SectionWrapper>
    )
}

export default Header