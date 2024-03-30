import axios from 'axios'

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
    static async getUserDetails() {
        //will return jwt token
        const userToken = localStorage.getItem('userToken');

       return await axios.get(`http://localhost:8080/api/users/current`, {
            headers: {
               Authorization: userToken ? `Bearer ${userToken}` : undefined,
           }
       });
    }
}
  
export class SurveyServices {
    static async fetchAllSurveys() {
        const userToken = localStorage.getItem('userToken');
        
        return await axios.get(`http://localhost:8080/api/surveys`, {
            headers: {
               Authorization: userToken ? `Bearer ${userToken}` : undefined,
           }
       });
    }

    static async CreateSurvey(surveyData) {
        const userToken = localStorage.getItem('userToken');

        return await axios.post(`http://localhost:8080/api/surveys`, surveyData, {
            headers: {
                Authorization: userToken ? `Bearer ${userToken}` : '',
            }
        });
    }

    static async updateSurvey(surveyID, surveyData) {
        const userToken = localStorage.getItem('userToken');

        return await axios.put(`http://localhost:8080/api/surveys/${surveyID}`, surveyData, {
            headers: {
                Authorization: userToken ? `Bearer ${userToken}` : '',
            }
        });
    }

    static async deleteSurvey(surveyID) {
        const userToken = localStorage.getItem('userToken');
        
        return await axios.delete(`http://localhost:8080/api/surveys/${surveyID}`, {
            headers: {
                Authorization: userToken ? `Bearer ${userToken}` : '',
            }
        });
    }
}