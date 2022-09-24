import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-family: 'Roboto', sans-serif !important;
      font-size: 30px;
      text-align: center;
    }
    
`;
export const WrapeerCenter = styled.div`
    margin: auto ;
    display: flex;
    justify-content: center;
    align-items: center ;
`
export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
