import { connect } from "react-redux"
import { selectedCity } from "../actions/cityAction";
import { Link } from "react-router-dom";

function CityCard({ selectedCity, currentCity }) {

    return (


        <section>

            <section className="card-container">

                <img src={currentCity.img} alt={currentCity.city} />

                <section className="card-info">
                    <article className="card-text">
                        <h1 >{currentCity.city}</h1>
                        <h4 > <span> Country: </span> {currentCity.country}</h4>
                        <h5 > <span> Language: </span> {currentCity.language}</h5>
                        <p> {currentCity.info} </p>
                    </article>


                    <article className="card-btn">
                        <Link to={`/cart/${currentCity.id}`} > <button onClick={() => selectedCity(currentCity)}>Add To Fav</button> </Link>
                    </article>

                </section>
            </section>


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


export default connect(mpState, addcity)(CityCard);