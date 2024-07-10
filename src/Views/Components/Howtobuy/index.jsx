import styled from "@emotion/styled";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import zIndex from "@mui/material/styles/zIndex";
import Paragraph from "../Paragraph";
import howtobuy from '../../../assets/howtobuy.png'
import emotionStyled from "@emotion/styled";


const SectionWrapper = emotionStyled(Box)`
    background-image: url(${howtobuy});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 80px 0;
    
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
const HowToBuy = () => {
    return (
        <SectionWrapper>
            <Container maxWidth="xxl" id="how-to-buy">
                <Container maxWidth="xl" >
                <Grid xs={12} paddingBottom={2}>
                    <Typography variant='h3' textAlign='center' color="#000" fontFamily="tls" >How to Buy</Typography>
                    {/* <Typography variant='subtitle1' textAlign='center' color="#fff"  >You are early...</Typography> */}
                </Grid>
                    <Grid container sx={{ display: "flex",textAlign: "-webkit-center", justifyContent: "Center", gap: { xs: "30px", lg: "50px" } }} >
                     <Grid item xs={12}>
                        <Box sx={{ border: "1px solid black", backgroundColor: "#fff", width: "100%", maxWidth: "600px", minHeight: "220px", padding: "30px 30px 35px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "5px" }}>
                            <Paragraph variant="h5" fontSize="25px" color="black" margin="auto" fontFamily="tls">
                                1. WALLET
                            </Paragraph>
                            <Paragraph color="black" placeSelf="center" variant="body2" textAlign="center" minHeight="80px" alignSelf="center" fontSize={{ xs: "17px" }}>Create a metamask wallet.</Paragraph>
                        </Box>
                     </Grid>
                     <Grid item xs={12}>
                        <Box sx={{ border: "1px solid black", backgroundColor: "#fff", width: "100%", maxWidth: "600px", minHeight: "220px", padding: "30px 30px 35px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "5px" }}>
                            <Paragraph variant="h5" fontSize="25px" color="black" margin="auto" fontFamily="tls">
                            2. GET SOME ETH
                            </Paragraph>
                            <Paragraph color="black" placeSelf="center" variant="body2" textAlign="center" minHeight="80px" fontSize={{ xs: "17px" }}>Buy some ETH in the exchange and send ETH to your metamask wallet.</Paragraph>
                        </Box>
                     </Grid>
                     <Grid item xs={12}>
                        <Box sx={{ border: "1px solid black", backgroundColor: "#fff", width: "100%", maxWidth: "600px", minHeight: "220px", padding: "30px 30px 35px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "5px" }}>
                            <Paragraph variant="h5" fontSize="25px" color="black" margin="auto" fontFamily="tls">
                            3. SWAP ETH  $CMATT                            </Paragraph>
                            <Paragraph color="black" placeSelf="center" variant="body2" textAlign="center" minHeight="80px" fontSize={{ xs: "17px" }}>Acquire Ethereum (ETH) from a reputable exchange to load your wallet.</Paragraph>
                        </Box>

                     </Grid>
                    </Grid>
                </Container>
            </Container>
        </SectionWrapper>
    );
};

export default HowToBuy;