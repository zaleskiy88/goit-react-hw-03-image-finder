import axios from 'axios';

const PIXABAY_KEY = '27402135-07abda6b2694d48097ccb4094';
const URL = `https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12`;

export const pixabayApi = axios.create({
  baseURL: URL,
  params: { key: PIXABAY_KEY },
});
