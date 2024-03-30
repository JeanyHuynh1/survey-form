/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SurveyServices } from "../../api/userApi";
import './surveyForm.styles.css'
import SurveyModal from "./components/SurveyModal";

/* eslint-disable react/prop-types */
function SurveyForm() {
    const [surveys, setSurveys] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [surveyInfo, setSurveyInfo] = useState({});

    useEffect(
        () => {
            fetchSurveys();
        },
        []
    );

    useEffect(
        () => {
            if (surveyInfo.ID) {
                setIsVisibleModal(true);
            }
        },
        [surveyInfo]
    );

    return (
        <div className="container">
          <SurveyModal
              title="Create Survey"
              showModal={isVisibleModal}
              onClose={handleCloseModal}
              onDelete={handleDeleteSurvey}
              handleUpdateSurvey={surveyInfo.ID ? handleUpdateSurvey : handleCreateSurvey}
              isUpdateMode={surveyInfo.ID ? true : false}
              surveyID={surveyInfo.ID || ''}
              initialValues={surveyInfo.ID ? surveyInfo.Details : null}
          />
            <h1>Online Learning Experience</h1>
            {surveys && surveys.length > 0 ? (
                <div className="surveys-container">
                    {surveys.map((survey, index) => (
                        <div
                            key={index}
                            className="survey-item"
                        >
                            {`Survey ${index + 1}:`}
                            <div className="icons">
                                <>
                                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleOpenSurvey(survey)} />
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteSurvey(survey._id)} />
                                 </>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <p>There are no surveys right now! Create one</p>
                </>
          )}
          <button onClick={() => setIsVisibleModal(true)} style={{ marginTop: '20px' }}>Create Survey</button>
        </div>
  );
    
    async function fetchSurveys() {
        const response = await SurveyServices.fetchAllSurveys();

        setSurveys(response.data);
    }

    async function handleCreateSurvey(values) {
        await SurveyServices.CreateSurvey(values)
        fetchSurveys();
        handleCloseModal();
    }

    async function handleUpdateSurvey(values) {
        await SurveyServices.updateSurvey(surveyInfo.ID, values);
        fetchSurveys();
        handleCloseModal();
    }

    async function handleDeleteSurvey(surveyID) {
        await SurveyServices.deleteSurvey(surveyID);
        fetchSurveys();
        handleCloseModal();
    }

    function handleOpenSurvey(survey) {
        const surveyDetails = {
            name: survey.name,
            gender: survey.gender,
            email: survey.email,
            interaction: survey.interaction,
            platform: survey.platform,
            recommendations: survey.recommendations,
            access: survey.access
        };

        setSurveyInfo({
            ID: survey._id,
            Details: surveyDetails,
        });
    }

    function handleCloseModal() {
        setIsVisibleModal(false);
        if (surveyInfo.ID) {
            setSurveyInfo({});
        }
    }
}

export default SurveyForm;
