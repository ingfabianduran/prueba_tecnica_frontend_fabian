import axios from 'axios';

async function httpGet(url) {
  const httpGet = await axios.get(url);
  const resHttpGet = httpGet.data;
  return resHttpGet;
}

async function httpPost(url, data) {
  const httpPost = await axios.post(url, data);
  const resHttpPost = httpPost.data;
  return resHttpPost;
}

export { httpGet, httpPost };