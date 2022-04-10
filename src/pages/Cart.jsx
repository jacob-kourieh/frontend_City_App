import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { removeCity, loadCurrentItem } from "../actions/cityAction"
import { store } from '..';
import { useEffect, useState } from "react";


function Cart({ currentCity, removeCity, loadCurrentItem }) {

    const [favCities, setFavCities] = useState([]);

    store.subscribe(() => (setFavCities(store.getState().allProducts.cart)));
    //när vår komponent renderas första gången - sätts state till vår store.allpr..cart
    useEffect(() => (setFavCities(currentCity)), []);


    return (

        <section >
            <h3 className="fav-text">My favorite cities list: </h3>
            {favCities.map((city, i) => (
                <section className="cart-container" key={i}>

                    <Link to={`/cityitem/${city.id}`}>
                        <article onClick={() => loadCurrentItem(city)} className="img-container"> <img src={city.img} alt={city.city} /> </article>
                    </Link>

                    <article className="info-container">
                        <h2> {city.city} </h2>
                        <h1 >{city.country} </h1>
                        <button onClick={() => removeCity(city)} >Remove</button>
                        <Link to={`/cityitem/${city.id}`}> <button onClick={() => loadCurrentItem(city)}>Go to city</button> </Link>
                    </article>

                </section>
            ))}
        </section>
    )
}

const toState = state => {
    return {
        currentCity: state.allProducts.cart
    }
}


const cityDispatch = dispatch => {
    return {
        removeCity: (remove) => dispatch(removeCity(remove)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}


export default connect(toState, cityDispatch)(Cart);