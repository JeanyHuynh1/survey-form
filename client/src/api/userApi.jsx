import axios from 'axios'

export default class UserServices {
    static async registerUser(userData) {
        //will return jwt token
       return await axios.post('http://localhost:8080/api/users/register',userData);
    }
    static async loginUser (loginData) {
        return await axios.post('http://localhost:8080/api/users/login',loginData);
    }
}
  