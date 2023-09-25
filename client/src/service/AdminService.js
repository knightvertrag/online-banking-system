import axios from "axios";

class AdminService {
  static async login(admin) {
    try {
      const response = await axios.post(
        "http://localhost:8085/obs/admin/loginAdmin",
        admin
      );
      console.log(admin);
      if (response.data === true) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login Error: ", error);
    }
  }

//   static async registerCustomer(customer) {
//     try {
//       const response = await axios.post(
//         "http://localhost:8085/obs/api/register",
//         customer
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Registration Error: ", error);
//     }
//   }

  static async getAllCustomers() {
    try {
      const response = await axios.get(
        `http://localhost:8085/obs/admin/allCustomers`
      );
      return response.data;
    } catch (error) {
      console.error("Fetch Error: ", error);
    }
  }
}

export default AdminService;
