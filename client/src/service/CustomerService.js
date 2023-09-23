import axios from "axios";

class CustomerService {

    static getCustomerById(custId){
        return axios.get('http://localhost:8085/obs/api/userDetails/'+custId);
    }

    static updateCustomer(customer, custId){
        return axios.put('http://localhost:8085/obs/api/updateDetails/'+custId,customer);
    }

}

export default CustomerService;