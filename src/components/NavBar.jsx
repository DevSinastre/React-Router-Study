import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
            <Link to='/'>Pokemons</Link>
            <Link to='/details'>Pokemon Details</Link>
        </nav>
    )
}

export default NavBar;