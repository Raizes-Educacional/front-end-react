import styled from 'styled-components';


export const Container = styled.div`
    margin: 40px;
    display:flex;
    justify-content: center;
    align-items: center ;

    `
export const ContainerGrandma = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    `
export const ContainerParent = styled.div`
    display: flex ;
    flex-direction: column;
    width: 100% ;
    `
export const ContainerChild = styled.div`
    display: flex;
    justify-content: center ;
    width: 100%;
    div{
        width: 100% ;
    }
`
export const InputForm = styled.div`
    margin: 10px;
    div{
        width: 100%;
    }

`

export const ButtonS = styled.button`
    width: 50%;
    padding: 5px;
    color: #fff;
    border: none;
    color: #fff;
    background: #1b48f2;
    border-bottom: 10px #383838;
    border-radius: 35px;
  
`;
