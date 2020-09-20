import * as config from '../../../config'

import axios from 'axios';

const PART = 'snippet';
const MAX_RESULTS = 50;

// async function subscriptions() {

//   const url = `https://www.googleapis.com/youtube/v3/subscriptions?channelId=${config.CHANNEL_ID}&part=${PART}&key=${config.API_KEY}&maxResults=${MAX_RESULTS}`

//   const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//   }
//   const res = await fetch(url, options);
//   return await res.json();
// }
// export default subscriptions;


export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/subscriptions?channelId=${config.CHANNEL_ID}&part=${PART}&key=${config.API_KEY}&maxResults=${MAX_RESULTS}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})