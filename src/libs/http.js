import axios from 'axios';

async function httpGet(url) {
  const httpGet = await axios.get(url);
  const resHttpGet = httpGet.data;
  return resHttpGet;
}

export { httpGet }