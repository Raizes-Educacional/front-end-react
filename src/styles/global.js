import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif !important;

}
.white{
    color: #fff !important;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
}

/* classe que tratam o style component do bootstrap */
.form-control-input{
    border: 1px solid #383838 ;
    margin-top: 5% !important;
    font-size: 20px !important;
    font-family: 'Roboto', sans-serif !important;
    padding: 12px !important;
    width: 300px !important;
}
.text-center{
    text-align: center;
}
.toast-alert{
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 10;

}

`;
export default Global;