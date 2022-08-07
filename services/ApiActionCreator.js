import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const apiActionCreator = url => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        // Deep cloned the response from backend
        var data = JSON.parse(JSON.stringify(response.data));
        // Clone the data 30 times as we increase the list size from 100 to 30000
        for (let i = 0; i < 30; i++) {
          var deepClonedArray = JSON.parse(JSON.stringify(response.data));
          Array.prototype.push.apply(data, deepClonedArray);
        }
        // Assign a random number to the response object
        // That number should be in between 1000000000 and 9000000000
        data.map(item => {
          item.randomNumber = ((Math.random() + 1) * 1000000000).toFixed(0);
        });
        dispatch(fetchSuccess(data));
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
