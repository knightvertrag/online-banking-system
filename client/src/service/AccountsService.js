import axios from "axios";

class AccountsService {
  static async createAccount(custId, account) {
    try {
      const response = await axios.post(
        `http://localhost:8085/obs/accounts/createAccount/${custId}`,
        account
      );
      return response.data;
    } catch (error) {
      console.error("Create Account Error: ", error);
    }
  }
}

export default AccountsService;