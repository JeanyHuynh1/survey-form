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
            return response.data;
        }
        catch {
            throw new Error;
        }
    }
}
  
export class SurveyServices {
    static async fetchAllSurveys() {
        const userToken = localStorage.getItem('userToken');
        console.log('userToken', userToken);
        
        return await axios.get(`http://localhost:8080/api/surveys`, {
            headers: {
               Authorization: token ? `Bearer ${userToken}` : undefined,
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

    static async updateSurvey(surveyID, surveyData) {
        return await axios.put(`http://localhost:8080/api/surveys/${surveyID}`, surveyData, {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            }
        });
    }

    static async deleteSurvey(surveyID) {
        return await axios.delete(`http://localhost:8080/api/surveys/${surveyID}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            }
        });
    }
}