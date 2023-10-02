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
      //console.log(response.data);
      return response;
    } catch (error) {
      console.error("Fetch Error: ", error);
    }

    
  }
  static async deactivateAccount(accntNo){
    try {
      const response = await axios.post(
        `http://localhost:8085/obs/admin/deactivateAccount/` + accntNo
      );
      return response
    } catch(error){
      console.error("Fetch error: ", error);
    }
  }
  static async activateAccount(accntNo){
    try{
      const response = await axios.get(
        `http://localhost:8085/obs/admin/activateAccount/` + accntNo
      );
      return response
    } catch(error){
      console.error("Fetch error: ", error);
    }
  }
  static async deposit(transact){
    try{
      const response = await axios.post(
        `http://localhost:8085/obs/admin/deposit/` + transact.accntNo + `/` + transact.amount
      );
     
      return response
    } catch(error){
      console.error("Fetch error: ", error);
      return error.response;
    }
  }
  static async withdraw(transact){
    try{
      const response = await axios.post(
        `http://localhost:8085/obs/admin/withdraw/` + transact.accntNo + `/` + transact.amount
      );
      return response
    } catch(error){
      console.error("Fetch error: ", error);
    }
  }

}

export default AdminService;
