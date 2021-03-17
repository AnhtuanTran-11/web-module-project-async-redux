import axios from 'axios';

export const FETCH_PIC_LOADING = "FETCH_PIC_LOADING";
export const FETCH_PIC_SUCCESS = "FETCH_PIC_SUCCESS";
export const FETCH_PIC_FAIL = "FETCH_PIC_FAIL";

export const getPic = () => dispatch => {
    dispatch(fetchPicLoading());
    
    axios
    .get('https://random.dog/woof.json')
    .then(res => {
      dispatch(fetchPicSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchPicFail(err));
    })
  }

  export const fetchPicLoading = () => {
      return ({type: FETCH_PIC_LOADING});
  }

  export const fetchPicSuccess = (pic) => {
      return ({type: FETCH_PIC_SUCCESS, payload: pic});
  }

  export const fetchPicFail = (err) => {
      return ({type: FETCH_PIC_FAIL, payload: err});
  }