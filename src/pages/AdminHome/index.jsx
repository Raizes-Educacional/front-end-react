import { useContext, useEffect } from "react"
import { Container } from "./style"
import { AuthContext } from "../../store/provider/AuthContext"

export default function AdminHome(){
    const {user, setUser } = useContext(AuthContext);
    useEffect( () => {
        console.log(user)
    }, [])
    return (

        <Container>
            <h1> Hello Word Admin </h1>
        </Container>
    )
}