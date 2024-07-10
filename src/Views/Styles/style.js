import styled from "@emotion/styled";

const PageWrapper = styled.div`
    background-color: ${ (props) => props.theme.pageColor};
    min-height: 100vh;
`

const Image = styled.img`
    width: 100%;
    max-width: ${props=>props.mw ? props.mw : "100%"};
    height: auto;
`

export { PageWrapper ,Image}