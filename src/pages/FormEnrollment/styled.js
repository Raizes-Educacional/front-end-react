import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: linear-gradient(135deg,#5139a8, #1b48f2, #64b5f6 );
    @media screen and (max-width: 600px){
        background: #ffff;
    }
    @media screen and (max-width: 380px){
        margin: auto;
    }
`;
export const WrapperChild = styled.div`

    margin: 60px;
    background-color: #fff;
    padding: 40px;
    @media screen and (max-width: 600px){
        margin: 0;
        padding: 10px
    }
    @media screen and (max-width: 600px){
        margin: auto ;
    }
`