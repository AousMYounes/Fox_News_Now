import axios from 'axios';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
// const [articles, setArticles]=useState([]);
// export const fetchNews = () => async dispatch => {
//   dispatch({ type: FETCH_NEWS_REQUEST });
//   try {
//     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=21a8d04ed0a744ea82659559f21994a5');
//     dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
//   }
// };

const API_URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=8cfd5fb20175405ea3950485a5ac4454';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
});

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
});

export const fetchNews = () => {
  return dispatch => {
    dispatch(fetchNewsRequest());
    axios.get(API_URL)
      .then(response => {
        dispatch(fetchNewsSuccess(response.data.articles));
       
      })
      .catch(error => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};




