import axios from "axios";

const baseUrl = "https://localhost:5001/api/"

export default {
    donationCandidate(url = baseUrl + 'donationCandidate/') {
        return {
                fetchAll : () => axios.get(url + 'GetAll'),
                fetcheById :id => axios.get(url + id),
                create : newRecord => axios.post(url, newRecord),
                update : (id, updatedRecord) => axios.put(url + id, updatedRecord),
                delete : id => axios.delete(url + id)
        }
    }
}
