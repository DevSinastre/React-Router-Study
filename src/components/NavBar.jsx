import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
            <Link to='/React-Router-Study/'>Pokemons</Link>
            <Link to='/React-Router-Study/details'>Pokemon Details</Link>
        </nav>
    )
}

export default NavBar;