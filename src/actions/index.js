import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from '../constant'
import getDataApi from '../api'

export const selected_tab = (tabId) => {
    return {
        type: 'selected_tab',
        payload: tabId
    }
}

export const getData = () => {
    return 'FETCHING_DATA'
}

export const getDataSuccess = data => {
    return {
        type: 'FETCHING_DATA_SUCCESS',
        data
    }
}

export const getDataFailure = () => {
    return 'FETCHING_DATA_FAILURE'
}

// A través del siguiente 'action' se hará la petició a la API
export const fetchData = () => {
    // return function
    return (dispatch) => {
        dispatch(getData());
        getDataApi()
            .then(([res, json]) => {
                dispatch(getDataSuccess(json))
            })
            .catch(err => console.warn(err));
    }
}
// Se hace uso de la librería 'redux-thunk' (npm i --save redux-thunk)