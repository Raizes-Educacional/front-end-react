import {React} from 'react'

//Imgs
import RaizesLogo from '../../assets/Raízes.png';
//css
import { Container, LogoRaizes } from './styled.js';
export default function notFound(){
    return(
        <Container>
            <LogoRaizes src={RaizesLogo} alt="Raizes"/>
        </Container>
    )
}