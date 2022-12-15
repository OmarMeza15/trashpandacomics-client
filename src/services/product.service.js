import axios from 'axios';

class ProductService {
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

  // POST /reviews/review
  createProduct = async (requestBody) => {
    return this.api.post('/product/new-product', requestBody);
  }

  // GET /reviews/review
  getAllProducts = async () => {
    return this.api.get('/product/shop');
  }

  // GET /reviews/review/upload
  uploadImage = (file) => {
    return this.api.post('/product/new-product/upload', file)
      .then(res => res.data)
      .catch(console.log);
  };

  // GET /shop/:id/details

}

// Create one instance of the service
const productService = new ProductService();

export default productService;