import styled from "styled-components";

export const Container = styled.div`
    display: flex;


`
export const Wrapper = styled.div`
    margin: 40px;
    p{
        font-family: 'Roboto', sans-serif;
        margin-bottom: 30px;
        font-weight: 400;
    }
    @media screen and (max-width: 350px){
        margin: 20px;
    }
`

export const MarginElements = styled.div`
    margin-bottom: 30px;
    h1{
        font-size: 24px;
    }

`