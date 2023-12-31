import axios from "axios";

class TransactionsService {
  static async createTransaction(transaction) {
    try {
      const response = await axios.post(
        "http://localhost:8085/obs/transactions/createTransaction",
        transaction
      );
      return response.data;
    } catch (error) {
      console.error("Create Transaction Error: ", error);
      return error.response;
    }
  }

  static async getTransactions(accNo) {
    try {
      const response = await axios.get(
        "http://localhost:8085/obs/transactions/transactions/" + accNo
      );
      console.log(response.data);
      return response;
      
    } catch (error) {
      console.error("Fetch transactions error: ", error);
    }
  }
}

export default TransactionsService;
