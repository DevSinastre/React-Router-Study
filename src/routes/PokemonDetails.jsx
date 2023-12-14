import { Link } from "react-router-dom";

const PokemonDetails = () =>{
    return(
        <div>
            <h1>Pokemon Details</h1>
            <p>
                <Link to="1">Detalhes do pokemon 1</Link>
            </p>
            <p>
                <Link to="2">Detalhes do pokemon 2</Link>
            </p>
            <p>
                <Link to="3">Detalhes do pokemon 3</Link>
            </p>
        </div>
    )
}

export default PokemonDetails;