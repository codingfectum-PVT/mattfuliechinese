import styled from "@emotion/styled";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import zIndex from "@mui/material/styles/zIndex";
import Paragraph from "../Paragraph";
import howtobuy from '../../../assets/howtobuy.png'
import Tg from '../../../assets/tg.png'
import X from '../../../assets/x.png'
import cover from '../../../assets/fot.png'
import emotionStyled from "@emotion/styled";
import CustomButton from "../CustomButton"
import { CA, tgLink, xLink } from "../../../links";

const SectionWrapper = emotionStyled(Box)`
    background-image: url(${cover});
    background-color:#171717;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 80px 0 0;
    min-height:100vh;
    
`
const CustomGrid = emotionStyled(Grid)`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.fd ? props.fd : "row")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  padding: ${(props) => (props.p ? props.p : "0px")};
  margin: ${(props) => (props.m ? props.m : "0")};
  @media (max-width: 599px) {
    flex-direction: ${(props) => props.fd599};
  }
`;
// text-shadow: 0 2px 5px #ec1826;
//     -webkit-text-stroke: 2px black;
const Iconss = styled.img`
  width:100%;
  height: auto;
  max-width: 50px;

`
const Grids = styled(Grid)`
margin:400px 0 0;

`

const Footer = () => {
    return (
        <SectionWrapper>
            <Container maxWidth="xxl" id="how-to-buy">
                <Container maxWidth="xl" >

                    {/* <Covimg src={cover}/> */}
                    <Grids container sx={{ display: "flex", justifyContent: "Center", gap: { xs: "30px", lg: "50px" } }} >
                        <Grid xs={12} paddingBottom={2} sx={{ textAlign: "-webkit-center" }} >
                            <Typography fontSize={{ xs: "40px", md: "150px" }} variant='h3' textAlign='center' color="#fff" fontFamily="tls" >
                                Ape into<br />
                                $FULIE
                            </Typography>
                            <Box display="flex" alignItems={"center"} justifyContent={"space-between"} width="100%" maxWidth="600px" height="50px" padding="0 20px" sx={{ background: "linear-gradient(to top,#000 10%,#FF0000 0%)", border: "2px solid #000" }}>
                                <Paragraph color="#FFDE00" fontFamily="tls" fontWeight="900">
                                    CA
                                </Paragraph>
                                <Paragraph color="#fff">
                                    {CA}
                                </Paragraph>
                            </Box>
                            <br />
                            <Paragraph fontFamily="rock" color="#fff">
                                Follow $FULIE on Twitter or Telegram
                            </Paragraph>
                            <br />
                            <a href={tgLink}>
                                <Iconss src={Tg} /></a>
                            &nbsp;
                            &nbsp;
                            <a href={xLink}>
                                <Iconss src={X} /></a>
                        </Grid>


                    </Grids>
                </Container>
            </Container>
        </SectionWrapper>
    );
};

export default Footer;