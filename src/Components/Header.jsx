import { Link } from "react-router-dom";
import homeIcon from "../img/homeIcon.svg"
import randomIcon from "../img/randomIcon.svg"
import favoritIcon from "../img/favoriteIcon.svg"



function Header() {



  return (
    <nav >

      <Link to="/"> <h1 className="logo">MY <span className="logoh1">Destino</span> </h1> </Link>

      <ul>
        <li> <Link to="/"> <article className="logo"> <button ><img className="img-logo" src={homeIcon} alt="" /> </button></article> </Link></li>
        <li> <Link to="random-city"> <button> <img className="img-logo" src={randomIcon} alt="" /></button> </Link></li>
        <li> <Link to="/cart/:id"> <button> <img className="img-logo" src={favoritIcon} alt="" />  </button> </Link></li>
      </ul>

    </nav>
  );
}



export default (Header);