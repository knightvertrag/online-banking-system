import axios from "axios";

class AuthenticationService {
  static async login(customer) {
    try {
      const response = await axios.post(
        "http://localhost:8085/obs/api/loginCustomer",
        customer
      );
      if (response.data === true) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login Error: ", error);
    }
  }

  static async registerCustomer(customer) {
    try {
      const response = await axios.post(
        "http://localhost:8085/obs/api/register",
        customer
      );
      return response.data;
    } catch (error) {
      console.error("Registration Error: ", error);
    }
  }

  static async getCustomer(custId) {
    try {
      const response = await axios.get(
        `http://localhost:8085/obs/api/userDetails/${custId}`
      );
      return response.data;
    } catch (error) {
      console.error("Fetch Error: ", error);
    }
  }
}

export default AuthenticationService;
