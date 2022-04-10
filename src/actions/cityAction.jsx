
export const addCity = (city) => {
    return {
        type: "ADD_CITY",
        payload: city,
    }
};


export const selectedCity = (city) => {
    return {
        type: "SELECTED_CITY",
        payload: city,

    };
};



export const removeCity = (city) => (
    {
        type: "REMOVE_CITY",
        payload: city,
    }
)


export const loadCurrentItem = (item) => {
    return {
        type: "LOAD_CURRENT_ITEM",
        payload: item,
    };
};


