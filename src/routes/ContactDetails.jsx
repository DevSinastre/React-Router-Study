import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () =>{
    const {id} = useParams();

    //6 - redirect
    const navigate = useNavigate();

    const handleContact = () =>{
        console.log('mensagem enviada');
        return navigate("/");
    };

    return(
        <div>
            <h1>Exibindo informações do pokemon: {id}</h1>
            <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    )
}

export default ContactDetails;