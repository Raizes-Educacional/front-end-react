import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function ToastMy() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => {
       setShowA(!showA);
       window.location.reload()
    }
  return (
    <Toast show={showA}  
        onClose={toggleShowA}
        bg="danger"
        className="toast-alert">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" onClick={toggleShowA}/>
        <strong className="me-auto">Erro</strong>
   
      </Toast.Header>
      <Toast.Body className="text-white">Email ou senha inválido</Toast.Body>
    </Toast>
  );
}
export default ToastMy;
