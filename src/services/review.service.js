import axios from 'axios';

class ReviewService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createReview = async (requestBody) => {
    return this.api.post('/review/reviews', requestBody);
  }

  // GET /api/examples
  getAllReviews = async () => {
    return this.api.get('/review/reviews');
  }

  uploadImage = (file) => {
    return this.api.post('/review/reviews/upload', file)
      .then(res => res.data)
      .catch(console.log);
  };


}

// Create one instance of the service
const reviewService = new ReviewService();

export default reviewService;