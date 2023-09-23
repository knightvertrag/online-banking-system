import axios from "axios";

class AccountsService {
  static async createAccount(custId, account) {
    // console.log(account);
    try {
      const response = await axios.post(
        'http://localhost:8085/obs/accounts/createAccount/'+custId,
      //  `http://localhost:8085/obs/accounts/createAccount/${custId}`,
        account
      );
      return response.data;
    } catch (error) {
      console.error("Create Account Error: ", error);
    }
  }

  static async getAccounts(custId) {
    try {
        const response = await axios.get('http://localhost:8085/obs/accounts/getAccounts/' + custId);
        
        return response
    
      }
    catch (error) {
        console.error('Account login error: ', error);
    }
}
}

export default AccountsService;