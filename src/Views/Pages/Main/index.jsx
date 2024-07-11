import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Components/Header'
import About from '../../Components/About'
import Marquee from 'react-fast-marquee'
import Paragraph from '../../Components/Paragraph'
import Join from '../../Components/Join'
import Tokenomics from '../../Components/Tokenomics'
import cover from "../../../assets/cover.png"
import CMF1 from "../../../assets/CMF1.png"
import CMF2 from "../../../assets/CMF2.png"
import CMF3 from "../../../assets/CMF3.png"
import CMF4 from "../../../assets/CMF4.png"
import styled from '@emotion/styled'
import HowToBuy from '../../Components/Howtobuy'
import Footer from '../../Components/footer'

const Covimg = styled.img`
  width:100%;
  height: auto;

`
const ImgPug = styled.img`
  width:100%;
  height: auto;

`
const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <Header />

        <Marquee style={{background:"#fff"}}>
          <ImgPug src={CMF3}/>
        <Paragraph color="#000" textTransform="uppercase"  m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF2}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF3}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF4}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF3}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF2}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        <ImgPug src={CMF3}/>

        <Paragraph color="#000" textTransform="uppercase" m={{xs:"10px 20px",sm:"0px 30px"}} fontSize={{xs:"20px",sm:"40px",md:"50px",lg:"60px"}} fontFamily="tls">
            Buy Now
        </Paragraph>
        {/* <ImgPug src={CMF4}/> */}

      </Marquee>
        <About />
        <Join/>
        <Tokenomics/>
        <Covimg src={cover}/>
        <HowToBuy/>
        <Footer/>
    </PageWrapper>
  )
}

export default MainPage