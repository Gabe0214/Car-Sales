
export const ADD_FEATURES = 'ADD_FEATURES'
export const REMOVE_FEATURES = 'REMOVE_FEATURES'


export const addFeature = (feature) => (
    {
        type: ADD_FEATURES,
        payload: feature
     }
)


export const removeFeature = (feature) => (
    { 
        type: REMOVE_FEATURES,
        payload: feature
    }
)