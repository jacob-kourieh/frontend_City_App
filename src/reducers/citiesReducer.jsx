const initialState = {
    cities: [],
    cart: [],
    currentItem: []
}



export const citiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {


        //denna har alla cities sparat
        case 'ADD_CITY':
            return { ...state, cities: payload };


        //denna lägger object i listan
        // här kollar om den city finns med i min cart redan så skal inte kunna lägga till igen.
        case 'SELECTED_CITY':
            const item = state.cities.find(city => city.id === payload.id)
            const inCart = state.cart.find((item) =>
                item.id === payload.id ? true : false)

            return {
                ...state, cart: inCart ? state.cart.map((item) =>
                    item.id === payload.id ? { ...item } : item) : [...state.cart, { ...item }]
            };


        //denna tar bort object från cart
        case 'REMOVE_CITY':
            return {
                ...state, cart: state.cart.filter((prod) => prod.id !== payload.id)
            };



        //denna tar emot statet och returnerar det nya state som är "go to city" 
        // när man klickar på den. 

        case "LOAD_CURRENT_ITEM":
            return {
                ...state,
                currentItem: payload,
            };


        default:
            return state;
    }

}
