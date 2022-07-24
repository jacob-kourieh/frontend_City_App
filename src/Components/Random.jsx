import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { store } from '..';
import { selectedCity } from '../actions/cityAction';
import plan from "../img/plan.jpg"


function Random({ selectedCity }) {
    let citiesItem = useSelector((state) => state.allProducts.cities);
    const [random, setRandom] = useState([]);
    const [show, setShow] = useState(false)

    //när vår komponent renderas första gången - sätts state till vår store.allProducts.cities
    store.subscribe(() => (setRandom(store.getState().allProducts.cities)));
    useEffect(() => (setRandom(citiesItem)), []);


    //random city function som vi kallar den när klicka på random knapp.
    const randomCity = () => {
        let randomc = Math.floor(Math.random() * citiesItem.length)
        setRandom(citiesItem[randomc])
        setShow(true)

    }





    return (
        <section className='random-container'>

            <article className='random-header' >
                <h3>Want to travel but don't know where to go?</h3>
                <p>Fear no more my confused wandere! Push the button and inspire yourself</p>
                <button onClick={() => randomCity(true)} > Generate my destination </button>
                {!show ? <img src={plan} alt="" /> : null}
            </article>

            {show ?
                <article className='random-info'>
                    <h1> {random.city} </h1>
                    <img src={random.img} alt={random.city} />
                    <h4>  <span> Country: </span> {random.country} </h4>
                    <h5>  <span> Language: </span> {random.language} </h5>
                    <p>  {random.info} </p>

                    <div className="card-btn">
                        <Link to={`/cart/${random.id}`} > <button onClick={() => selectedCity(random)}> Add To Fav
                        </button>  </Link>
                    </div>

                </article>
                : null}


        </section>
    );
}


const mpState = (state) => {
    return {
        currentCity: state.allProducts.currentItem,
    }
}

const addcity = (dispatch) => {
    return {
        selectedCity: (id) => dispatch(selectedCity(id)),
    };
};


export default connect(mpState, addcity)(Random);