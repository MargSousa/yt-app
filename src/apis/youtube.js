import axios from 'axios';

const apiKey = "AIzaSyBwrEd8PlD4LlUsCcC3aQsM8ppLYj9B9QA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: apiKey
  }
})
