import * as config from '../../../config'

async function subscriptions() {
  const PART = 'snippet';
  const MAX_RESULTS = 50;

  const url = `https://www.googleapis.com/youtube/v3/subscriptions?channelId=${config.CHANNEL_ID}&part=${PART}&key=${config.API_KEY}&maxResults=${MAX_RESULTS}`

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  }
  let res = await fetch(url, options);
  return await res.json();
}
export default subscriptions;