import axios from 'axios';

export default axios.create({
  baseURL: `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/`,
  timeout: 1000,
  headers: {
  	'x-api-key': 'ImqpEP88M597QqbYD48IVab3Y8Il7cqo3WzWHty8',
    'Content-Type': 'application/json'
  }
});