const initialState = {
    cities: [],
    cart: [],
    currentItem: null,
}



export const citiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {



        case 'ADD_CITY':
            return { ...state, cities: payload };



        case 'SELECTED_CITY':
            const item = state.cities.find(city => city.id === payload.id)
            const inCart = state.cart.find((item) =>
                item.id === payload.id ? true : false)

            return {
                ...state, cart: inCart ? state.cart.map((item) =>
                    item.id === payload.id ? { ...item } : item) : [...state.cart, { ...item }]
            };


        case 'REMOVE_CITY':
            return {
                ...state, cart: state.cart.filter((prod) => prod.id !== payload.id)
            };


        case "LOAD_CURRENT_ITEM":
            return {
                ...state,
                currentItem: payload,
            };


        default:
            return state;
    }

}
