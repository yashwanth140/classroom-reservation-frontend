// src/api.js

const BACKEND_URL = process.env.NODE_ENV === 'production'
  ? 'https://classroom-reservation-backend-fhb6gjdjgrgbh0fz.westus-01.azurewebsites.net'
  : 'http://localhost:5000';

export default BACKEND_URL;
