import axios from 'axios'

const token = localStorage.getItem('userToken');

export class UserServices {
    static async registerUser(userData) {
        //will return jwt token
       return await axios.post('http://localhost:8080/api/users/register',userData);
    }
    static async loginUser (loginData) {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', loginData);
            console.log('response.data', response.data);
            return response.data;
        }
        catch {
            throw new Error;
        }
    }
}
  
export class SurveyServices {
    static async fetchAllSurveys() {
        return await axios.get(`http://localhost:8080/api/surveys`, {
            headers: {
               Authorization: token ? `Bearer ${token}` : undefined,
           }
       });
    }

    static async CreateSurvey(surveyData) {
        return await axios.post(`http://localhost:8080/api/surveys`, surveyData, {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            }
        });
    }
}