/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SurveyServices } from "../../api/userApi";
import './surveyForm.styles.css'
import SurveyModal from "./components/SurveyModal";

/* eslint-disable react/prop-types */
function SurveyForm({ onSignOut }) {
    const [surveys, setSurveys] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    useEffect(
        () => {
            fetchSurveys();
        },
        []
    );

  return (
      <div className="container">
          <SurveyModal
              title="Create Survey"
              showModal={isVisibleModal}
              onClose={() => setIsVisibleModal(false)}
              handleUpdateSurvey={handleCreateSurvey}
          />
            <h1>Survey Form</h1>
            {surveys && surveys.length > 0 ? (
                <div className="surveys-container">
                    {surveys.map((survey, index) => (
                        <div key={index} className="survey-item">
                            {`Survey ${index + 1}:`}
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <p>There are no surveys right now! Create one</p>
                </>
          )}
          <button onClick={() => setIsVisibleModal(true)} style={{ marginTop: '20px' }}>Create Survey</button>
          <button onClick={onSignOut} style={{ marginTop: '20px' }}>Sign Out</button>
        </div>
  );
    
    async function fetchSurveys() {
        const response = await SurveyServices.fetchAllSurveys();

        setSurveys(response.data);
    }

    async function handleCreateSurvey(values) {
        await SurveyServices.CreateSurvey(values)
        fetchSurveys();
        setIsVisibleModal(false)
    }
}

export default SurveyForm;
