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

  // POST /product/new-product
  createProduct = async (requestBody) => {
    return this.api.post('/product/new-product', requestBody);
  }

  // GET /product/shop
  getAllProducts = async () => {
    return this.api.get('/product/shop');
  }

  // GET /product/new-product/upload
  uploadImage = (file) => {
    return this.api.post('/product/new-product/upload', file)
      .then(res => res.data)
      .catch(console.log);
  };

  // GET /product/shop/:id/details
  getProductDetails = async (id) => {
    return this.api.get(`/product/shop/${id}/details`);
  }

  // PUT /product/shop/:id/details/edit
  updateOne = async (id, requestBody) => {
    return this.api.put(`/product/shop/${id}/details/edit`, requestBody)
  }

  deleteOne = async (id) => {
    return this.api.delete(`/product/shop/${id}/details`)
  }

}

// Create one instance of the service
const productService = new ProductService();

export default productService;