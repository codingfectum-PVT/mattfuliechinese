import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Components/Header'
import About from '../../Components/About'

const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <Header />
        <About />
    </PageWrapper>
  )
}

export default MainPage