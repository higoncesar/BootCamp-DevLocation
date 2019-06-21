import axios from 'axios';

export const githubApi = axios.create({
  baseURL: ' http://api.github.com',
});

export const ipApi = axios.create({
  baseURL: 'http://ip-api.com',
});


