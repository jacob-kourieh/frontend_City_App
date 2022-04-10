import searchIcon from "../img/searchIcon.svg"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { addCity, selectedCity, loadCurrentItem } from '../actions/cityAction';
import { Link } from "react-router-dom";




function Cities({ setCity, loadCurrentItem }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [cities, setCities] = useState([])
    const dispatch = useDispatch();
    const url = 'https://backend-city-be57nqltj-jacob-kourieh.vercel.app/cities.json'


    //tar emot ipet genom att fetcha här
    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => (setCities(data)))
    }, [])


    //Dispatchar addCity action och uppdatterar den initialStatet och returnerar den till data apiet.
    useEffect(() => {
        dispatch(addCity(cities))
    }, [cities])





    return (
        <section>
            <header className="bigCon">

                <article className="boxContainer">

                    <input type="search" placeholder="Search City / Country " className="search"
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} />

                    <article className="search-btn"> <img src={searchIcon} className="search-icon" alt="seach-icon" />
                    </article>
                </article>

            </header>

            <h2 className='travel-text'>Travel far enough, you meet yourself</h2>

            <main className="items">

                {cities.filter((value) => {
                    if (searchTerm === "") {
                        return value
                    }
                    else if (value.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        value.country.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value
                    }

                }).map((city, index) => {
                    return (
                        <section key={index} className="item">

                            <Link to={`/cityitem/${city.id}`}>
                                <section onClick={() => loadCurrentItem(city)}>
                                    <img src={city.img} alt="" />
                                    <h2 >{city.city}</h2>
                                    <h4 > <span> Country: </span> {city.country}</h4>
                                </section>
                            </Link>
                            <article className="btn-item">
                                <Link to={`/cart/${city.id}`} >
                                    <button onClick={() => setCity(city)} > Add To Fav </button> </Link>
                                <Link to={`/cityitem/${city.id}`}> <button onClick={() => loadCurrentItem(city)}>Go to city</button> </Link>
                            </article>

                        </section>

                    )
                })}


            </main>
        </section >
    );

};



const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (item) => dispatch(selectedCity(item)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}



export default connect(null, mapDispatchToProps)(Cities)