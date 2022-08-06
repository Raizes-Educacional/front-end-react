import styledComponents from "styled-components";

export const Container = styledComponents.section`
    background: #383838;
    height:  100vh;
    display: flex;
    justify-content: center;
    align-items: center
`;
export const ContainerFlex = styledComponents.div`
    background: #fff;
    width: 35vw;
    height: 60vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Form = styledComponents.form`
    margin: 10%
`;
export const InputFormLogin = styledComponents.input`
    width: 100%;
    border-bottom: #383838;
    margin-bottom: 30%;
`;
