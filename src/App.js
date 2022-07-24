import './App.css';
import Cities from './Components/Cities';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import CityCard from './pages/CityCard';
import Cart from './pages/Cart';
import Header from './Components/Header';
import Random from './Components/Random';
import Footer from './Components/Footer';




function App() {


  return (

    <Router>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Cities />} > </Route>
          <Route path="/cart/:id" element={<Cart />}> </Route>
          <Route path="/cityitem/:id" element={<CityCard />}> </Route>
          <Route path="/random-city" element={<Random />}> </Route>
        </Routes>
      </main>

      <Footer />

    </Router>

  );
}

export default (App);






/* function App({ current }) {
  return (
    <Router>
      <main >

        <Header />
        <Switch>
          <Route exact path="/" component={Cities} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/cityitem/:id" component={CityCard} />
          )}
          <Route exact path="/random-city" component={Random} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.allProducts.currentItem,
  };
};

export default connect(mapStateToProps)(App); */
